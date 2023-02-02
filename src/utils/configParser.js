export default function (obj, payload) {
    Object.entries(payload).forEach(([key, value]) => obj[key] = value)
    return obj
}