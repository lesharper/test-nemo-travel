import { useWeather } from './hooks'
import { IWeatherParams } from './types'
import styles from './Weather.module.css'
import { combineArrays } from '../../lib'

export const Weather = (props: IWeatherParams) => {
    const weather = useWeather(props)

    if (!weather?.daily) return null

    const keys = Object.keys(weather.daily)

    const values = Object.values(weather.daily)

    const combineValues = combineArrays<string>(values)

    return (
        <article className={styles.container}>
            <table>
                <thead>
                    <tr>
                        {keys.map(variable => (
                            <td>{variable}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {!!combineValues.length &&
                        combineValues.map((value, _) => (
                            <tr>
                                {value.map(item => (
                                    <td>{item}</td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
        </article>
    )
}
