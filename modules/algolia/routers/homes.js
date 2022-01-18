import {rejectHitBadRequest, hasBadBody, sendJSON} from "../helpers";
import {v4 as uuidv4} from 'uuid'

export default (apis) => {
    return async (req, res) => {
        if (req.method === 'POST') {
            if (hasBadBody(req)) {
                return rejectHitBadRequest(res)
            }
            await createHomes(req.identity, req.body, res)
            return
        }
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