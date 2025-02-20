//task - 1 uzdsu id, text, completed reiksmemis
//toggleTask - pazymi uzd kaip atlikta/neatlikta
//deleteTask - istrina uzd
export default function TaskItem({ task, toggleTask, deleteTask }) {
    return (
        //jeigu uzd pazymeta kaip completed, pridedamas teksto perbraukimas
        <li style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            borderBottom: "1px solid #ccc"
        }}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
            {/*mygtukai:*/}
            <div>
                <button onClick={() => toggleTask(task.id)} style={{ marginRight: "5px" }}>
                    {task.completed ? "Atžymėti" : "Pažymėti"} {/*pazymeti uzd kaip atlikta/neatlikta*/}
                </button>
                <button onClick={() => deleteTask(task.id)} style={{ backgroundColor: "red", color: "white" }}> {/*istrina uzd*/}
                    Ištrinti
                </button>
            </div>
        </li>
    );
}
