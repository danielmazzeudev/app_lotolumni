import { Text, View } from "react-native";
import styles from './Header.styles';

interface HeaderProps {
    title: string;
    description: string;
    small: string;
}

export default function Header({ title, description, small }: HeaderProps) {
    return (
        <View style={styles.header}>
            <Text style={styles.h1} allowFontScaling={false}>{title}</Text>
            <Text style={styles.p} allowFontScaling={false}>{description}</Text>
            <Text style={styles.small} allowFontScaling={false}>{small}</Text>
        </View>
    );
}