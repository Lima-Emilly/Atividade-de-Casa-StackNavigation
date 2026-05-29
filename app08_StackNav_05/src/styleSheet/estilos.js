import { StyleSheet } from 'react-native';

export const estilosPrincipal = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  imagem: {
    width: 240,
    height: 240,
    borderRadius: 20,
    marginBottom: 20,
  },

  nomeApp: {
    fontSize: 34,
    color: '#ffcc00',
    fontWeight: 'bold',
    marginBottom: 30,
  },

  rodape: {
    color: '#aaa',
    marginTop: 30,
  }

});

export const estilosTela = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  imagem: {
    width: 180,
    height: 260,
    borderRadius: 20,
    marginBottom: 20,
  },

  descricao: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },

  botoes: {
    flexDirection: 'row',
    marginTop: 30,
    gap: 15,
  },

  lista: {
    width: '100%',
    marginTop: 20,
  },

  item: {
    backgroundColor: '#ffffff22',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  itemTexto: {
    color: '#fff',
    fontSize: 16,
  },

});