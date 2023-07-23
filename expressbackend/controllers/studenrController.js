import StudentModel from "../models/Student.js";

class studentController{
    static getAllDoc = async(req,res)=>{
        try {
            const result = await StudentModel.find();
            res.send(result)
        } catch (error) {
            console.log(error)
        }
    }
}

export default studentController;