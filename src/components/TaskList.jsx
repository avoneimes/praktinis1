import TaskItem from "./TaskItem"; //importuojamas TaskItem kuris atvaizduos kiekviena uzd

//tasks - uzduociu sarasas is App.jsx
//toggleTask - pazymi uzd kaip atlikta/neatlikta
//deleteTask - istrina uzd
export default function TaskList({ tasks, toggleTask, deleteTask }) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task) => ( //einama per kiekviena uzd ir sukuriamas Taskitem komponentas
                <TaskItem
                    //key naudojamas optimizuojant saraso atnaujinimus (kai pasikeicia sarasas react palygina key reiksmes ir atnaujina tik tas kurios keitesi)
                    key={task.id}
                    task={task}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ))}
        </ul>
    );
}
