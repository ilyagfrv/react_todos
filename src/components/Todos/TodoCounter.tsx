import { useContext } from 'react'

import style from './TodoCounter.module.css'

import { TodoContext } from 'context/todoContext'
import { TodoContextType } from 'types/todo'

export default function TodoCounter() {
  const { completedTodosCount } = useContext(TodoContext) as TodoContextType

  return (
    <div className={style.todoCounterContainer}>
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  )
}
