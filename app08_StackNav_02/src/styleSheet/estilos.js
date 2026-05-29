import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    fundo: {
        flex: 1,
        backgroundColor: '#fff',
    },

    cabecalho: {
        alignItems: 'center',
        padding: 20,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },

    imagem: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginVertical: 15,
    },

    botao: {
        backgroundColor: '#ff6600',
        padding: 14,
        marginVertical: 8,
        borderRadius: 15,
        width: 220,
        alignItems: 'center',
        alignSelf: 'center',
    },

    botaoTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    itemLista: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        margin: 10,
        borderRadius: 10,
    },

    textoItem: {
        fontSize: 18,
    },

    switchArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center',
    },

    picker: {
        margin: 20,
        backgroundColor: '#eee',
    },

    imagemLista: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 10,
    },

});