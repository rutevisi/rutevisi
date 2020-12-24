const Ujian = require('../../../models/ujianModel')
const dbConnect = require('../../../utils/dbConnect')

export default async function(req, res){
    const { method } = req;
    
    dbConnect()

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
        case "POST":
            try {
                UserResult.create({result, testname}, (error, tes) => {
                    if (error) {
                        return response.status(500).json({ error });
                    } else {
                        return response.status(200).json(tes);
                    }
                })
            } catch (error) {
                return res.status(400).json({"data": error})
            }
        default:
            return res.status(405).json({"data": "method not allowed"})
    }
}