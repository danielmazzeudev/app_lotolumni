import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    card: {
        overflow: 'hidden',
        marginHorizontal: 15,
        marginTop: 1,
        marginBottom: 15,
        padding: 15,
        flexDirection: 'column',
        gap: 10,
        borderRadius: 10, 
        backgroundColor: '#fff',
        elevation: 2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 12,
        fontWeight : '900',
        textTransform: 'uppercase',
    },
    information: {
        fontSize: 12,
        lineHeight: 15,
        color: '#444'
    }
});

export default styles;