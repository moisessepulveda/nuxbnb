import {rejectHitBadRequest, hasBadBody, sendJSON} from "../helpers";
import {v4 as uuidv4} from 'uuid'

export default (apis) => {
    return async (req, res) => {
        //console.log(req);
        if (req.method === 'POST') {
            if (hasBadBody(req)) {
                // console.log("r1");
               // console.log(req.body);
                return rejectHitBadRequest(res)
            }
            await createHomes(req.identity, req.body, res)
            return
        }
        //console.log(req.body);
        //console.log("r2");
        rejectHitBadRequest(res)
    }

    async function createHomes(identity, body, res) {
        const homeId = uuidv4()
        console.log(body);
        const payload = {
            ...body,
            reviewCount: 0,
            reviewValue: 0,
            userId: identity.id,
        }

        const resp = await apis.homes.create(homeId, payload)
        console.log(resp);
        if (resp.status !== 200) {
            res.statusCode = 500
            res.send()
            return
        }

        sendJSON({}, res)
    }
}