import { useState } from 'react';
import './input.css';

function App() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    const addTask = () => {
      if(input.trim()){
        setTasks([...tasks, 
          {
            id: Date.now(), 
            text: input, 
            feita: false
          }])
          setInput('')
      }
    }

    return(
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-blue-600'>

        <div className='bg-white shadow-lg rouded-3x1 p-16'>

          <div className='mb-4 flex'>

            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text' 
              placeholder='adicione tarefa' 
              className='flex-row px-3 py-2 border rounded-1-1g focus:outline-none focus:ring-blue-500'/>

             <button 
              onClick={addTask}
              className='bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600'>adicionar</button>

          </div>

          <ul className='space-y-2'>
              {
                tasks.map((task) => (
                  <li 
                    className='flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200'
                    key={task.id}>
                    <input type='checkbox'
                    checked={task.feita}
                    onChange={() => setTasks(
                      tasks.map((t) => (
                        t.id === task.id ? {...t, feita: !t.feita} : t
                      ))
                    )}
                    className='mr-2 h-5 w-5 text-blue-600'
                    />
                    <span className={`flex-grow ${task.feita ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.text}
                    </span>

                    <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))}
                      className='ml-2 border-none p-2 rounded-lg bg-red-500 text-white hover:bg-gred-600'>Deletar</button>
                  </li>
                ))
              }
          </ul>
        </div>
        
      </div>
    )
}
    


export default App;
