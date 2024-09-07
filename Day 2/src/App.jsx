import { useEffect, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const students = [
    {
      id: 1,
      name: 'Avip',
      age: 24,
      active: false,
    },
    {
      id: 2,
      name: 'Budi',
      age: 23,
      active: false,
    },
    {
      id: 3,
      name: 'Rudi',
      age: 28,
      active: true,
    },
  ];

  const studentActive = students.filter((student) => {
    return student.active === false;
  });

  const showAlert = (message) => {
    alert(message);
  };

  // const name = 'Avip';
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
  }, [timer]);

  const [idStudent, setIdStudent] = useState(1);
  const [activeStudent, setActiveStudent] = useState({});

  useEffect(() => {
    setActiveStudent(students[idStudent]);
  }, [idStudent]);

  const useCalculate = (a, b) => {
    return a + b;
  };

  const people = useRef('avip');

  return (
    <>
      {studentActive.map((student, index) => (
        <Button
          activeStudent={activeStudent}
          key={student.id}
          onClick={() => setIdStudent(index)}
        >
          {student.name} - {student.age}
        </Button>
      ))}
      <h2>Id : {idStudent}</h2>
      <h1>{activeStudent.name}</h1>
      {useCalculate(10, 5)}
      {people.current}
    </>
  );
}

export default App;
