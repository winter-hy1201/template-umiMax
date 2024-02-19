import { styled } from '@umijs/max';
import { theme } from 'antd';
const { useToken } = theme;

type buttonProps = {
  bgcolor?: string;
  color?: string;
};

const Button = styled.button<buttonProps>`
  background: ${(props: buttonProps) => props?.bgcolor};
  color: ${(props: buttonProps) => props?.color};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Use Title and Wrapper like any other React component – except they're styled!
export default () => {
  const { token } = useToken();

  return (
    <div>
      <Button
        bgcolor={token.colorPrimary}
        color={'#fff'}
        onClick={() => {
          console.log('666');
        }}
      >
        Normal
      </Button>
      <Button>Primary</Button>
    </div>
  );
};
