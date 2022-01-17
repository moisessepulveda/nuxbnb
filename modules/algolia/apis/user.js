import {getHeaders} from "../helpers";
import {getErrorResponse, unWrap} from "../../../utils/fetchUtils";
import axios from "axios";

export default (algoliaConfig) => {
    const headers = getHeaders(algoliaConfig)
    return {
        create: async (identity, payload) => {
            try {
                return await unWrap(await axios.put(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`,
                    payload,
                    {
                        headers: headers
                    }
                ))
            } catch (error) {
                return getErrorResponse(error)
            }
        },
        getById:  async (identity) => {
            try {
                return await unWrap(await axios.get(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/users/${identity.id}`,
                    {
                        headers: headers
                    }
                ))
            } catch (error) {
                return getErrorResponse(error)
            }
        }
    }
}