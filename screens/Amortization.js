import React from "react";
import { FlatList, View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import styles from "../constants/styles";

function Amortization () {
  
  const [loanAmount, setLoanAmount] = React.useState("");
  const [interestRate, setInterestRate] = React.useState("");
  const [loanTerm, setLoanTerm] = React.useState("");
  const [schedule, setSchedule] = React.useState([]);


  const calculateAmortization = () => {
    const principal = parseFloat(loanAmount);
    const calculatedInterest = parseFloat(interestRate) / 100 / 12;
    const calculatedPayments = parseInt(loanTerm) * 12;

    // Calculate monthly payment
    //const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    //const monthlyPayment = (principal * x * calculatedInterest) / (x - 1);
    // OR:
    const monthlyPayment = (principal * calculatedInterest) / ( 1 - Math.pow(1 + calculatedInterest, -calculatedPayments))

    let balance = principal;
    const schedule = [];

    for (let i = 1; i <= calculatedPayments; i++) {
      const interest = balance * calculatedInterest;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.max(balance, 0).toFixed(2),
      });
    }

    setSchedule(schedule);
  };

  const handleReset = () => {
    setLoanAmount("");
    setInterestRate("");
    setLoanTerm("");
    setSchedule([]);
  };
  return (
    // <SafeAreaProvider>
    // <SafeAreaView>
    <ScrollView style={styles.container}>
      {/* <Text style={styles.title}>Amortization Calculator</Text> */}
     
     
        <Text style={styles.text}>Loan Amount</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={loanAmount}
          onChangeText={setLoanAmount}
        />
     
     
        <Text style={styles.text}>Interest Rate (%)</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={interestRate}
          onChangeText={setInterestRate}
        />
      
        <Text style={styles.text}>Loan Term (years)</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={loanTerm}
          onChangeText={setLoanTerm}
        />
      
   
      <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={calculateAmortization}
              style={styles.calcButton}
            >
            <Text style={styles.addButtonText}>Calculate</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleReset}
            style={styles.resetButton}
            >
            <Text style={styles.addButtonText}>Reset</Text>
            </TouchableOpacity>
      </View>
     

      {schedule.length > 0 && (
        <View style={styles.result}>
          <Text style={styles.repaymentTitle}>Repayment Schedule</Text>
          <View style={styles.resultHeader}>
            <Text style={styles.repaymentText}>Month</Text>
            <Text style={styles.repaymentText}>Payment</Text>
            <Text style={styles.repaymentText}>Principal</Text>
            <Text style={styles.repaymentText}>Interest</Text>
            <Text style={styles.repaymentText}>Balance</Text>
           </View> 
          <FlatList 
             data={schedule}
             keyExtractor={(item) => item+Math.random().toString()}
             renderItem={({item}) => (
              <View style={styles.resultContainer}>
                <View style={styles.resultDisplay}>
                    <View style={styles.resultDisplayItem}> 
                        <Text style={styles.resultDisplayText}>{item.month}</Text>
                    </View>
                    <View style={styles.resultDisplayItem}>
                        <Text style={styles.resultDisplayText}>{item.payment}</Text>
                    </View>
                    <View style={styles.resultDisplayItem}>
                        <Text style={styles.resultDisplayText}>{item.principal}</Text>
                    </View>
                    <View style={styles.resultDisplayItem}>
                        <Text style={styles.resultDisplayText}>{item.interest}</Text>
                    </View>
                    <View style={styles.resultDisplayItem}>
                        <Text style={styles.resultDisplayText}>{item.balance}</Text>
                    </View>
                </View>
              </View>
             )}
             scrollEnabled={false}
          />
            
        </View>
      )}
     
    </ScrollView>
    // </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default Amortization;

