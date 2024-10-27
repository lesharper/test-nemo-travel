/**Функция для мерджа любых массивов, если в них одинаковое значение */
export function combineArrays<T>(arrays: any[][]) {
    const maxLength = arrays[0].length // Длина массивов
    const combinedArray = []

    for (let i = 0; i < maxLength; i++) {
        const combinedElement = arrays.map(array => array[i]) // Объединяем элементы по индексу

        combinedArray.push(combinedElement)
    }

    return combinedArray as T[][]
}
