import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        marginHorizontal: 15,
        marginVertical: 30,
        flexDirection: 'column',
    }, 
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: '#bbb'
    },
    link: {
        textDecorationLine: 'underline',
        color: '#943391'
    }
});

export default styles;