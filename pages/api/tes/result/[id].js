const UserResult = require('../../../../models/resultModel')
const dbConnect = require('../../../../utils/dbConnect')

export default async function(req, res){
    const { method } = req;

    dbConnect()

    switch(method){
        case "GET":
            try {
                const result = await UserResult.findById(req.query.id)

                if(!result){
                    return res.status(400).json({"data": "data not found"})
                }

                return res.status(200).json(result)
            } catch (error) {
                return res.status(400).json({"data": error})
            }
        default:
            return res.status(405).json({"data": "method not allowed"})
    }
}