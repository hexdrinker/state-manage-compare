import styled from '@emotion/styled'

const Container = styled.li`
  background: #fff;
  padding: 10px;
  margin: 10px 0;
  font-size: 18px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Contenns = styled.p`
  font-size: 16px;
  color: #333;
`

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  padding: 8px 16px;
  height: 32px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  margin: 0 2px;
`

const DoneButton = styled(Button)`
  background-color: #28a745;
`
const EditButton = styled(Button)`
  background-color: #ebd316;
`
const DeleteButton = styled(Button)`
  background-color: #dc3545;
`

export default {
  Container,
  Contenns,
  ButtonGroup,
  DoneButton,
  EditButton,
  DeleteButton,
}
