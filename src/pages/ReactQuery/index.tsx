import { getListApi } from '@/api/test';
import { PageContainer } from '@ant-design/pro-components';
import { useQuery } from '@umijs/max';

const getPostById = async () => {
  const result = await getListApi({
    pageNum: 1,
    pageSize: 10,
  });
  console.log('data', result);
  return result;
};

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await getPostById();
      return data;
    },
  });
}

const ReactQuery: React.FC = () => {
  const { status, data, error, isFetching } = usePosts();

  return (
    <PageContainer ghost>
      <div>
        <div>Hello ReactQuery</div>
        <div>status:{JSON.stringify(status)}</div>
        <div>data:{JSON.stringify(data)}</div>
        <div>error:{JSON.stringify(error)}</div>
        <div>isFetching:{JSON.stringify(isFetching)}</div>
      </div>
    </PageContainer>
  );
};

export default ReactQuery;
