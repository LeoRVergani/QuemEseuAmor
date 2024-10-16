import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, ImageBackground, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  
  const [modalActive, SetModalActive] = useState(false)

  return (
    <View style={styles.container}>
      <Modal 
        visible={modalActive}
        transparent={true}
        animationType='fade'
        onRequestClose={() => SetModalActive(false)}
        >
          <View style={styles.outView}>
              <View style={styles.modalView}>
                <Text style={styles.textModal}>Essa pessoa está apaixonada por você.</Text>
                <Image style={styles.juao} source={require('./assets/juao.png')}/>
              </View>
          </View>

      </Modal>

        <ImageBackground source={require('./assets/bd.png')} resizeMode='cover' style={styles.image}>
      

        <View style={styles.card}>

          <Text style={styles.text}>Quer encontrar seu amor?</Text>

            <View style={styles.button}>
              <Button title='Clique aqui' color={'#db2140'} onPress={() => SetModalActive(true)}/>
            </View>



          </View>  


        
        
        <StatusBar style="auto" />
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center'
  },
  card: {
    width: '80%',
    backgroundColor: 'white',
    height: 250,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 15,
    alignContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#d87586'
  },
  button: {
    paddingTop: 25,
    justifyContent: 'center',
    width: 140
  },
  outView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    width: 300,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  juao: {
    width: 250,
    height: 250,
    borderRadius: 20
  },
  textModal: {
    fontSize: 25,
    paddingBottom: 10,
    textAlign: 'center'
  }
});
