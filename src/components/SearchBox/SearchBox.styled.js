import styled from 'styled-components';

export const InputGroup = styled.form`
  display: flex;
  align-items: center;
  width: 450px;
  height: 40px;
  background-color: #fff;
  box-shadow: 0px 0px 7px 1px rgba(150, 150, 150, 1);
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 58px;
  height: 48px;
  border: 0;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0b/Search_Icon.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
export const Input = styled.input`
  display: inline-block;
  width: 80%;
  font: inherit;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  margin-left: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  }
`;
