const Ujian = require('../../../models/ujianModel')
const dbConnect = require('../../../utils/dbConnect')

dbConnect()

export default async function(req, res){
    const { method } = req;

    switch(method){
        case "GET":
            try {
                const ujians = await Ujian.find({})

                if(!ujians){
                    return res.status(400).json({"data": "data not found"})
                }

                return res.status(200).json(ujians)
            } catch (error) {
                return res.status(400).json({"data": error})
            }
        default:
            return res.status(405).json({"data": "method not allowed"})
    }
}