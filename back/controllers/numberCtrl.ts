import { UserNumber } from "../models/number";

class NumberCtrl {

    async getAllNumberSorted(req, res){

        try {
            //sort the numbers from smallest to largest
            const numberArray = await UserNumber.find().sort({number:1});
            const lastCreatedNumber = await UserNumber.findOne().sort({createdAt: -1}).lean();

            res.status(200).send([...numberArray,{...lastCreatedNumber, lastCreated:true}]);
        }catch (err){
            console.log(err);
        }

    }
    async newNumber(req,res){
        const { body } = req;

        if (!body) res.send("une erreur est survenue!");

        try {
            const newNumber = await UserNumber.create({...body});

            console.log(newNumber);
            res.status(201).send(newNumber);
        }catch (err){
            console.log(err);
        }

    }
}

export const  numberCtrl = new NumberCtrl();