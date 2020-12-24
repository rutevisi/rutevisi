const UserResult = require('../../../../models/resultModel')
const dbConnect = require('../../../../utils/dbConnect')

export default async function(req, res){
    const { method } = req;
    const resultObj = req.body.result;
    const testname = req.body.testname;

    dbConnect();

    switch(method){
        case "GET":
            try {
                const results = await UserResult.find({})

                if(!results){
                    return res.status(400).json({"data": "data not found"})
                }

                return res.status(200).json(results)
            } catch (error) {
                return res.status(400).json({"data": error})
            }
        case "POST":
            try {
                const result = JSON.stringify(resultObj)
                const newResult = await UserResult.create({result, testname})

                if(!newResult){
                    return res.status(500).json({ "data": "Failed to save data" });
                }

                return res.status(200).json(newResult);
            } catch (error) {
                console.log(error)
                return res.status(400).json({"data": "Failed to save data"})
            }
        default:
            return res.status(405).json({"data": "method not allowed"})
    }
}