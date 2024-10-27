//import { Weather } from './components'
import styles from './App.module.css'
import Select from 'react-select'
import { useState } from 'react'
import {
    TWeatherVariablesKey,
    TWeatherVariablesKeys,
    WeatherVariables,
} from './components/Weather/types'
import { convertStringToOption } from './lib'
import { Weather } from './components'

type TWeatherSelectOption = { label: TWeatherVariablesKey; value: TWeatherVariablesKey }

export const App = () => {
    const defaultValue = [
        convertStringToOption('rain_sum'),
        convertStringToOption('snowfall_sum'),
    ] as TWeatherSelectOption[]

    const [currentParams, setCurrentParams] = useState<TWeatherSelectOption[]>(defaultValue)
    const currentParamsIsExist = currentParams.length > 0
    const currentParamsValues = currentParams.map(param => param.value) as TWeatherVariablesKeys

    const variables = Object.keys(WeatherVariables)
        .filter(item => isNaN(Number(item)))
        .map(item => convertStringToOption(item)) as TWeatherSelectOption[]

    return (
        <main className={styles.container}>
            <Select
                isMulti
                isSearchable={false}
                defaultValue={defaultValue}
                name="variables"
                options={variables}
                onChange={newValue => setCurrentParams(newValue as TWeatherSelectOption[])}
                className={styles.select}
                placeholder={'Выберите параметры API'}
                noOptionsMessage={_ => 'Все параметры выбраны'}
            />

            {currentParamsIsExist && (
                <Weather
                    lat={55.751244}
                    long={37.618423}
                    variables={currentParamsValues}
                />
            )}
        </main>
    )
}
