import { useState } from 'react'
import { ITodoListItem } from '../../interfaces/todos'
import Styled from './ListItem.styles'
import { FaCheck, FaTrashAlt, FaSave } from 'react-icons/fa'
import { FaPencil } from 'react-icons/fa6'
import { FiRotateCw } from 'react-icons/fi'

interface Props {
  todo: ITodoListItem
}

const TodoListItem = ({ todo }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  const completeTodo = () => {}

  const reopenTodo = () => {}

  const editTodo = () => {
    setIsEditing(true)
  }

  const completeEditing = () => {
    setIsEditing(false)
    // 에디팅
  }

  const removeTodo = () => {
    // 삭제
  }

  return (
    <Styled.Container>
      <Styled.Contenns>{todo.contents}</Styled.Contenns>
      <Styled.ButtonGroup>
        <Styled.DoneButton onClick={() => {}}>
          {todo.isDone ? <FiRotateCw /> : <FaCheck />}
        </Styled.DoneButton>
        <Styled.EditButton
          onClick={() => (isEditing ? completeEditing() : editTodo())}
        >
          {isEditing ? <FaSave /> : <FaPencil />}
        </Styled.EditButton>
        <Styled.DeleteButton onClick={() => removeTodo()}>
          <FaTrashAlt />
        </Styled.DeleteButton>
      </Styled.ButtonGroup>
    </Styled.Container>
  )
}

export default TodoListItem
