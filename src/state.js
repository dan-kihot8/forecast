

export const initialState = 
{
  apiData: {
    baseUrl: null,
    apiKey: null,
    iconPath: null,
    currentPath: null,
    forecastPath: null
  },
  cities: {
    list: [],
    currentCity: null
  },
  units: {
    currentUnit: 'metric'
  },
  currentWeather: null,
  forecast: null
}

  

export const unitFormats = ['standard', 'metric', 'imperial']
