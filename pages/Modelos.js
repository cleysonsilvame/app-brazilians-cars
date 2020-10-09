import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Picker, } from "@react-native-community/picker";
const { useState, useEffect } = React;


import wallpaper from "../assets/wallpaper-car2.jpg";

const request = async (callback, idsRequest) => {
  const response = await fetch(
    `https://parallelum.com.br/fipe/api/v1/carros/marcas/${idsRequest}/modelos`
  );
  const results = await response.json();
  callback(results.modelos);
};


export default function Modelos({ route, navigation }) {

  const [register, setRegister] = useState([]);
  const [selectedValue, setValue] = useState('');

  const { idMarca, nomeMarca } = route.params;

  useEffect(() => {
    request(setRegister, idMarca);
  }, [idMarca]);


  return (
    <View style={{ flex: 1 }}>
      <Image style={styles.backgroundImage} source={wallpaper} />
      <View style={styles.container}>
        <Text style={styles.text}>{nomeMarca.toUpperCase()}</Text>

        <Picker
          style={styles.picker}
          selectedValue={selectedValue.itemValue || 1}
          onValueChange={(itemValue, itemIndex) => setValue({ itemValue, itemIndex })}
          itemStyle={styles.pickerItem}
        >
          {register.map((item, key) =>
            <Picker.Item label={item.nome} value={item.codigo} key={key} />
          )}

        </Picker>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Anos", {
              idMarca,
              idAno: selectedValue.itemValue,
              nomeAno: register[selectedValue.itemIndex || 0].nome
            });
          }}
        >
          <Text style={{ fontSize: 18 }}>Conhecer a marca</Text>
        </TouchableOpacity>
      </View>
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
    color: "#eee",
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    fontSize: 50,
    alignItems: "center",
    backgroundColor: "#eee",
    width: 200,
    padding: 20,
    borderRadius: 10,
  },
  picker: {
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.9,
  },
  pickerItem: {
    color: 'black',
  }
});
