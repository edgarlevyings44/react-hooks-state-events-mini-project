import React,{useState}from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }

 
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  
      categories={CATEGORIES} 
      selectedCategory={selectedCategory} 
      onCategoryClick={handleCategoryClick}/>

      <NewTaskForm  
      categories={CATEGORIES} 
      onTaskFormSubmit={handleTaskFormSubmit}/>

      <TaskList 
      tasks={tasks}
      selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
