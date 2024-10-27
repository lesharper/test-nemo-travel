import { useEffect, useState } from 'react'
import axios from 'axios'
import { IWeatherParams, IWeatherResponse } from '../types'

export const useWeather = (props: IWeatherParams) => {
    const [weather, setWeather] = useState<IWeatherResponse | null>(null)

    const { lat, long, variables } = props

    useEffect(() => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=${variables.join(',')}&timezone=Europe/Moscow&past_days=0`
        axios.get(url).then(response => {
            const data = response.data
            setWeather(data)
        })
    }, [props])

    return weather
}
