'use client';

import { Linking, Text, View } from "react-native";
import styles from './OfferingCard.styles';

export default function OfferingCard() {
    const currentYear = new Date().getFullYear();
    const appVersion = '1.0.0';

    const openLink = () => {
        Linking.openURL('https://danielmazzeu.com.br/');
    };

    return (
        <View style={styles.card}>
            <Text style={styles.text} allowFontScaling={false}>
                Desenvolvido por{" "}
                <Text style={styles.link} onPress={openLink} allowFontScaling={false}>
                    Daniel Mazzeu
                </Text>.
            </Text>
            <Text style={styles.text} allowFontScaling={false}>
                © {currentYear} Todos os direitos reservados.
            </Text>
            <Text style={styles.text} allowFontScaling={false}>
                Versão {appVersion}
            </Text>
        </View>
    );
}