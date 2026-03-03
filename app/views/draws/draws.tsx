import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Body from '@/app/components/Body/Body';
import DrawsCard from '@/app/components/DrawsCard/DrawsCard';
import Header from '@/app/components/Header/Header';
import List from '@/app/components/List/List';
import Loading from '@/app/components/Loading/Loading';
import Nav from '@/app/components/Nav/Nav';
import SafeArea from '@/app/components/SafeArea/SafeArea';
import Search from '@/app/components/Search/Search';

interface DrawData {
    draw_number: number;
    draw_date: string;
    numbers: string[];
    winners_15_numbers: number;
    winners_14_numbers: number;
    winners_13_numbers: number;
    winners_12_numbers: number;
    winners_11_numbers: number;
    prize_value_15_numbers: number;
    prize_value_14_numbers: number;
    prize_value_13_numbers: number;
    prize_value_12_numbers: number;
    prize_value_11_numbers: number;
    accumulated_prize: number;
}

const STORAGE_KEY = '@lotofacil_draws_cache';

export default function Draws() {
    const [draws, setDraws] = useState<DrawData[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const sortData = useCallback((data: DrawData[]) => {
        if (!Array.isArray(data)) return [];
        return [...data].sort((a, b) => (b.draw_number || 0) - (a.draw_number || 0));
    }, []);

    const loadData = async (forceRefresh = false) => {
        try {
            setLoading(true);
            const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
            
            if (cachedData && !forceRefresh) {
                try {
                    const parsedData = JSON.parse(cachedData);
                    if (Array.isArray(parsedData)) {
                        setDraws(sortData(parsedData));
                        setLoading(false);
                        return;
                    }
                } catch (e) {
                    await AsyncStorage.removeItem(STORAGE_KEY);
                }
            }

            const response = await fetch('https://lotofacil.danielmazzeu.com.br/', {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });

            if (!response.ok) throw new Error('Falha na resposta da rede');

            const data: DrawData[] = await response.json();
            
            if (Array.isArray(data)) {
                const sortedData = sortData(data);
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(sortedData));
                setDraws(sortedData);
            }
        } catch (err) {
            console.error("Erro ao processar dados:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadData(); }, []);

    const filteredDraws = useMemo(() => {
        if (!draws || !Array.isArray(draws)) return [];
        
        const trimmedSearch = search.trim();

        if (trimmedSearch === '') return draws;
        
        return draws.filter((item) => {
            const drawNumStr = item.draw_number?.toString() || '';
            return drawNumStr === trimmedSearch;
        });
    }, [search, draws]);

    return (
        <SafeArea>
            <Header 
                title="Sorteios" 
                description="Explore a base de dados completa de todos os concursos da história da Lotofácil. Consulte resultados, valores de premiações e detalhes de cada sorteio realizado até hoje." 
                small={
                    loading 
                    ? "Sincronizando..." 
                    : search && filteredDraws.length === 0 
                        ? `Concurso ${search} não encontrado.` 
                        : `Total de ${draws.length} concursos.`
                } 
            />
            
            <Search 
                value={search} 
                onChangeText={(text) => setSearch(text.replace(/[^0-9]/g, ''))}
                placeholder="Digite o concurso (ex: 1)" 
                onPress={() => loadData(true)} 
                isLoading={loading} 
            />

            <Body>
                {loading && draws.length === 0 ? (
                    <Loading />
                ) : (
                    <List 
                        data={filteredDraws} 
                        keyExtractor={(item: DrawData) => item.draw_number.toString()}
                        renderItem={({ item }: { item: DrawData }) => (
                            <DrawsCard 
                                draw={item.draw_number} 
                                date={item.draw_date} 
                                numbers={item.numbers} 
                                winners15={item.winners_15_numbers}
                                prize15={item.prize_value_15_numbers}
                                winners14={item.winners_14_numbers}
                                prize14={item.prize_value_14_numbers}
                                winners13={item.winners_13_numbers}
                                winners12={item.winners_12_numbers}
                                winners11={item.winners_11_numbers}
                                accumulatedPrize={item.accumulated_prize} 
                            />
                        )}
                    />
                )}
            </Body>
            <Nav />
        </SafeArea>
    );
}