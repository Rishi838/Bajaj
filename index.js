// Importing required modules
const express = require("express");

const app = express();

// Using body parsers to parse json data

app.use(express.json());

app.get("/", (req, res) => {
    res.send("B")
});

// Declaring post method on bhfl route

app.post("/bhfl", (req, res) => {
  //    Declaring try catch block to handle error cases
  try {
    // Handling the cases if no data is being provided in json format
    if(!req.body.data){
        return res.status(404).json({
            "is_success":false,
             "user_id" : "rishi_dhingra_18072002",
             "roll_number": "RA2011026030097"

        })
    }

    // Handling the cases when proper data is provided
    const numbers = []
    const alphabets= []
    let highest_alphabet=''
    let ans;

    // Storing data in new arrays and highest alphabet

    for(let i=0;i<req.body.data.length;i++){
       
    // Check if string is numeric
    if(isNumeric(req.body.data[i])){
        numbers.push(req.body.data[i]);
    }else{
        alphabets.push(req.body.data[i]);

        // Handling logic for finding highest alphabet
        const lowercase_letter=  req.body.data[i].toLowerCase()
        const char = req.body.data[i][0];
        if(char > highest_alphabet){
            ans = req.body.data[i][0]
        }
    }
    console.log(numbers,alphabets,highest_alphabet)
    }
  } catch (error) {}
});

// Declaring get method on bhfl route

app.get("/bhfl", (req, res) => {
  // Returning status code of 200 along with the operation code

  return res.status(200).json({
    operation_code: 1,
  });
});

app.listen(3000, () => {
  console.log("Listening on Port: 3000");
});
