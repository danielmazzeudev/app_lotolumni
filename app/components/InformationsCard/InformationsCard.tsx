import { Lightbulb } from 'lucide-react-native';
import { Text, View } from 'react-native';
import styles from './InformationsCard.styles';

interface InformationsCardProps {
    title: string,
    information: string
}

export default function InformationsCard({title, information}: InformationsCardProps) {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Lightbulb size={18} color='#943391' />
                <Text style={styles.title} allowFontScaling={false}>{title}</Text>
            </View>
            <Text style={styles.information} allowFontScaling={false}>{information}</Text>
        </View>
    );
}