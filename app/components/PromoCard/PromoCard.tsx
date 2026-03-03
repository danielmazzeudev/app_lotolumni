import React from "react";
import { Linking, Text, View } from "react-native";
import styles from './PromoCard.styles';

export default function PromoCard() { 
    const handleContactPress = () => {
        Linking.openURL('mailto:danielmazzeu.dev@gmail.com?subject=Anúncio no App Megalumni');
    };

    return (
        <View style={styles.card}>
            <Text style={styles.text} allowFontScaling={false}>Sua propaganda aqui</Text>
            <Text style={styles.small} allowFontScaling={false}>Tenha sua propaganda sendo mostrada para todos os usuários do aplicativo, entre em contato no link abaixo.</Text>
            <Text style={styles.link} onPress={handleContactPress} allowFontScaling={false}>Contato</Text>
        </View>
    );
}