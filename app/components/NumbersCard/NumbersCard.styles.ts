import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    card: {
        overflow: 'hidden',
        marginHorizontal: 15,
        flexDirection: 'row',
        borderRadius: 10, 
        backgroundColor: '#943391',
        elevation: 2
    },
    numberBox: {
        width: 60,
        minHeight: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#943391'
    },
    number: {
        fontWeight: '600',
        fontSize: 16,
        color: '#fff'
    },
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    frequencyContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20
    },
    frequency: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: '#eee'
    },
    valueText: {
        fontSize: 12,
        fontWeight: '900',
        color: '#444'
    },
    labelText: {
        fontSize: 10,
        color: '#999',
        textTransform: 'uppercase',
    },
    percentageContainer: {
        height: 6,
        backgroundColor: '#eee',
        width: '100%'
    },
    percentageBar: {
        height: '100%',
        backgroundColor: '#943391',
        borderBottomRightRadius: 10
    },
});

export default styles;