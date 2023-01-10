import styled from '@emotion/styled';

const typeButton: any = {
  primary: { background: '#8833ff', color: 'white' },
  default: { background: '#ffffff', color: '#6B7A99' }
};

const ButtonDCStyled = styled.button<any>`
  box-shadow: 0px 2px 5px rgba(38, 51, 77, 0.03);
  background: ${(props: any) => typeButton[props.color].background};
  color: ${(props: any) => typeButton[props.color].color};
  border-radius: 20px;
`;

export default ButtonDCStyled;
