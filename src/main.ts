export function downloadCsv(csv: string, fileName: string) {
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.setAttribute('href', url);
    link.setAttribute('download', fileName)
    link.click();
}

export function exportCSVFromJSON(
    { data, headers, fileName }:
        { data: any[], headers?: string[], fileName?: string }) {
    if (data?.length > 0) {
        let csv = ""
        fileName = fileName ? fileName + '.csv' : 'export.csv'
        headers = headers ? (headers?.length > 0 ? headers : Object.keys(data[0])): Object.keys(data[0])
        csv = headers.join(',') + '\n';
        if (data?.length > 0) {
            data.forEach(dataObj => {
                csv += Object.values(dataObj) + '\n'
            })
        }
        return downloadCsv(csv, fileName)
    }
    return false
}