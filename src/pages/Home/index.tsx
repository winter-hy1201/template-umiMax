import { useStore } from '@/store/index';
import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Button } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name } = useModel('global');
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const removeAllCount = useStore((state) => state.removeAllCount);

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <div className="font-bold">Hello zustand</div>
        <div className="p-5">{count}</div>

        <Button type="primary" onClick={increment}>
          +1
        </Button>
        <Button onClick={removeAllCount}>归零</Button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
