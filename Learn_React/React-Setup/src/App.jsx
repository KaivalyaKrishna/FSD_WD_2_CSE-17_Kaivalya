import StudentCard from "./StudentCard";

function App()
{
  return (
    <div>
      <h1>Student ID Card</h1>
      <StudentCard name= "Vidhi" branch="CSE" year = "2nd"/>
      <StudentCard name= "Kaivalya" branch="ECE" year = "2nd"/>
    </div>
  );
}

export default App;