import { useState } from "react"

export default function Location(){
  const [city, setCity] = useState('')
  const [searchedCity, setSearchedCity] = useState('')

  function handleChange(e){
    setCity(e.target.value)
    console.log(e.target.value)
  }

  function handleSearch(){
    console.log('search was clicked')
    console.log('searching for:' , city )
    setSearchedCity(city)
  }
  
  return(
    <div>
      <h3>{searchedCity}</h3>
      <input type="text" 
        placeholder="Enter Your City Here"
        onChange={handleChange}
        value={city}
        />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}