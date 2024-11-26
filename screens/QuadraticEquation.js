import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import styles from '../constants/styles';

function QuadraticEquation () {
 const [xSquaredInput, setXSquaredInput] = useState("")
 const [xInput, setXInput] = useState("")
 const [constant, setConstant] = useState("")
 const [result, setResult] = useState(null)

 

 function solveProblem  () {
    const D = Math.pow(xInput, 2) - (4 * xSquaredInput * constant)
    const rootOne = (-xInput + Math.sqrt(D))/ (2 * xSquaredInput)
    const rootTwo = (-xInput - Math.sqrt(D))/ (2 * xSquaredInput)
    if (D < 0) {
        setResult("Unreal roots")  
    }
    else if ( D === 0) {
        setResult(`The roots are: ${rootOne} (twice)`)  
    }
    else{
        setResult(`The roots are: ${rootOne.toFixed(3)} or ${rootTwo.toFixed(3)}`)  
    }   
 }

 function reset () {
    setXSquaredInput("")
    setXInput("")
    setConstant("")
    setResult(null)
 }

 function checkInputs () {
    if ((xSquaredInput.length === 0 || xSquaredInput == 0 ) && (xInput.length || xInput.length === 0) && constant.length) {
        Alert.alert("Invalid first entry","Cant's have the coefficent of x-squared as 0 or null")
    }
    else if (xSquaredInput.length === 0 && xInput.length === 0 && constant.length === 0){
        Alert.alert("No Entries", "You haven't entered any inputs")
    }
    else{
        solveProblem()
    }
 }
  return (
   <View style={styles.container}>
     
      <Text style={styles.title}>
      Enter the appropriate figures in the input fields below and press the 'Calculate' button to get the result
      </Text>
      <Text style={styles.subTitle}>
       Quadratic Form: &nbsp; ax&sup2; + bx + c = 0
      </Text>

      <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                id="xsquared"
                keyboardType="numeric"
                placeholder="a"
                value={xSquaredInput}
                onChangeText={setXSquaredInput}
            />
             <TextInput
                style={styles.input}
                id="x"
                keyboardType="numeric"
                placeholder="b"
                value={xInput}
                onChangeText={setXInput}
                />
                
            <TextInput
                style={styles.input}
                id="constant"
                keyboardType="numeric"
                placeholder="c"
                value={constant}
                onChangeText={setConstant}
            />

      </View>
      
      <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={checkInputs}
              style={styles.calcButton}
            >
                <Text style={styles.addButtonText}>Calculate</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={reset}
            style={styles.resetButton}
            >
                <Text style={styles.addButtonText}>Reset</Text>
            </TouchableOpacity>
      </View>
     
      {result !== null && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputText}>{result}</Text>
        </View>
      )}
     
    </View>
  )
}

export default QuadraticEquation

