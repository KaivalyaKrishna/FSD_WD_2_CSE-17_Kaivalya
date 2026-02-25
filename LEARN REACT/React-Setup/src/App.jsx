import StudentCard from "./StudentCard";

function App()
{
  return (
    <div>
      <h1>Student List</h1>
      <StudentCard name= "Vidhi" branch="CSE"/>
      <StudentCard name= "Kaivalya" branch="ECE"/>
    </div>
  );
}

export default App;