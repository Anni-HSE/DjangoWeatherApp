import React from 'react';
import '../css/table.css';
import '../css/style.css';

const WeatherTable = (weathers) => {

  let data = [];
  for (var prop in weathers.weathers){
    const dict = {};
    dict.id = prop;
    dict.city_name = weathers.weathers[prop]["city_name"];
    dict.temp = weathers.weathers[prop]["temp"];
    dict.wind_speed = weathers.weathers[prop]["wind_speed"];
    dict.weather_description = weathers.weathers[prop]["weather_description"];
    dict.requst_date = weathers.weathers[prop]["requst_date"];
    data.push(dict);
  };

  console.log(data);
  const rows = data.map(function(item) {
    return <tr key={item.id}>
      <td>{item.city_name}</td>
      <td>{item.temp} C</td>
      <td>{item.wind_speed} m/s</td>
      <td>{item.weather_description}</td>
      <td>{item.requst_date}</td>
    </tr>
  });

  return (
    <table id="weathers">
      <thead>
      <td>Город</td>
      <td>Температура</td>
      <td>Скорость ветра</td>
      <td>Состояние погоды</td>
      <td>Дата запроса</td>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );

};

export default WeatherTable;