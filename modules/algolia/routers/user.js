import {sendJSON} from "../helpers";
import {getErrorResponse, unWrap} from "../../../utils/fetchUtils"
import axios from "axios";

export default (apis) => {
    return async function getUserRoute(req, res, next) {
        const identity = req.identity
       // console.log(identity);
        const userData = await apis.user.getById(identity)
        // console.log("userdata");
        // console.log(userData);
        if(userData.status === 200) {
            sendJSON(userData.data, res)
            return
        }
        const payload = makeUserPayload(identity)
        apis.user.create(req.identity, payload)
        sendJSON(payload, res)
    }


    function makeUserPayload(identity) {
        return {
            name: identity.name,
            email: identity.email,
            image: identity.image,
            homeId: [],
            reviewCount: 0,
            description: '',
            joined: new Date().toISOString()
        }

    }
}