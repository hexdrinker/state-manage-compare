import styled from '@emotion/styled'

const Container = styled.div`
  width: 550px;

  @media (max-width: 640px) {
    width: 100%;
  }
`

const FormWrapper = styled.div`
  height: auto;
  padding: 50px;
  margin: 70px auto;
  background: #ffffffdb;
  border-radius: 15px;

  @media (max-width: 400px) {
    padding: 10px;
  }
`

const FormTitle = styled.h1`
  text-align: center;
  font-size: 28px;
  color: #000;
  margin-bottom: 35px;
`

const Form = styled.form`
  text-align: center;
`

const Input = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  background: #fff;
  border-radius: 5px;
  font-size: 15px;
  padding: 0 10px;
  vertical-align: middle;
  color: #333;
  margin-right: 4px;

  &:focus {
    outline: none;
  }
`

const AddButton = styled.button`
  width: 12%;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  background-color: #8b5ec6;
  vertical-align: middle;
`

const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
`

export default {
  Container,
  FormWrapper,
  FormTitle,
  Form,
  AddButton,
  Input,
  List,
}
