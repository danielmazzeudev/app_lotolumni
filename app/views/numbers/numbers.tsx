'use client';

import Body from '@/app/components/Body/Body';
import Header from '@/app/components/Header/Header';
import List from '@/app/components/List/List';
import Loading from '@/app/components/Loading/Loading';
import Nav from '@/app/components/Nav/Nav';
import NumbersCard from '@/app/components/NumbersCard/NumbersCard';
import SafeArea from '@/app/components/SafeArea/SafeArea';
import Search from '@/app/components/Search/Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useMemo, useState } from 'react';

interface DrawData {
    draw_number: number;
    numbers: string[];
}

const STORAGE_KEY = '@lotofacil_draws_cache';

export default function Numbers() {
    const [draws, setDraws] = useState<DrawData[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const loadData = async (forceRefresh = false) => {
        try {
            setLoading(true);
            const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
            
            let data: DrawData[];

            if (cachedData && !forceRefresh) {
                data = JSON.parse(cachedData);
            } else {
                // 2. Atualizado endpoint para Lotofácil
                const res = await fetch('https://lotofacil.danielmazzeu.com.br/');
                data = await res.json();
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            }

            const sortedData = data.sort((a, b) => a.draw_number - b.draw_number);
            setDraws(sortedData);
        } catch (err) {
            console.error("Erro ao buscar dados:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const { statsData, maxAbsolute } = useMemo(() => {
        const total = draws.length;
        if (total === 0) return { statsData: [], maxAbsolute: 0 };

        let currentMax = 0;
        
        const data = Array.from({ length: 25 }, (_, i) => {
            const numStr = (i + 1).toString().padStart(2, '0');
            const absolute = draws.reduce((acc, draw) => 
                acc + (draw.numbers.includes(numStr) ? 1 : 0), 0
            );

            if (absolute > currentMax) currentMax = absolute;
            const relative = ((absolute / total) * 100).toFixed(2);

            return {
                number: numStr,
                absolute,
                relative: `${relative}%`
            };
        });

        return { statsData: data, maxAbsolute: currentMax };
    }, [draws]);

    const filteredStats = useMemo(() => {
        const term = search.trim();
        if (!term) return statsData;

        return statsData.filter(item => {
            const itemNumber = parseInt(item.number);
            const searchNumber = parseInt(term);
            return itemNumber === searchNumber;
        });
    }, [search, statsData]);

    const smallText = loading 
        ? "Sincronizando estatísticas..." 
        : `Análise baseada em ${draws.length} concursos.`;

    return (
        <SafeArea>
            <Header 
                title="Estatísticas das Dezenas" 
                description="Análise técnica de frequência absoluta e relativa da Lotofácil. A barra indica o desempenho de cada dezena em relação às mais sorteadas." 
                small={smallText}  
            />  
            <Search 
                value={search} 
                onChangeText={(text: string) => setSearch(text)} 
                placeholder="Pesquisar dezena (01 a 25)..." 
                onPress={() => loadData(true)} 
                isLoading={loading} 
            />
            <Body>
                {loading && draws.length === 0 ? (
                    <Loading />
                ) : (
                    <List 
                        data={filteredStats}
                        keyExtractor={(item) => item.number}
                        renderItem={({ item }) => (
                            <NumbersCard 
                                number={parseInt(item.number)}
                                absolute={item.absolute}
                                relative={item.relative}
                                maxAbsolute={maxAbsolute}
                            />
                        )}
                    />
                )}
            </Body>
            <Nav />
        </SafeArea>
    );
}