import React,{useState} from 'react'
import './todo.css'
const TodoList = () => {
    let [text, setText] = useState('');
    let [todo, setTodo] = useState([]);

    let collectionData = (e) => {
        setText(e.target.value);
    };

    let handleSubmit = (e) => {
        if(text ==="" || text === null)
        {
            alert('Enter Data')
        }else{
            e.preventDefault();
        setTodo((prevTodo) => [...prevTodo, text]);
        setText(''); // Clear the input after submitting
        }
    };

    let handleDelete = (index) => {
        setTodo((prevTodo) => prevTodo.filter((_, i) => i !== index));
    };

    return (
        <>
            <h1 className='header'>Todo list</h1>
            <div className="todo-list">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder='Enter Something.....' 
                        value={text} 
                        onChange={collectionData}
                    />
                    <br /><br />
                    <button className='add'>ADD</button>
                </form>
            </div>
            <div className='display'>
                <ul>
                    {todo.map((elem, index) => (
                        <li key={index}>
                            <div> {index+1} . {elem}</div>
                            <div>
                                <button onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default TodoList
