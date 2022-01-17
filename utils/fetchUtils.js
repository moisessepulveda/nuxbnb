export async function unWrap(response) {
    const {data, status, statusText} = response
    return {
        data,
        status,
        statusText
    }
}

export function getErrorResponse(error) {
    return {
        ok: false,
        status: 500,
        statusText: error.message,
        json: {}
    }
}