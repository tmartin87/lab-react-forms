import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev")
  const [graduationYear, setGraduationYear]=useState(0)
  const [isGraduated,setIsgraduated] = useState(false)  

  const handleStudentsInput = (e) => setStudents(e.target.value)
  const handleFullnameInput = (e) => setFullName(e.target.value)
  const handleImagetsInput = (e) => setImage(e.target.value)
  const handleEmailsInput = (e) => setEmail(e.target.value)
  const handleProgramInput = (e) => setProgram(e.target.value)
  const handleGraduationYearInput = (e) => setTGraduationYear(e.target.value)
  const handleIsGraduatedInput = (e) => setTIsGraduated(e.target.checked)

  const handleSubmit = (e) => {
    e.preventDefault ();
  const newStudent = {fullName, image, email, program, graduationYear, isGraduated}}
  
  


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
