import React from 'react';
import { Text, View } from 'react-native';
import styles from './DrawsCard.styles';

export interface DrawsCardProps {
    draw: number;
    date: string;
    numbers: string[];
    winners15: number;
    prize15: number;
    winners14: number;
    prize14: number;
    winners13: number;
    winners12: number;
    winners11: number;
    accumulatedPrize: number;
}

export default function DrawsCard(props: DrawsCardProps) {
    const formatMoney = (val: number) => 
        val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.badge}>Concurso: {props.draw}</Text>
                <Text style={[styles.badge, styles.borderLeft]}>{props.date}</Text>
            </View>
            <View style={styles.dozens}>
                {props.numbers.map((num, i) => (
                    <View key={i} style={[styles.numbers, { minWidth: '17%', marginBottom: 5 }]}>
                        <Text style={styles.number}>{num}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.resultsContainer}>
                <View style={styles.details}>
                    <Text style={styles.strong}>15 Acertos</Text>
                    <Text style={[styles.small, styles.borderLeft]}>{props.winners15} ganh.</Text>
                    <Text style={[styles.money, styles.borderLeft]}>{formatMoney(props.prize15)}</Text>
                </View>
                <View style={[styles.details, styles.borderTop]}>
                    <Text style={styles.strong}>14 Acertos</Text>
                    <Text style={[styles.small, styles.borderLeft]}>{props.winners14} ganh.</Text>
                    <Text style={[styles.money, styles.borderLeft]}>{formatMoney(props.prize14)}</Text>
                </View>
                <View style={[styles.details, styles.borderTop]}>
                    <Text style={styles.strong}>13 Acertos</Text>
                    <Text style={[styles.small, styles.borderLeft]}>{props.winners13} ganh.</Text>
                    <Text style={[styles.money, styles.borderLeft]}>R$ 30,00</Text>
                </View>
                <View style={[styles.details, styles.borderTop]}>
                    <Text style={styles.strong}>12 Acertos</Text>
                    <Text style={[styles.small, styles.borderLeft]}>{props.winners12} ganh.</Text>
                    <Text style={[styles.money, styles.borderLeft]}>R$ 12,00</Text>
                </View>
                <View style={[styles.details, styles.borderTop]}>
                    <Text style={styles.strong}>11 Acertos</Text>
                    <Text style={[styles.small, styles.borderLeft]}>{props.winners11} ganh.</Text>
                    <Text style={[styles.money, styles.borderLeft]}>R$ 6,00</Text>
                </View>
                {props.accumulatedPrize > 0 && (
                    <View style={[styles.details, styles.borderTop]}>
                        <Text style={[styles.badge, styles.badgeSpecial]}>Valor Acumulado</Text>
                        <Text style={[styles.money, styles.badgeSpecial, styles.borderLeft]}>
                            {formatMoney(props.accumulatedPrize)}
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}