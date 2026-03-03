import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
    nav: { 
        marginHorizontal: 15, 
        marginBottom: 15, 
        overflow: 'hidden', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        borderRadius: 10, 
        backgroundColor: '#fff', 
        elevation: 2 
    },
    links: {
        flex: 1,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    borderRight: {
        borderRightColor: "#eee",
        borderRightWidth: 1,
        borderStyle: 'solid'
    },
    linksActive: {
        backgroundColor: '#943391',
    },
    icons: { 
        color: '#999', 
    },
    iconsActive: { 
        color: '#fff', 
    },
    labels: {
        fontSize: 9,
        fontWeight: '500',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#999',
    },
    labelsActive: {
        fontWeight: '600',
        color: '#fff',
    }
});

export default styles;