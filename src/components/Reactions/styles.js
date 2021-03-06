import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  width: 300px;
  z-index: 1;
  position: absolute;
  bottom: 35px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.15);

  .react {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0;
    border-radius: 50px;
    padding: 0;
    background-color: transparent;
    margin: 5px;

    span {
      display: none;
    }

    &:hover {
      span {
        display: block;
        position: absolute;
        margin-top: -40px;
        font-weight: bold;
        background-color: #1d2129a8;
        font-family: sans-serif;
        color: #fff;
        padding: 5px 10px;
        border-radius: 20px;
      }
    }

    img {
      width: 40px;
      height: 40px;
      transition: 0.3s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
