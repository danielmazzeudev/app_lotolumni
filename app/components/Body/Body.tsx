import { View } from 'react-native';
import styles from './Body.styles';

interface BodyProps {
    children: React.ReactNode;
}

export default function Body({ children }: BodyProps) {
    return (
        <View style={styles.body}>
            {children}
        </View>
    );
}