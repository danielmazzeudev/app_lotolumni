import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        marginHorizontal: 15,
        marginTop: 1,
        flexDirection: 'column',
        borderRadius: 10, 
        backgroundColor: '#fff',
        elevation: 2
    }, 
    numbers: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 8,
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    numberBox: {
        width: '17%', 
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#943391'
    },
    numberText: {
        fontWeight: '600',
        fontSize: 14,
        color: '#fff',
    },
    button: {
        margin: 15,
        padding: 15,
        borderRadius: 6,
        backgroundColor: '#943391'
    },
    buttonText: {
        fontSize: 10,
        fontWeight: '900',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: '#fff',
    }
});

export default styles;