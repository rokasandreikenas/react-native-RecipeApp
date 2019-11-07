import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    commentContainer: {
        flex: 1,
        backgroundColor: '#D3D3D3',
        flexDirection: 'column'

    },
    commentContainerText: {
        textAlign: 'left',
        marginTop: 10,
        margin: 15,
    },
    commentInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        marginTop: 5,
        margin: 15,
        borderColor: 'gray',
        borderWidth: 1
    },
    commentInputTextContainer: {
        backgroundColor: 'grey',
        textAlign: 'left',
        fontSize: 16,
        width: 265,
    },
    commentButton: {
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        fontSize: 12,
        width: 35
    }
});

export default styles;
