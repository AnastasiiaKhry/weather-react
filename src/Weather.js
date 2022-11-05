//  import React from "react";
// import axios from "axios";
//  import Loader from "react-loader-spinner";

// export default function Weather() {
      
//     function handleResponse(response) {
//         alert(
//             `The wether in ${response.data.name} is ${response.data.main.temp}°C`)
//     }
//     let apiKey = "ff53351ce88e0e7d3c51aed26ec4073d";
//     let units = "metric";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
//     axios.get(apiUrl).then(handleResponse);
//     return (
//          <Loader type="Puff" color="white" height={100} widht={100} timeout={3000} />
//      )
// }