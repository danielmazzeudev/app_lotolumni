import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    header: { 
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        overflow: 'hidden',
        flexDirection: 'column',
        gap: 10,
        borderRadius: 10, 
        backgroundColor: '#943391',
        elevation: 2
    },
    h1: {
        fontSize: 12,
        fontWeight: '900',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderBottomColor: '#b970b7',
        paddingBottom: 10,
        color: '#fff'
    },
    p: {
        fontSize: 12,
        lineHeight: 15,
        color: '#fff'
    },
    small: {
        fontSize: 10,
        lineHeight: 16,
        color: '#ce9bd7'
    },
});

export default styles;