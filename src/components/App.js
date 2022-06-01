import React, {useState, useEffect} from "react";
import Container from "./Container"; 
import Form from "./Form";

function App(){
   const [showApis, setShowApis] = useState([]);

   console.log('Kenneth is a poop')
 
   useEffect(() => {
       fetch("http://localhost:3001/apis")
         .then((r) => r.json())
         .then((showApis) => setShowApis(showApis))

     }, []);


  
   return (
       <div>
           <Container showApis={showApis}/>
           <Form />
       </div>
   )
 
}

export default App;