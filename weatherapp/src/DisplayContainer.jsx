import WeatherTitle from "./Weather-Title";
import Tempature from './Tempature';
import Location from './Location';

export default function DisplayContainer() {
  // In the future, you would pass props with weather data to this component
  // e.g., <DisplayContainer weatherData={someData} />
  return (
    <>
      <WeatherTitle />
      <Tempature />
      <Location />
    </>
  );
}
