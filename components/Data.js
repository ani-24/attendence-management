import Student from "../models/Student";

const Data = ({ students }) => {
  console.log(students);
  return <div>{students} -- here we go</div>;
};

export default Data;

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let students = await Student.find();
  return {
    props: { students: JSON.parse(JSON.stringify(students)) },
  };
}
