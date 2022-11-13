import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Router from "next/router";
import axios from "axios";

const AddStudent = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [performance, setPerformance] = useState("");
  const [attendence, setAttendence] = useState("");
  useEffect(() => {
    const cookie = Cookies.get("token");
    if (!cookie) {
      Router.push("/login");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = axios.post("/api/addStudent", {
      sid: id,
      name,
      course,
      performance,
      attendence,
    });
    Router.push("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="id">Student's ID:</label>
        <input
          type="text"
          id="id"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Student's Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="course">Student's Course:</label>
        <input
          type="text"
          id="course"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="performance">Student's Performance:</label>
        <input
          type="text"
          id="performance"
          name="performance"
          value={performance}
          onChange={(e) => setPerformance(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="attendence">Student's Attendence:</label>
        <input
          type="text"
          id="attendence"
          name="attendence"
          value={attendence}
          onChange={(e) => setAttendence(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddStudent;
