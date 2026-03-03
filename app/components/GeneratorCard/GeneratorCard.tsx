import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Clipboard from 'expo-clipboard';
import { Copy, Play } from 'lucide-react-native';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Text, TouchableOpacity, View } from "react-native";
import Loading from "../Loading/Loading";
import styles from './GeneratorCard.styles';

const ADS_ENABLED = false;

const adUnitId = __DEV__ 
    ? 'ca-app-pub-3940256099942544/5224354917'
    : 'ca-app-pub-6198135878736596/7745385077';

const STORAGE_KEY = '@lotofacil_draws_cache';

export default function Generator() { 
    const [randomNumbers, setRandomNumbers] = useState(Array(15).fill('00'));
    const [loading, setLoading] = useState(true); 
    const [adLoaded, setAdLoaded] = useState(false);
    const [isShuffling, setIsShuffling] = useState(false);
    
    const rewardedAdRef = useRef<any>(null);
    const drawsRef = useRef<any[]>([]);

    const copyToClipboard = async () => {
        if (randomNumbers.every(n => n === '00')) {
            Alert.alert("Aviso", "Gere uma sequência primeiro!");
            return;
        }

        const textToCopy = randomNumbers.join(', ');
        await Clipboard.setStringAsync(textToCopy);
        Alert.alert("Copiado!", `A sequência ${textToCopy} foi enviada para a área de transferência.`);
    };

    const getNewCombination = useCallback(() => {
        const currentDraws = drawsRef.current;
        if (currentDraws.length === 0) return null;

        const frequencyMap: Record<string, number> = {};
        currentDraws.forEach(draw => {
            draw.numbers.forEach((num: string) => {
                frequencyMap[num] = (frequencyMap[num] || 0) + 1;
            });
        });

        const top = Object.entries(frequencyMap)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 20)
            .map(entry => entry[0]);

        const combination = new Set<string>();
        while (combination.size < 15) {
            const randomIndex = Math.floor(Math.random() * top.length);
            combination.add(top[randomIndex]);
        }

        return Array.from(combination)
            .sort((a, b) => Number(a) - Number(b))
            .map(n => n.padStart(2, '0'));
    }, []);

    const startDrawEffect = useCallback(() => {
        if (isShuffling) return;
        
        setIsShuffling(true);
        let iterations = 0;
        const maxIterations = 9;

        const interval = setInterval(() => {
            const tempNumbers = getNewCombination();
            if (tempNumbers) {
                setRandomNumbers(tempNumbers);
            }

            iterations++;
            if (iterations >= maxIterations) {
                clearInterval(interval);
                setIsShuffling(false);
            }
        }, 100);
    }, [getNewCombination, isShuffling]);

    useEffect(() => {
        const initializeData = async () => {
            try {
                setLoading(true);
                const cachedData = await AsyncStorage.getItem(STORAGE_KEY);
                
                if (cachedData) {
                    drawsRef.current = JSON.parse(cachedData);
                } else {
                    const res = await fetch('https://lotofacil.danielmazzeu.com.br/');
                    const data = await res.json();
                    drawsRef.current = data;
                    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                }
            } catch (error) {
                console.error("Erro ao carregar dados no Gerador:", error);
            } finally {
                setLoading(false);
            }
        };

        initializeData();

        if (ADS_ENABLED) {
            const { RewardedAd, RewardedAdEventType, AdEventType } = require('react-native-google-mobile-ads');
            if (!rewardedAdRef.current) {
                rewardedAdRef.current = RewardedAd.createForAdRequest(adUnitId, { requestNonPersonalizedAdsOnly: true });
            }
            const ad = rewardedAdRef.current;
            const unsubLoaded = ad.addAdEventListener(RewardedAdEventType.LOADED, () => setAdLoaded(true));
            const unsubEarned = ad.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => startDrawEffect());
            const unsubClosed = ad.addAdEventListener(AdEventType.CLOSED, () => { setAdLoaded(false); ad.load(); });
            const unsubError = ad.addAdEventListener(AdEventType.ERROR, (error: any) => { console.warn("AdMob Error:", error); setAdLoaded(false); });
            ad.load();
            return () => { unsubLoaded(); unsubEarned(); unsubClosed(); unsubError(); };
        }
    }, [startDrawEffect]);

    const handlePress = () => {
        if (isShuffling) return;
        if (ADS_ENABLED && rewardedAdRef.current) {
            if (adLoaded) { rewardedAdRef.current.show(); } 
            else { rewardedAdRef.current.load(); }
        } else {
            startDrawEffect();
        }
    };

    if (loading) return <Loading />;

    return (
        <View style={styles.card}>
            <View style={[styles.numbers, { flexWrap: 'wrap', justifyContent: 'center' }]}>
                {randomNumbers.map((num, index) => {
                    const isDisabled = num === '00' || isShuffling;
                    return (
                        <View 
                            key={index} 
                            style={[
                                styles.numberBox,
                                { margin: 4 },
                                isDisabled && { backgroundColor: '#eee', borderColor: '#ddd' } 
                            ]}
                        >
                            <Text 
                                style={[
                                    styles.numberText, 
                                    isDisabled && { color: '#999' } 
                                ]} 
                                allowFontScaling={false}
                            >
                                {num}
                            </Text>
                        </View>
                    );
                })}
            </View>

            <View style={{ width: '100%' }}>
                <TouchableOpacity 
                    style={[
                        styles.button, 
                        { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 },
                        (isShuffling || (ADS_ENABLED && !adLoaded)) && { backgroundColor: '#ccc' } 
                    ]} 
                    onPress={handlePress}
                    disabled={isShuffling || (ADS_ENABLED && !adLoaded)}
                >
                    {isShuffling ? (
                        <>
                            <ActivityIndicator size="small" color="#999" />
                            <Text style={[styles.buttonText, { color: '#999' }]} allowFontScaling={false}>Gerando...</Text>
                        </>
                    ) : (
                        <>
                            <Play size={18} color="#fff" />
                            <Text style={styles.buttonText} allowFontScaling={false}>
                                {ADS_ENABLED ? "Assista para gerar" : "Gerar Sequência"}
                            </Text>
                        </>
                    )}
                </TouchableOpacity>

                {!isShuffling && randomNumbers[0] !== '00' && (
                    <TouchableOpacity 
                        style={[
                            styles.button, 
                            { 
                                marginTop: 0,
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'center', 
                                gap: 8,
                                backgroundColor: '#4b5563'
                            }
                        ]} 
                        onPress={copyToClipboard}
                    >
                        <Copy size={18} color="#fff" />
                        <Text style={styles.buttonText} allowFontScaling={false}>
                            Copiar Sequência
                        </Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}