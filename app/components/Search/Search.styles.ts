import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    search: {
        marginHorizontal: 15,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10, 
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderLeftColor: '#943391',
        borderRightColor: '#943391',
        backgroundColor: '#fff',
        elevation: 2
    },
    icon: {
        marginHorizontal: 13,
    },
    input: {
        flex: 1,
        padding: 15,
        borderLeftWidth: 1,
        fontSize: 14,
        borderStyle: 'solid',
        borderLeftColor: '#eee',
    },
    button: {
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderLeftColor: '#eee'
    },
    clear: {
        color: 'red'
    }
});

export default styles;