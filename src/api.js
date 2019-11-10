export const getWeatherForLocation = city => {
    const [lat, long] = city["latt_long"].split(",");
    return fetch(
      `nadia-weatherapp.herokuapp.com/forecast/${lat},${long}`,{mode: "no-cors"}).then(res => res.json());
  };