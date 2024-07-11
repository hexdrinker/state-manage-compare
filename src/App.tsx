import Styled from './App.styles'
import TodoList from './components/List'

function App() {
  return (
    <Styled.Container>
      <Styled.ListWrapper>
        <TodoList />
      </Styled.ListWrapper>
    </Styled.Container>
  )
}

export default App
