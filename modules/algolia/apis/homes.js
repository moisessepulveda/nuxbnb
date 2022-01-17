import {getHeaders} from "../helpers";
import {getErrorResponse, unWrap} from "../../../utils/fetchUtils";
import axios from "axios";

export default (algoliaConfig) => {
    const headers = getHeaders(algoliaConfig)
    return {
        create: async (homeId, payload) => {
            try {
                //console.log(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`);
                return await unWrap(await axios.put(`https://${algoliaConfig.appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
                    payload,
                    {
                        headers: headers
                    }
                ))
            } catch (error) {
                return getErrorResponse(error)
            }
        },

    }
}