import axios from 'axios'


export default function (context, inject) {
    const appId = "2V5C6VB6RO"
    const apiKey = "2a38a702cc6fb60480795cdc265dfe48"
    const headers = {
        "X-Algolia-API-Key": apiKey,
        "X-Algolia-Application-Id": appId,
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    inject('dataApi', {
        getHome,
        getReviewsByHomeId,
        getUsersByHomeId,
        getHomeByLocation
    })

    async function getHome(homeId) {
        try {
            return await unWrap(await axios.get(`https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`, {
                headers: headers
            }))
        } catch (error) {
            return getErrorResponse(error)
        }
    }

    async function getReviewsByHomeId(homeId) {
        try {
            return await unWrap(await axios.post(`https://${appId}-dsn.algolia.net/1/indexes/reviews/query`,
            {
                filters: `homeId: ${homeId}`,
                hitsPerPage: 6,
                attributesToHighlight: []
            },
            {
                headers: headers
            }
            ))
        } catch (error) {            
            return getErrorResponse(error)
        }
    }

    async function getUsersByHomeId(homeId) {
        try {
            return await unWrap(await axios.post(`https://${appId}-dsn.algolia.net/1/indexes/users/query`,
            {
                filters: `homeId: ${homeId}`,
                attributesToHighlight: []
            },
            {
                headers: headers
            }
            ))
        } catch (error) {            
            return getErrorResponse(error)
        }
    }

    async function getHomeByLocation(lat, lng, radiusInMeters = 1500) {
        try {
            return await unWrap(await axios.post(`https://${appId}-dsn.algolia.net/1/indexes/homes/query`,
            {
                aroundLatLng: `${lat},${lng}`,
                aroundRadius: radiusInMeters,
                hitsPerPage: 10,
                attributesToHighlight: []
            },
            {
                headers: headers
            }
            ))
        } catch (error) {            
            return getErrorResponse(error)
        }
    }

    async function unWrap(response) {
        const {data, status, statusText} = response
        return {
            data,
            status,
            statusText
        }
    }

    function getErrorResponse(error) {
        return {
            ok: false,
            status: 500,
            statusText: error.message,
            json: {}
        }
    }

}
