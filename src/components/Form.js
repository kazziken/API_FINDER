import React, {useState} from "react";

function Form({onAddApi}) {

  const [name, setName]=useState('')
  const [link, setLink]=useState('')
  const [image, setImage]=useState('')
  const [category, setCategory]=useState('')
  const [description, setDescription]=useState('')

  
  function handleSubmit(){
    const newApiForm = {
      name,
      link,
      image,
      category,
      description,
    }
    fetch("http://localhost:3001/apis",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newApiForm),
    })
    .then((r) => r.json())
    .then(onAddApi)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input 
      className="name" 
      placeholder="Name" 
      onChange={(e)=>setName(e.target.value)}/>
      <input 
      className="link"
      placeholder="Link" 
      onChange={(e)=>setLink(e.target.value)}/>
      <input 
      className="image"
      placeholder="Image" 
      onChange={(e)=>setImage(e.target.value)} />

     <select className="category" onChange={(e)=>setCategory(e.target.value)}>
        <option value="PRESET">Select Category</option>
        <option value="Arts and Culture">Arts and Culture</option>
        <option value="Sports">Sports</option>
        <option value="Travel">Travel</option>
        <option value="Finance">Finance</option>
    </select>
      <input 
      className="description"
      placeholder="Write a brief description"
      onChange={(e)=>setDescription(e.target.value)} />
      <input 
      className="submit"
      type="submit" 
      value="Submit Api" />
    </form>
  );
}


export default Form; 
