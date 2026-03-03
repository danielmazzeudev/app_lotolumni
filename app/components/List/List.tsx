import { FlatList } from 'react-native';
import styles from './List.styles';

interface ListProps<T> {
    data: T[];
    renderItem: ({ item }: { item: T }) => React.ReactElement;
    keyExtractor?: (item: T) => string; 
}

export default function List<T>({ data, renderItem, keyExtractor }: ListProps<T>) {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            style={styles.list} 
            contentContainerStyle={styles.container} 
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false} 
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={5}
            removeClippedSubviews={true}
        />
    );
}