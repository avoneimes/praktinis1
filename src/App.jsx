import { useState } from "react"; //leidzia saugoti reiksmes kurios gali keistis
import Menu from "./components/Menu";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import GuessGame from "./components/GuessGame";

export default function App() {
  const [view, setView] = useState("tasks");
  //tasks - busena kurioj saugomas uzduociu sarasas (is pradziu tuscias mas)
  //setTasks - funkcija kuri leidzia atnaujinti tasks busena
  const [tasks, setTasks] = useState([]);
  const [cart, setCart] = useState([]);

  //prideti nauja uzd
  const addTask = (taskText) => { //kai pridedama nauja uzd, sukuriamas newTask
    //kaip id naudojamas dabartinis laikas ir data
    //completed false nes is pradziu uzd neatlikta
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]); //pridedama nauja uzd prie esamo saraso
  };

  //pazymeti uzd kaip atlikta/neatlikta
  const toggleTask = (taskId) => {
    //pritaikomas map (naujam uzduociu masyvui) kuris eina per kiekviena uzd ir grazina atnaujinta uzd sarasa
    //jeigu task turi id kaip taskId - sukuriamas naujas objektas, kuris turi ta pacia info kaip sena uzd, bet completed reiksme pasikeicia:
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  //istrinti uzd
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId)); //istrinama uzd kurios id sutampa su nurodytu
  };

  //meniu
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Menu setView={setView} />

      {view === "tasks" && (
        <>
          <h1>Užduočių sąrašas</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </>
      )}

      {view === "cart" && (
        <>
          <h1>Krepšelio sistema</h1>
          <ProductList cart={cart} setCart={setCart} />
          <Cart cart={cart} setCart={setCart} />
        </>
      )}

      {view === "game" && <GuessGame />}
    </div>
  );
}



