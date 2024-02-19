import { useStore } from '@/store/index';
import { PageContainer } from '@ant-design/pro-components';
import { Button } from 'antd';

const Zustand: React.FC = () => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const removeAllCount = useStore((state) => state.removeAllCount);

  return (
    <PageContainer ghost>
      <div>
        <div>Hello zustand</div>
        <div>{count}</div>

        <Button type="primary" onClick={increment}>
          +1
        </Button>
        <Button onClick={removeAllCount}>归零</Button>
      </div>
    </PageContainer>
  );
};

export default Zustand;
