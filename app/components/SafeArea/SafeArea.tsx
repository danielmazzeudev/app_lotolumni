import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './SafeArea.styles';

interface SafeAreaProps {
    children: React.ReactNode;
}

export default function SafeArea({ children }: SafeAreaProps) {
    return (
        <SafeAreaView style={styles.safeArea}>
            {children}
        </SafeAreaView>
    );
}

