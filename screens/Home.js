import { View, StyleSheet, TouchableOpacity, Text} from "react-native"

const Home = ({navigation}) => {
    return(
      <View style={styles.container}>
         <TouchableOpacity
          style={styles.buttonDeco} 
          onPress={() => navigation.navigate('Amortization')}
          >
          <Text style={styles.buttonText}>Amortization Calculator</Text>
          </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonDeco} 
          onPress={() => navigation.navigate('SimpleInterest')}
          >
          <Text style={styles.buttonText}>Simple Interest Calculator</Text>
          </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonDeco} 
          onPress={() => navigation.navigate('CompoundInterest')}
          >
          <Text style={styles.buttonText}>Compund Interest Calculator</Text>
          </TouchableOpacity>
         <TouchableOpacity
          style={styles.buttonDeco} 
          onPress={() => navigation.navigate('QuadraticEquation')}
          >
          <Text style={styles.buttonText}>Quadratic Equation Calculator</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: 'black'
  },
  buttonDeco : {
    backgroundColor: "cornflowerblue",
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
    width: "100%",
    borderRadius: 16,
    padding: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }

})
export default Home