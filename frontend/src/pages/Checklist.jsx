import React, { useState } from "react";
import Index from "../components/Index";
import 'boxicons';

function InputSection({ newTask, handleInput, addTask }) {
    return (
        <div className='addtask'>
            <input type="text" onChange={handleInput} placeholder="Enter new task..." value={newTask} />
            <button className="add-btn" onClick={addTask}>Add</button>
        </div>
    );
}

function TaskList({ tasks, setTasks }) {
    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function taskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function taskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
        
        <ol>
            {tasks.map((task, index) =>
                <li key={index} className="check-list">
                    <span className="task">{task}</span>
                    <button className="up-btn" onClick={() => taskUp(index)}>
                        <i className='bx bx-up-arrow-alt'></i>
                    </button>
                    <button className="down-btn" onClick={() => taskDown(index)}>
                        <i className='bx bx-down-arrow-alt'></i>
                    </button>
                    <button className="del-btn" onClick={() => deleteTask(index)}>
                        <i className='bx bx-x'></i>
                    </button>
                </li>
            )}
        </ol>
        </>
    );
}

function Checklist() {
    const [tasks, setTasks] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newOngoingTask, setNewOngoingTask] = useState("");
    const [newCompletedTask, setNewCompletedTask] = useState("");

    function handleTaskInput(event) {
        setNewTask(event.target.value);
    }

    function handleOngoingInput(event) {
        setNewOngoingTask(event.target.value);
    }

    function handleCompletedInput(event) {
        setNewCompletedTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim()) {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function addOngoing() {
        if (newOngoingTask.trim()) {
            setOngoing(t => [...t, newOngoingTask]);
            setNewOngoingTask("");
        }
    }

    function addComplete() {
        if (newCompletedTask.trim()) {
            setCompleted(t => [...t, newCompletedTask]);
            setNewCompletedTask("");
        }
    }

    return (
        <>
        <Index/>
        <div className="home">
            <div className="checklist">
                <h1>Checklist</h1>
                <div className="checklist-box">
                    <div className="todolist">
                        <h3>Tasks</h3>
                        <InputSection newTask={newTask} handleInput={handleTaskInput} addTask={addTask} />
                        <TaskList tasks={tasks} setTasks={setTasks} />
                    </div>
                    <div className="todolist">
                        <h3>Ongoing Task</h3>
                        <InputSection newTask={newOngoingTask} handleInput={handleOngoingInput} addTask={addOngoing} />
                        <TaskList tasks={ongoing} setTasks={setOngoing} />
                    </div>
                    <div className="todolist">
                        <h3>Completed Task</h3>
                        <InputSection newTask={newCompletedTask} handleInput={handleCompletedInput} addTask={addComplete} />
                        <TaskList tasks={completed} setTasks={setCompleted} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Checklist;
