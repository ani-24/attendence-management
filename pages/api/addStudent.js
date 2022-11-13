import connectDb from "../../middleware/mongoose";
import Student from "../../models/Student";

const handler = async (req, res) => {
  if (!req.body) {
    res.status(401).send("Unauthorized");
  } else {
    const { sid, name, course, performance, attendence } = req.body;
    let studentExists = false;
    Student.find({ sid }).then(() => {
      studentExists = true;
    });
    console.log(studentExists);
    if (!studentExists) {
      let newStudent = new Student(req.body);
      await newStudent.save();
      res.status(201).send("Record added");
    } else {
      res.send("Data already exists");
    }
  }
};

export default connectDb(handler);
