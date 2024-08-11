export function downloadCsv(csv: string, fileName: string) {
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url);
    link.setAttribute('download', fileName)
    link.click();
}
export function getCSVValues(arr: any[]) {
    return arr.map(o => `"${o}"`).join(",") + '\n';
}
export function getValidData(params: any = {}) {
    const { headers, keys, data } = params;
    let obj: any = { headers: getCSVValues(Object.keys(data[0])), keys: [] }
    if (keys.length > 0 && headers.length > 0 && keys.length !== headers.length) {
        throw new Error("headers length did not match key length")
    }
    if (headers.length > 0 && keys.length > 0 && headers.length !== keys.length) {
        throw new Error("provide keys if you are selecting limited columns")
    }
    if (headers.length > 0) {
        obj.headers = getCSVValues(headers)
    }
    if (keys.length > 0) {
        obj.keys = keys
    }
    return obj
}
