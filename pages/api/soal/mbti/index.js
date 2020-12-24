import shuffle from 'shuffle-array'

const MBTIQuestion = require('../../../../models/mbtiModel')
const dbConnect = require('../../../../utils/dbConnect')

export default async function(req, res){
    const { method } = req;

    dbConnect()

    switch(method){
        case "GET":
            try {
                const mbtis = await MBTIQuestion.find({})

                if(!mbtis){
                    return res.status(400).json({"data": "data not found"})
                }

                function shuffleAndSlice(array, start, end) {
                    let temp = shuffle(array);
                    temp = temp.slice(start, end);
                    return temp;
                }

                const tempA = shuffleAndSlice(await MBTIQuestion.find({ indicator : "A" }), 0, 11);
                const tempB = shuffleAndSlice(await MBTIQuestion.find({ indicator : "B" }), 0, 11);
                const tempC = shuffleAndSlice(await MBTIQuestion.find({ indicator : "C" }), 0, 11);
                const tempD = shuffleAndSlice(await MBTIQuestion.find({ indicator : "D" }), 0, 11);
                const tempE = shuffleAndSlice(await MBTIQuestion.find({ indicator : "E" }), 0, 11);
                
                const soalready = shuffle([...tempA,...tempB,...tempC,...tempD,...tempE]);

                return res.status(200).json(soalready)
            } catch (error) {
                return res.status(400).json({"data": error})
            }
        default:
            return res.status(405).json({"data": "method not allowed"})
    }
}