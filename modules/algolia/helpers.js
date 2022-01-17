export function getHeaders(algoliaConfig) {
    const headers = {
        "X-Algolia-API-Key": algoliaConfig.apiKey,
        "X-Algolia-Application-Id": algoliaConfig.appId,
    }

    return headers;
}


export function sendJSON(data, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
}

export function rejectHitBadRequest(res) {
    res.statusCode = 400
    res.end()
}

export function hasBadBody(req) {
    return !req.body || Object.keys(req.body).length === 0
}