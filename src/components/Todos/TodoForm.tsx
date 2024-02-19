import React from 'react'
import style from './TodoForm.module.css'

type Props = {
  addTodo: (text: string) => void
}

export default function TodoForm({ addTodo }: Props) {
  const [text, setText] = React.useState('')

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (text) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <section className={style.todoFormContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='What else?'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>new ToDo</button>
      </form>
    </section>
  )
}