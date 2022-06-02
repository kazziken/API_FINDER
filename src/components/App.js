import React, {useState, useEffect} from "react";
import Container from "./Container"; 
import Form from "./Form";
import Header from "./Header";
import { Route, BrowserRouter } from "react-router-dom"


function App(){
   const [showApis, setShowApis] = useState([]);

   console.log('Kenneth is a poop')
 
   useEffect(() => {
       fetch("http://localhost:3001/apis")
         .then((r) => r.json())
         .then((showApis) => setShowApis(showApis))

     }, []);


  
   return (
    <div className='App'>
        <BrowserRouter>
            <Route path="/" element={<Header/>}/>
            <Route path="/" element={<Container/>}/>
            <Route path="/form" element={<Form/>}/>
        </BrowserRouter>
            <Header />
            <br></br>
            <br></br>
            <Container showApis={showApis}/>
            <Form />
        
       </div>
   )
 
}

export default App;