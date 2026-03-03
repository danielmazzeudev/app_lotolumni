import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        height: 150,
        marginHorizontal: 15,
        marginTop: 15,
        padding: 25,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        borderRadius: 10, 
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#ddd'
    },
    text: {
        fontSize: 12,
        lineHeight: 15,
        fontWeight: '900',
        textTransform: 'uppercase',
        color: '#999'
    },
    small: {
        fontSize: 12,
        textAlign: 'center',
        color: '#999',
    },
    link: {
        fontSize: 12,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#943391'
    }
});

export default styles;