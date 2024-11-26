import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert} from "react-native";
import styles from "../constants/styles";

function CompoundInterest () {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [numOfCpd, setNumOfCpd] = useState("");
  const [interest, setInterest] = useState("");
  const [amount, setAmount] = useState("");


  function calcAmtInt (p, r, n) {
    const x = 1 + parseFloat(r) * 0.01;
    const a = parseFloat(p) * Math.pow(x, parseFloat(n));
    const i = a - p;
    setInterest(i.toFixed(2));
    setAmount(a.toFixed(2));
  };

  function calcRateAmt (i, p, n) {
    const a = parseFloat(p) + parseFloat(i);
    const x = a / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);
    setRate(r.toFixed(2));
    setAmount(a.toFixed(2));
  };

  function calcNumAmt (i, p, r) {
    const a = parseFloat(p) + parseFloat(i);
    const x = a / p;
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);
    setAmount(a.toFixed(2));
    setNumOfCpd(n.toFixed(1));
  };

  function calcPrincNum (i, a, r) {
    const p = parseFloat(a) - parseFloat(i);
    const x = a / p;
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    setPrincipal(p.toFixed(2));
    setNumOfCpd(n.toFixed(1));
  };

  function calcRateInt (n, a, p) {
    const i = parseFloat(a) - parseFloat(p);
    const x = a / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);
    setInterest(i.toFixed(2));
    setRate(r.toFixed(2));
  };

  function calcPrincInt (n, a, r) {
    const x = 100 / (100 + r);
    const y = Math.pow(x, n);
    const p = parseFloat(a) * y;
    const i = parseFloat(a) - p;
    setPrincipal(p.toFixed(2));
    setInterest(i.toFixed(2));
  };

  function calcNumInt (p, a, r) {
    const i = parseFloat(a) - parseFloat(p);
    const x = parseFloat(a) / parseFloat(p);
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    setInterest(i.toFixed(2));
    setNumOfCpd(n.toFixed(1));
  };

  function calcPrincRate (i, n, a) {
    const p = parseFloat(a) - parseFloat(i);
    const x = parseFloat(a) / p;
    const y = Math.pow(x, 1 / n);
    const r = 100 * (y - 1);

    setPrincipal(p.toFixed(2));
    setRate(r.toFixed(2));
  };

  function calcNumRate (i, p, a) {
    if (parseFloat(i) !== parseFloat(a) - parseFloat(p)) {
      Alert.alert('Inaccurate Information',
        `First, your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount). Second, the information provided is not sufficient to calculate number of compounding and rate`
      );
    } else {
        Alert.alert('Insufficient Information',
        'The information provided is not sufficient to calculate number of compounding and rate'
      );
    }
  };

  function calcRate (i, p, a, n)  {
    const x = parseFloat(a) / parseFloat(p);
    const y = Math.pow(x, 1 / parseFloat(n));
    const r = 100 * (y - 1);
    if (parseFloat(a) !== parseFloat(p) + parseFloat(i)) {
      Alert.alert('Inaccurate Information',`Your inputs do not add up, as ${p} + ${i} is not equal to ${a}.`);
    }
    setRate(r.toFixed(2));
    decoOutput(refRate);
  };

  function calcNum  (i, p, a, r) {
    const x = parseFloat(a) / parseFloat(p);
    const y = 1 + parseFloat(r) * 0.01;
    const n = Math.log10(x) / Math.log10(y);

    if (parseFloat(a) !== parseFloat(p) + parseFloat(i)) {
      Alert.alert('Inaccurate Information',
        `Your inputs do not add up, as ${p}(principal) + ${i}(interest) is not equal to ${a}(amount).`
      );
    }
    setNumOfCpd(n.toFixed(1));

    decoOutput(refNum);
  };

  function checkInputs () {
    if (
      principal.length === 0 &&
      rate.length === 0 &&
      numOfCpd.length === 0 &&
      interest.length === 0 &&
      amount.length === 0
    ) {
      Alert.alert('Insufficient information', 'You should fill three input fields');
    } else if (principal.length && rate.length && numOfCpd.length) {
      calcAmtInt(principal, rate, numOfCpd);
    } else if (interest.length && principal.length && numOfCpd.length) {
      calcRateAmt(interest, principal, numOfCpd);
    } else if (interest.length && principal.length && rate.length) {
      calcNumAmt(interest, principal, rate);
    } else if (interest.length && amount.length && rate.length) {
      calcPrincNum(interest, amount, rate);
    } else if (numOfCpd.length && amount.length && principal.length) {
      calcRateInt(numOfCpd, amount, principal);
    } else if (numOfCpd.length && amount.length && rate.length) {
      calcPrincInt(numOfCpd, amount, rate);
    } else if (principal.length && amount.length && rate.length) {
      calcNumInt(principal, amount, rate);
    } else if (interest.length && numOfCpd.length && amount.length) {
      calcPrincRate(interest, numOfCpd, amount);
    } else if (interest.length && principal.length && amount.length) {
      calcNumRate(interest, principal, amount);
    } else if (
      (amount.length && principal > amount) ||
      (amount.length && interest > amount)
    ) {
      Alert.alert('Inaccurate Information', 'The amount entered seems faulty. Check to be sure!');
    } else if (
      interest.length &&
      principal.length &&
      amount.length &&
      numOfCpd.length
    ) {
      calcRate(interest, principal, amount, numOfCpd);
    } else if (
      interest.length &&
      principal.length &&
      amount.length &&
      rate.length
    ) {
      calcNum(interest, principal, amount, rate);
    } else {
      Alert.alert('Insufficient Information', 'You should fill three input fields');
    }
  };



  function reset () {
    setPrincipal("");
    setRate("");
    setNumOfCpd("");
    setInterest("");
    setAmount("");
  };

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
            keyboardType="numeric"
            value={principal}
            onChangeText={setPrincipal}  
          />
          <Text style={styles.text}>Rate (%)</Text>
          <TextInput
            style={styles.input}
            id="rate"
            keyboardType="numeric"
            value={rate}
            onChangeText={setRate}
            
          />
          <Text style={styles.text}>
            Number of times interest is compounded
          </Text>

          <TextInput
            style={styles.input}
            id="numOfCpd"
            keyboardType="numeric"
            value={numOfCpd}
            onChangeText={setNumOfCpd}
          />

          <Text style={styles.text}>Interest</Text>
          <TextInput
            style={styles.input}
            id="interest"
            keyboardType="numeric"
            value={interest}
            onChangeText={setInterest}
           
          />
          <Text style={styles.text}>Amount</Text>
          <TextInput
            style={styles.input}
            id="amount"
            keyboardType="numeric"
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
    
  );
};

export default CompoundInterest;

