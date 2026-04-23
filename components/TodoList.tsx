import React, { useEffect, useState } from 'react';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean; }[]>([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        // Load todos from local storage
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        // Save todos to local storage
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <div>
            <h1>Монгол Todo жагсаалт</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Шинэ даалгавар нэмэх"
            />
            <button onClick={addTodo}>Нэмэх</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>Устгах</button>
                    </li>
                ))}
            </ul>
            <button onClick={clearCompleted}>Бүгдийг цэвэрлэх</button>
        </div>
    );
};

export default TodoList;
