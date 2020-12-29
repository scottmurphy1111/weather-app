export interface WeatherData {
  dt: any;
  main: Main;
  name: string;
  sys: Sys;
  weather: Weather[];
  wind: Wind;
}

export interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  description: string;
  icon: string;
  main: string;
}

export interface Wind {
  deg: number
  speed: number
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}