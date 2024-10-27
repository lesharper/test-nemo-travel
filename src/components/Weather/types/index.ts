export enum WeatherVariables {
    weathercode,
    temperature_2m_max,
    temperature_2m_min,
    apparent_temperature_max,
    apparent_temperature_min,
    sunrise,
    sunset,
    precipitation_sum,
    rain_sum,
    showers_sum,
    snowfall_sum,
    precipitation_hours,
    windspeed_10m_max,
    windgusts_10m_max,
    winddirection_10m_dominant,
    shortwave_radiation_sum,
    et0_fao_evapotranspiration,
}

export type TWeatherVariablesKey = keyof typeof WeatherVariables
export type TWeatherVariablesKeys = TWeatherVariablesKey[]

export interface IWeatherParams {
    lat: number
    long: number
    variables: TWeatherVariablesKeys
}

type TDailyKey = TWeatherVariablesKey | 'time'

type TWeatherDaily = Record<TDailyKey, number[] | string[]>

export interface IWeatherResponse {
    daily: Partial<TWeatherDaily>
}
