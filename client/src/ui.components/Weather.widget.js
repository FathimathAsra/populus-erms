import ReactWeather, { useOpenWeather } from 'react-open-weather';

const WeatherWidget = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '16df65d5e7963f0f154099a5ac680671',
        lat: '42.8746',
        lon: '74.5698',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
    });

    const customStyles = {
        fontFamily: 'Poppins, sans-serif',
        gradientStart: '#0181C2',
        gradientMid: '#04A7F9',
        gradientEnd: '#4BC4F7', 
        locationFontColor: '#FFF',
        todayTempFontColor: '#FFF',
        todayDateFontColor: '#B5DEF4',
        todayRangeFontColor: '#B5DEF4',
        todayDescFontColor: '#B5DEF4',
        todayInfoFontColor: '#B5DEF4',
        todayIconColor: '#FFF',
        forecastBackgroundColor: '#FFF',
        forecastSeparatorColor: '#DDD',
        forecastDateColor: '#777',
        forecastDescColor: '#777',
        forecastRangeColor: '#777',
        forecastIconColor: '#4BC4F7',
    };
    return (
        <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Bishkek"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            theme={customStyles}
            showForecast
        />
    );
};


export default WeatherWidget;