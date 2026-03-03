import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styles from './NumbersCard.styles';

interface NumbersCardProps {
    number: string | number;
    absolute: number;
    relative: string;
    maxAbsolute: number;
}

const NumbersCard = memo(({ number, absolute, relative, maxAbsolute }: NumbersCardProps) => {
    const fillWidth = maxAbsolute > 0 
        ? Math.min(100, (absolute / maxAbsolute) * 100) 
        : 0;

    return (
        <View style={styles.card}>
            <View style={styles.numberBox}>
                <Text style={styles.number} allowFontScaling={false}>
                    {typeof number === 'number' ? number.toString().padStart(2, '0') : number}
                </Text>
            </View>
            <View style={styles.content}>
                <View style={styles.frequencyContainer}>
                    <View style={styles.frequency}>
                        <Text style={styles.valueText} allowFontScaling={false}>{absolute}</Text>
                        <Text style={styles.labelText} allowFontScaling={false}>Sorteios</Text>
                    </View>
                    <View style={[styles.frequency, styles.borderLeft]}>
                        <Text style={styles.valueText} allowFontScaling={false}>{relative}</Text>
                        <Text style={styles.labelText} allowFontScaling={false}>Frequência</Text>
                    </View>
                </View>
                <View style={styles.percentageContainer}>
                    <View 
                        style={[
                            styles.percentageBar, 
                            { width: `${fillWidth}%` } 
                        ]} 
                    />
                </View>
            </View>
        </View>
    );
});

export default NumbersCard;