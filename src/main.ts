import { getCSVValues, getValidData, downloadCsv, getValueByKeys } from './helpers'
export function exportCSVFromJSON(
    params:
        { title?: string, data: any[], headers?: string[], keys?: string[], fileName?: string }) {
    params.title = params.title || undefined;
    params.data = params.data || [];
    params.headers = params.headers || [];
    params.keys = params.keys || [];
    params.fileName = params.fileName || undefined;
    if (params.data?.length > 0) {
        const values = getValidData(params)
        if (values?.status === 'error') {
            return console.error(values?.message)
        }
        const { headers, keys } = values
        let csv = ""
        if (params.title) {
            csv += params.title + '\n'
        }
        csv += headers
        if (params.data?.length > 0) {
            params.data.forEach(dataObj => {
                if (keys && keys?.length > 0) {
                    let tempObj: any = {};
                    keys.forEach((key: any) => {
                        tempObj[key] = getValueByKeys(key.split('.'), dataObj)
                    })
                    csv += getCSVValues(Object.values(tempObj))
                } else {
                    csv += getCSVValues(Object.values(dataObj))
                }
            })
        }
        return downloadCsv(csv, params.fileName ?? 'export.csv')
    }
    return false
}