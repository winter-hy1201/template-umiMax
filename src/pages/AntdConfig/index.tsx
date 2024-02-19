import { Layout, Space, Switch, theme, version } from 'antd';
import { styled, useAntdConfig, useAntdConfigSetter } from 'umi';
const { darkAlgorithm, defaultAlgorithm, useToken } = theme;

type H1Props = {
  color?: string;
};

const H1 = styled.h1<H1Props>`
  color: ${(props: H1Props) => props?.color};
`;

export default function Page() {
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();

  const { token } = useToken();

  return (
    <Layout>
      <H1 color={token.colorPrimary}>with antd@{version}</H1>
      <Space>
        <H1 color={token.colorPrimary}>isDarkTheme</H1>

        <Switch
          checked={antdConfig?.theme?.algorithm.includes(darkAlgorithm)}
          onChange={(data) => {
            // 此配置会与原配置深合并
            setAntdConfig({
              theme: {
                algorithm: [data ? darkAlgorithm : defaultAlgorithm],
                token: {
                  colorPrimary: data ? '#00b96b' : '#1890ff',
                  //   borderRadius: 2,

                  //   // 派生变量，影响范围小
                  //   colorBgContainer: '#f6ffed',
                },
              },
            });
          }}
        ></Switch>
      </Space>
    </Layout>
  );
}
