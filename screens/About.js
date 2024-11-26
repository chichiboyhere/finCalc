import {View, Text, StyleSheet} from 'react-native'

function About () {
  return (
    <View style={styles.container}>
     <Text style={styles.title}>About</Text>
     <Text style={styles.text}>
       Bloomer Tech, a subsidiary of Bloomer Inc, is an innovative company that brings cutting-edge educative and technological services your way.
    </Text> 
    <Text style={styles.text}>
        The finCalc app is all about a set of very useful financial calculators on 
    </Text>
    <Text style={styles.list}>
       *  Amortization
    </Text>
    <Text style={styles.list}>
       * Simple Interest
    </Text>
    <Text style={styles.list}>
       * Compound Interest and a more general:
    </Text>
    <Text style={styles.list}>
       * Quadratic Equation
    </Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container : {
    //    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingTop: 10,
        paddingBottom: 330
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 2,
        borderRadius: 10,
        backgroundColor: 'cornflowerblue',
        borderColor: 'gray',
        borderWidth: 3,
        marginVertical: 10,
        color: 'white'
    },
    list: {
        fontDecoration: 'italics',
        color: 'white',
        fontSize: 16,
        marginTop: 15,
        width: '90%'
    }
})
