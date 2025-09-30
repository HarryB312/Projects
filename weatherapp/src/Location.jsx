import { useState } from "react"
export default function Location(){
  const [city, setCity] = useState('')
  function handleChange(e) {
    setCity(e.target.value)
    console.log(e.target.value)
  }

  function handleSearch() {

    console.log('search button clicked')
    console.log('Searching for:', city)
  }
  return(
    <div className="location">
      <input type="text"
        placeholder="Enter Your City Here"
        onChange={handleChange}
        value={city}
      />
      <button className="locationBTN"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}