import { useState, useEffect } from "react";

function ToDoList(){
  const [items, setItems] = useState(() => {
     const saved = localStorage.getItem("todoItems");
     return saved ? JSON.parse(saved) : [];
  });
  
  const [newItem, setNewItem] = useState('');
  const handleDel = (deleteIndex) => {
    setItems(items.filter((_, index) => index !== deleteIndex));
  };

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const itemMap = items.map((item, index) => (
    <li key={index} 
      onClick={()=> handleDel(index)}
      style={{cursor: 'pointer'}}
      >
      {item}
    </li >
    ));

  const handleAdd = ()=>{
    if (newItem.trim() === "") return;
    setItems([...items, newItem]);
    setNewItem('');
  };

  return(
    <div>
      <h2>To-Do List</h2>
      <div>
        <input 
          type="text" 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add Item Here" 
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul style={{listStyleType: 'none', padding: '0'}}>
        {itemMap}
      </ul>
    </div>
  )
  };

export default ToDoList;

