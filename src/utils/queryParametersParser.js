export default function(config) {
    return Object.entries(config).reduce((acc, [key, value]) => {
        if(!value) return acc
        if(acc) acc += '&'
        acc += `${key}=${value}`
        return acc
    }, '')
}