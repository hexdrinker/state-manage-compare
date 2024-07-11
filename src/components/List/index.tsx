import { useState } from 'react'
import { ITodoListItem } from '../../interfaces/todos'
import TodoListItem from '../ListItem'
import Styled from './List.styles'

// interface Props {
//   todos: ITodoListItem[]
// }
const todos: ITodoListItem[] = [
  {
    id: '1',
    contents: 'Lorem, ipsum dolor.',
    isDone: false,
    isRemoved: false,
  },
  {
    id: '2',
    contents: 'Lorem ipsum dolor sit amet.',
    isDone: false,
    isRemoved: false,
  },
  {
    id: '3',
    contents: 'Lorem ipsum dolor sit amet.',
    isDone: true,
    isRemoved: false,
  },
  {
    id: '4',
    contents: 'Lorem ipsum dolor sit amet.',
    isDone: false,
    isRemoved: true,
  },
]
const TodoList = () => {
  const [todo, setTodo] = useState<string>('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    todos.push({
      id: `${todos.length + 1}`,
      contents: todo,
      isDone: false,
      isRemoved: false,
    })
    setTodo('')
  }

  return (
    <Styled.Container>
      <Styled.FormWrapper>
        <Styled.FormTitle>TODO LIST</Styled.FormTitle>
        <Styled.Form onSubmit={onSubmit}>
          <Styled.Input
            value={todo}
            onChange={onChange}
            placeholder='할 일을 입력해주세요...'
          />
          <Styled.AddButton>+</Styled.AddButton>
        </Styled.Form>
      </Styled.FormWrapper>
      <Styled.List>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
          />
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default TodoList
