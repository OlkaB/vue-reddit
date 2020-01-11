import format from 'date-fns/format'
import fromUnixTime from 'date-fns/fromUnixTime'

export const dateFromUnixTime = (date) => {
    if (!date) return date
    return format(fromUnixTime(date), 'yyyy-MM-dd')
}

export function useFilters (Vue) {
    Vue.filter('dateFromUnixTime', dateFromUnixTime)
}
