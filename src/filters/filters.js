import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime'

export const dateFromUnixTime = (date) => {
    if (!date) return date
    return format(fromUnixTime(date), 'yyyy-MM-dd')
}

export const DOMParsed = (stringWithEntities) => {
    if (!stringWithEntities || !DOMParser) return stringWithEntities

    const parser = new DOMParser
    const dom = parser.parseFromString(
        `<!doctype html><body>${stringWithEntities}`,
        'text/html')
    const decodedString = dom.body.textContent

    return decodedString
}

export function useFilters (Vue) {
    Vue.filter('dateFromUnixTime', dateFromUnixTime)
    Vue.filter('DOMParsed', DOMParsed)
}
