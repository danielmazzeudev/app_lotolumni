import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    card: {
        overflow: 'hidden',
        marginHorizontal: 15,
        flexDirection: 'column',
        borderRadius: 10, 
        backgroundColor: '#fff',
        elevation: 2
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    badge: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontWeight : '900',
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#444',
    },
    badgeSpecial: {
        color: '#fc9d03'
    },
    dozens: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        padding: 10,
    },
    numbers: {
        flex: 1,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        backgroundColor: '#943391'
    },
    number: {
        fontWeight : '600',
        fontSize: 16,
        color: '#fff',
    },
    resultsContainer: {
        flexDirection: 'column',
        width: '100%',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    borderLeft: {
        borderLeftWidth: 1,
        borderLeftColor: '#eee',
    },
    strong: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 12,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '900',
        color: '#444',
    },
    money: {
        flex: 2,
        paddingVertical: 10,
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        color: '#943391',
    },
    small: {
        flex: 1.5,
        paddingVertical: 10,
        fontSize: 12,
        textAlign: 'center',
        color: '#999',
    },
});

export default styles;