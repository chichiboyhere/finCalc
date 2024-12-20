import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    
    container: {
      padding: 10,
      marginVertical: 10
    },

    formContainer: {
        display: 'flex',
        displayDirection: 'column',
        marginVertical: 5
    },
    
    input: {
          borderWidth: 3,
          borderColor: '#ccc',
          borderRadius: 10,
          padding: 10,
          marginRight: 10,
          fontSize: 16,
          marginBottom: 8    
      },
      title: {
          fontSize: 20,
          fontWeight: 'bold',   
      },
      subTitle:{
         fontSize: 16,
         fontWeight: 700,
         marginVertical: 10
      },
      inputField: {
          marginBottom: 8
      },
      timeInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 2,
        gap: 15
      },
      timeInput: {
        borderWidth: 3,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        fontSize: 16,
        marginBottom: 8,
        width: '45%'
      },
      text: {
          fontWeight: 'bold',
          marginBottom: 4
      },
      
      buttonContainer: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: 8
        },
      calcButton: {
          width: "45%",
          backgroundColor: "green",
          padding: 8,
          color: "white",
          borderRadius: 4,
          marginRight: 8,
          justifyContent: "center",
          alignItems: "center", 
        },
        resetButton: {
          width:"45%",
          backgroundColor: "#eab308",
          color: "white",
          padding: 8,
          borderRadius:4,
          justifyContent: "center",
          alignItems: "center",
      },
     
      addButtonText: {
          color: 'white',
          fontWeight: 'bold',
          fontSize: 16,
      },
      result: {
          marginTop: 10,
          overflow: 'scroll'
      }, 
      repaymentTitle: {
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 8
      },
      repaymentText: {
        fontWeight: 'bold'
      },
      resultHeader: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 6
        },
        
      resultDisplay: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 3,
        
      },
      resultDisplayItem: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'gray'
      },
      resultDisplayText: {
        color: 'black'
      },
      outputContainer: {
        padding:16,
        marginTop: 16,
        backgroundColor: "#dcfce7",
        borderWidth: 1,
        borderColor: "#4ade80",
        borderRadius: 4
        },
      outputText: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '600',
        color: "blue"
        }
  })


export default styles 