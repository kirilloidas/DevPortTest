export function queryParametersParser(config) {
    const arrayConfig = Array.isArray(config) ? config : Object.entries(config)

    return arrayConfig.reduce((acc, [key, value]) => {
        if(value === '') return acc
        if(Array.isArray(value)) {
            return acc += '&' + queryParametersParser(value.map(el => [key, el]))
        }
        if(acc) acc += '&'
        acc += `${key}=${value}`
        return acc
    }, '')
}