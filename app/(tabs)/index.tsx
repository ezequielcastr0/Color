import React, { useState } from 'react';
// **Esta línea importa el hook useState de React, que permite manejar el estado de la
import { Image, StyleSheet, Platform, View, Button, Text, TextInput } from 'react-native';
// **Se importan componentes básicos de React Native como View, Button, Text, TextInput,etc.**
export default function HomeScreen() {
const [greeting, setGreeting] = useState('¡Hola, Alumno!');
// **Se define el estado greeting para almacenar el saludo, y se inicializa con "¡Hola,Alumno!"**
const [nombre, setNombre] = useState('');
// **Se define el estado nombre, que almacenará el nombre que el usuario ingrese.**
// *** INICIO DE LA MODIFICACIÓN ***
const [bgColor, setBgColor] = useState('#fff'); // Estado para el color de fondo
// **Se define el estado bgColor, que se utilizará para cambiar dinámicamente el color defondo.**

return (
<View style={[styles.container, { backgroundColor: bgColor }]}>

<Text style={styles.greetingText}>{greeting}</Text>

<TextInput
style={styles.input}
placeholder="Escribe tu nombre"
value={nombre}
onChangeText={(text) => setNombre(text)}
/>
<Button
title="Actualizar Saludo"
onPress={() => setGreeting(`¡Hola, ${nombre}!`)}
/>

<View style={styles.buttonContainer}>
<Button title="Rojo" onPress={() => setBgColor('red')} />
{/* **Este botón cambia el color de fondo a rojo cuando se presiona.** */}
<Button title="Verde" onPress={() => setBgColor('green')} />
{/* **Este botón cambia el color de fondo a verde cuando se presiona.** */}
<Button title="Azul" onPress={() => setBgColor('blue')} />
{/* **Este botón cambia el color de fondo a azul cuando se presiona.** */}
<Button title="Naranja" onPress={() => setBgColor('orange')} />
{/* **Este botón cambia el color de fondo a azul cuando se presiona.** */}
<Button title="Blanco" onPress={() => setBgColor('White')} />
{/* **Este botón cambia el color de fondo a azul cuando se presiona.** */}
</View>
</View>
);
}
const styles = StyleSheet.create({
container: {

flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
greetingText: {
fontSize: 24,
marginBottom: 10,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 200,
paddingHorizontal: 10,
marginBottom: 20,
},

buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '60%',
},

});