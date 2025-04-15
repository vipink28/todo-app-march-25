import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const [allTasks, setAllTasks] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);

    //add task
    const addTask = async (formData) => {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(`http://localhost:5001/tasks`, config);
            getAllTasks(user.id)
            alert("Task created successfully");
        } catch (error) {
            alert(error.message);
        }
    }

    //update task
    const updateTask = async (formData) => {
        const config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(`http://localhost:5001/tasks/${formData.id}`, config);
            getAllTasks(user.id)
            alert("Task updated successfully");
        } catch (error) {
            alert(error.message);
        }
    }

    const deleteTask = async (id) => {
        const config = {
            method: "DELETE"
        }
        try {
            const response = await fetch(`http://localhost:5001/tasks/${id}`, config);
            getAllTasks(user.id)
            alert("Task Deleted successfully");
            
        } catch (error) {
            alert(error.message);
        }
    }



    //get all tasks
    const getAllTasks = async (userid) => {
        try {
            const response = await fetch(`http://localhost:5001/tasks?userid=${userid}`);
            const tasks = await response.json();
            setAllTasks(tasks);
            setRecentTasks(tasks.slice(-3));
            setLatestTask(tasks[tasks.length - 1])
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        if (user) {
            getAllTasks(user.id)
        }
    }, [user])


    return (
        <TaskContext.Provider value={{
            addTask,
            allTasks,
            recentTasks,
            latestTask,
            updateTask,
            deleteTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskContext;