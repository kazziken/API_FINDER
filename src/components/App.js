import React, {useState, useEffect} from "react";
import Container from "./Container"; 
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";
import {Route} from "react-router-dom";
import { Switch } from "react-router-dom";


function App(){
   const [showApis, setShowApis] = useState([]);
   const [selectedCategory, setSelectedCategory] = useState([])

 
   useEffect(() => {
       fetch("http://localhost:3001/apis")
         .then((r) => r.json())
         .then((showApis) => setShowApis(showApis))

     }, [selectedCategory]);



    function cardsToDisplay(specific){
        if (specific === ""){
            return setSelectedCategory(showApis)
        }
        const cards = showApis.filter((show) => (show.category === specific))
        return setSelectedCategory(cards);
    }
  
   return (
        <div className='App'>
            <Header 
            cardsToDisplay={cardsToDisplay}/>
            <Switch>
                <Route exact path="/">
                    <Home cardsToDisplay={cardsToDisplay}/>
                </Route>
                <Route exact path="/All" >
                    <Container showApis={showApis} selectedCategory={selectedCategory}/>
                </Route>
                <Route exact path="/form"> 
                    <Form/>
                </Route>
            </Switch> 
        
       </div>
   )
 
}

export default App;