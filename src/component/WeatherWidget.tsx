
import React, { useEffect } from 'react';

const WeatherWidget: React.FC = () => {
  const loadWeatherWidgetScript = () => {
    const script = document.createElement('script');
    script.src = 'https://www.weatherapi.com/weather/widget.ashx?loc=757740&wid=3&tu=1&div=weatherapi-weather-widget-3';
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadWeatherWidgetScript();
  }, []);

  return <div id="weatherapi-weather-widget-3"></div>;
};

export default WeatherWidget;
