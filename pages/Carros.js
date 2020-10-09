import * as React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
const { useState, useEffect } = React;


import wallpaper from "../assets/wallpaper-car4.jpg";

const request = async (callback, idsRequest) => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idsRequest.idMarca}/modelos/${idsRequest.idAno}/anos/${idsRequest.idCarro}`
  );
  const results = await response.json();
  callback(results);
};


export default function Carros({ route }) {

  const [register, setRegister] = useState([]);

  useEffect(() => {
    request(setRegister, route.params);
  }, [route.params]);


  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.backgroundImage} source={wallpaper} />
      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={styles.container}>
          <Text style={styles.text}>{register.Valor}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.button}>Marca{"\n"}{register.Marca}</Text>
            <Text style={styles.button}>Ano{"\n"}{register.AnoModelo}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.button}>Modelo{"\n"}{register.Modelo}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.button}>Combustivel{"\n"}{register.Combustivel}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.button}>Cdógigo fipe{"\n"}{register.CodigoFipe}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Text style={styles.button}>Mês de referência{"\n"}{register.MesReferencia}</Text>
          </View>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    opacity: 0.9,
    padding: 30,
  },
  text: {
    marginTop: 10,
    fontSize: 30,
    color: "#333",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    backgroundColor: '#ddd',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 24,
    textAlign: 'center',
    overflow: 'hidden',
  }
});
