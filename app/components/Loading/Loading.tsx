import { ActivityIndicator, View } from 'react-native';
import styles from './Loading.styles';

export default function Loading() {
    return (
        <View style={styles.loading}>
            <ActivityIndicator size="large" color="#943391" />
        </View>
    );
}