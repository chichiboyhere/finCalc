import React, {useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import styles from '../constants/styles';

function SimpleInterest () {
    const [principal, setPrincipal] = useState("");
    const [rate, setRate] = useState("");
    const [timeYear, setTimeYear] = useState("")
    const [timeMonth, setTimeMonth] = useState("")
    const [interest, setInterest] = useState("");
    const [amount, setAmount] = useState("");


    function calcAmtInt (p, r, t) {
        const i = (p * r * t * 0.01)
        const a = parseFloat(p) + parseFloat(i)
        setInterest(i.toFixed(2))
        setAmount(a.toFixed(2))
    }

    function calcRateAmt (i, p, t) {
        const r = (100 * i) / ( p * t)
        const a = parseFloat(p) + parseFloat(i)
        setRate(r.toFixed(2))
        setAmount(a.toFixed(2))
    }

    function timeYrMo (t) {
        const tY = parseInt(t)
        if (tY === 0) {
         setTimeYear("")
        }
        else if (tY > 0) {
            setTimeYear(tY.toString())
        }
        if ((t - tY) > 0){
            let tM = Math.round((t-tY) * 12)
            tM = tM.toString()
          setTimeMonth(tM) 
        }
        else{
            setTimeMonth("")
        }
    }

    function calcTimeAmt (i, p, r) {
        const t = (100 * i) / (p * r);
        const a = parseFloat(p) + parseFloat(i)
        timeYrMo(t)

        setAmount(a.toFixed(2))
    }

    function calcPrincAmt (i, t, r) {
        const p = (100 * i) / (t * r)
        const a = parseFloat(p) + parseFloat(i)
        setPrincipal(p.toFixed(2))
        setAmount(a.toFixed(2))
    }

    function calcPrincTime (i, a, r) {
        const p = parseFloat(a) - parseFloat(i)
        const t =  (100 * i) / (p * r)
        setPrincipal(p.toFixed(2))
        
        timeYrMo(t)
    }

    function calcRateInt (t, a , p) {
        const i = parseFloat(a) - parseFloat(p)
        const r = (100 * i) / (p * t)
        setInterest(i.toFixed(2))
        setRate(r.toFixed(2))
    }

    function calcPrincInt (t, a, r) {
         const p = a /(1 + 0.01 * r * t)
         const i = a - p
         setPrincipal(p.toFixed(2))
         setInterest(i.toFixed(2))
    }

    function calcTimeInt (p, a, r) {
        const i = parseFloat(a) - parseFloat(p)
        const t = (100 * i) / (p * r)
        setInterest(i.toFixed(2))
        timeYrMo(t)  
    }

    function calcPrincRate  (i, t, a) {
        const p = parseFloat(a) - parseFloat(i)
        const r = (100 * i) / (p * t)
        setPrincipal(p.toFixed(2))
        setRate(r.toFixed(2))
    }

    function calcTimeRate  (i, p, a) {
        if ( parseFloat(i) !== (parseFloat(a) - parseFloat(p))){
            
            Alert.alert(
                       'Inaccurate Information',
                       'Please check your entries and try again'
                       )
        }
        else{
            Alert.alert('Insufficient Information', 'The information provided is not sufficient to calculate time and rate')
        }     
    }

    
    function calcRate (i, p, a, t) {
        const r = (100 * i) / ( p * t)
        if (parseFloat(a) !== (parseFloat(p) + parseFloat(i))){
            Alert.alert('Inaccurate Information', `Your inputs do not add up, as ${p} + ${i} is not equal to ${a}.`)
        }
        setRate(r.toFixed(2))  
    }

    function calcTime (i, p, a, r) {
        const t = (100 * i) / (p * r);
        if (parseFloat(a) !== (parseFloat(p) + parseFloat(i))){
            Alert.alert('Inaccurate Information', `Your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount).`)
        }
        timeYrMo(t)    
    }

    function formatTime() {
        let timeTotal;
        if (timeYear.length && timeMonth.length) {

            let timeYr = parseFloat(timeYear)
            let timeMo = parseFloat(timeMonth)
             
            timeTotal = (timeYr + (timeMo / 12)).toFixed(2)    
        }
        else if (timeYear.length && timeMonth.length === 0){
            timeTotal = parseFloat(timeYear)
        }
        else{
            timeTotal = parseFloat((parseFloat(timeMonth)/12).toFixed(2))
        }
        return timeTotal
    }

    function checkInputs () {
        if (principal.length === 0 && rate.length === 0 && timeYear.length === 0 && timeMonth.length === 0 && interest.length === 0 && amount.length === 0){
           Alert.alert('Insufficient information', 'You should fill three input fields.')
        }
        else if (principal.length && rate.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcAmtInt(principal, rate, time)
        }
        else if (interest.length && principal.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcRateAmt(interest, principal, time)
        }
        else if (interest.length && principal.length && rate.length) {
            calcTimeAmt(interest, principal, rate)
        }
        else if (interest.length && (timeYear.length || timeMonth.length) && rate.length) {
            const time = formatTime()
            calcPrincAmt(interest, time, rate)
        }
        else if (interest.length && amount.length && rate.length) {
            calcPrincTime(interest, amount, rate)
        }
        else if ((timeYear.length || timeMonth.length) && amount.length && principal.length) {
            const time = formatTime()
            calcRateInt(time, amount, principal)
        }
        else if ((timeYear.length || timeMonth.length) && amount.length && rate.length) {
            const time = formatTime()
            calcPrincInt(time, amount, rate)
        }
        else if (principal.length && amount.length && rate.length) {
            calcTimeInt(principal, amount, rate)
        }
        else if (interest.length && (timeYear.length || timeMonth.length) && amount.length) {
            const time = formatTime()
            calcPrincRate(interest, time, amount)
        }
        else if (interest.length && principal.length && amount.length) {
            calcTimeRate(interest, principal, amount)
        }
        else if ((amount.length && principal > amount) || (amount.length && interest > amount)){
            Alert.alert('Poor Information','The amount entered seems faulty. Check to be sure!')
        }
        else if (interest.length && principal.length && amount.length && (timeYear.length || timeMonth.length)) {
            const time = formatTime()
            calcRate(interest, principal, amount, time)
        }
        else if (interest.length && principal.length && amount.length && rate.length) {
            calcTime(interest, principal, amount, rate)
        }
        else{
            Alert.alert('Insufficient information', 'You should fill three input fields.')
        }
        
    }

    function reset (){
       setPrincipal("")
       setRate("")
       setTimeYear("")
       setTimeMonth("")
       setInterest("")
       setAmount("")
    }

   
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>
      Fill three relevant input fields and the calculator will fill out the rest
      </Text>
      <View style={styles.formContainer}>

        <Text style={styles.text}>Principal</Text>
        <TextInput
            style={styles.input}
            id="principal"
            keyboardType='numeric'
            value={principal}
            onChangeText={setPrincipal}
        />
        <Text style={styles.text}>Rate (%)</Text>
        <TextInput
            style={styles.input}
            id="rate"
            keyboardType='numeric'
            value={rate}
            onChangeText={setRate}
        />
        <Text style={styles.text}>Time</Text>
        <View style={styles.timeInputContainer}>
        <TextInput
            style={styles.timeInput}
            id="timeYr"
            keyboardType='numeric'
            placeholder="Year(s)"
            value={timeYear}
            onChangeText={setTimeYear}
        />
        <TextInput
            style={styles.timeInput}
            id="timeMo"
            keyboardType='numeric'
            placeholder="Month(s)"
            value={timeMonth}
            onChangeText={setTimeMonth}
        />
        </View>


        <Text style={styles.text}>Interest</Text>
        <TextInput
            style={styles.input}
            id="interest"
            keyboardType='numeric'
            value={interest}
            onChangeText={setInterest}
        />
        <Text style={styles.text}>Amount</Text>
        <TextInput
            style={styles.input}
            id="amount"
            keyboardType='numeric'
            value={amount}
            onChangeText={setAmount}
        />
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
    </View>
     
   </View>     
  )
}

export default SimpleInterest

