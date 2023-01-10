import ButtonDCStyled from './ButtonDC.styles';

interface Props {
  color?: 'default' | 'primary';
  value: string;
}

function ButtonDC({ color = 'default', value }: Props) {
  return <ButtonDCStyled color={color}>{value}</ButtonDCStyled>;
}

export default ButtonDC;
