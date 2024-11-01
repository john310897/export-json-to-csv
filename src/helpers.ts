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
export function getValueByKeys(keys: any[], dataObj: any) {
	return keys.reduce((prev: any, curr: any) => {
		if (curr !== undefined && prev !== curr)
			return prev[curr]
		return dataObj[prev]
	}, keys[0])
}
export const getDirectHeaders = (dataObj: any) => {
	let headers: any = []
	Object?.keys(dataObj)?.forEach((key: any) => {
		if (typeof dataObj[key] !== "object") {
			headers.push(key)
		}
	})
	return headers
}
export function getValidData(params: any = {}) {
	const { headers, keys, data } = params;
	let obj: any = { headers: [], keys: [] }
	if (!headers?.length && !keys?.length) {
		obj.headers = getCSVValues(getDirectHeaders(data?.[0]))
		obj.keys = getDirectHeaders(data?.[0])
	}
	if (keys?.length > 0 && !headers?.length) {
		obj.headers = getCSVValues(keys)
		obj.keys = keys
	}

	if (headers?.length > 0 && !keys?.length) {
		if (headers?.length === getDirectHeaders(data?.[0])) {
			obj.headers = getCSVValues(headers);
			obj.keys = getDirectHeaders(data?.[0])
		} else {
			return { status: 'error', message: 'please specify keys for limited headers' }
		}
	}
	if (headers?.length > 0 && keys?.length > 0) {
		if (headers?.length !== keys?.length) {
			return { status: 'error', message: 'headers length did not match key length' }
		} else {
			obj.headers = getCSVValues(headers);
			obj.keys = keys
		}
	}
	return obj
}
