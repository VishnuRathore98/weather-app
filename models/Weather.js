import { ImageSourcePropType } from "react-native";

// Enums
export const WeatherType = {
  Rainy: "Rainy",
  Windy: "Windy",
  Stormy: "Stormy",
  Clear: "Clear",
  Cloudy: "Cloudy",
  Showers: "Showers",
  Sunny: "Sunny",
  Tornado: "Tornado",
  Fog: "Patchy Fog",
};

export const ForecastType = {
  Hourly: "Hourly",
  Weekly: "Weekly",
};

// Interfaces as JavaScript Objects
class Weather {
  constructor(city, temperature, condition, high, low) {
    this.city = city;
    this.temperature = temperature;
    this.condition = condition;
    this.high = high;
    this.low = low;
  }
}

export class Forecast {
  constructor(
    date,
    weather,
    probability,
    temperature,
    high,
    low,
    location,
    icon,
    type
  ) {
    this.date = date;
    this.weather = weather;
    this.probability = probability;
    this.temperature = temperature;
    this.high = high;
    this.low = low;
    this.location = location;
    this.icon = icon; // This would be an image source object or path
    this.type = type;
  }
}

class WeatherValueDetail {
  constructor(value, maxValue, minValue, unitCode, qualityControl) {
    this.value = value;
    this.maxValue = maxValue;
    this.minValue = minValue;
    this.unitCode = unitCode;
    this.qualityControl = qualityControl;
  }
}

class WeatherForecastPeriod {
  constructor(
    number,
    name,
    startTime,
    endTime,
    isDaytime,
    temperatureTrend,
    temperature,
    probabilityOfPrecipitation,
    dewpoint,
    relativeHumidity,
    windDirection,
    shortForecast,
    detailedForecast
  ) {
    this.number = number;
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.isDaytime = isDaytime;
    this.temperatureTrend = temperatureTrend;
    this.temperature = temperature;
    this.probabilityOfPrecipitation = probabilityOfPrecipitation;
    this.dewpoint = dewpoint;
    this.relativeHumidity = relativeHumidity;
    this.windDirection = windDirection;
    this.shortForecast = shortForecast;
    this.detailedForecast = detailedForecast;
  }
}

class WeatherForecastProperties {
  constructor(
    geometry,
    units,
    forecastGenerator,
    generatedAt,
    updateTime,
    elevation,
    periods
  ) {
    this.geometry = geometry;
    this.units = units;
    this.forecastGenerator = forecastGenerator;
    this.generatedAt = generatedAt;
    this.updateTime = updateTime;
    this.elevation = elevation;
    this.periods = periods;
  }
}

class WeatherForecastFeature {
  constructor(id, type, properties) {
    this.id = id;
    this.type = type;
    this.properties = properties;
  }
}

class WeatherPointProperties {
  constructor(
    geometry,
    id,
    type,
    cwa,
    forecastOffice,
    gridId,
    gridX,
    gridY,
    forecast,
    forecastHourly,
    forecastGridData,
    observationStations,
    forecastZone,
    relativeLocation,
    county,
    fireWeatherZone,
    timeZone,
    radarStation
  ) {
    this.geometry = geometry;
    this.id = id;
    this.type = type;
    this.cwa = cwa;
    this.forecastOffice = forecastOffice;
    this.gridId = gridId;
    this.gridX = gridX;
    this.gridY = gridY;
    this.forecast = forecast;
    this.forecastHourly = forecastHourly;
    this.forecastGridData = forecastGridData;
    this.observationStations = observationStations;
    this.forecastZone = forecastZone;
    this.relativeLocation = relativeLocation;
    this.county = county;
    this.fireWeatherZone = fireWeatherZone;
    this.timeZone = timeZone;
    this.radarStation = radarStation;
  }
}

class RelativeLocation {
  constructor(type, geometry, properties) {
    this.type = type;
    this.geometry = geometry;
    this.properties = properties;
  }
}

class WeatherPointResponse {
  constructor(id, type, properties) {
    this.id = id;
    this.type = type;
    this.properties = properties;
  }
}

class WeatherData {
  constructor(currentWeather, hourlyForecast, weeklyForecast) {
    this.currentWeather = currentWeather;
    this.hourlyForecast = hourlyForecast;
    this.weeklyForecast = weeklyForecast;
  }
}

class GridpointData {
  constructor(properties) {
    this.properties = properties;
  }
}

class TimeSeriesData {
  constructor(uom, values) {
    this.uom = uom;
    this.values = values;
  }
}
