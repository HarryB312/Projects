import Tempature from './Tempature';
import Location from './Location';
export default function DisplayContainer({ weatherData, onSearch }){
  return(
    <div className="displaycontainer">
      <h1>Weather App!</h1>
      <Tempature weatherData={weatherData} />
      <Location onSearch={onSearch} />
    </div>
  )
}
