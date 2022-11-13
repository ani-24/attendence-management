import mongoose from "mongoose";
import { useEffect, useState } from "react";
import Student from "../models/Student";
// import Data from "../components/Data";

const Data = ({ students }) => {
  return (
    <div>
      <div className="row">
        <p>ID</p>
        <p>Name</p>
        <p>Course</p>
        <p>Performance</p>
        <p>attendence</p>
      </div>
      {students.map((std) => {
        return (
          <div key={std._id} className="row">
            <p>{std.sid}</p>
            <p>{std.name}</p>
            <p>{std.course}</p>
            <p>{std.performance}</p>
            <p>{std.attendence}</p>
          </div>
        );
      })}
    </div>
  );
};

export default function Home({ students }) {
  const [data, setData] = useState(false);

  return (
    <div>
      <h1>Welcome to the Student Attendence Management System</h1>
      <button onClick={(prev) => setData(true)}>Show Data</button>
      <a href="/add-student">Add student</a>
      {data && <Data students={students} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let students = await Student.find();
  return {
    props: { students: JSON.parse(JSON.stringify(students)) },
  };
}
