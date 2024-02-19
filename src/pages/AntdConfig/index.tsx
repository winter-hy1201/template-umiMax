import { Layout, Space, Switch, theme, version } from 'antd';
import { useAntdConfig, useAntdConfigSetter } from 'umi';
const { darkAlgorithm, defaultAlgorithm, useToken } = theme;

export default function Page() {
  const setAntdConfig = useAntdConfigSetter();
  const antdConfig = useAntdConfig();

  const { token } = useToken();

  return (
    <Layout>
      <h1
        style={{
          color: token.colorPrimary,
        }}
      >
        with antd@{version}
      </h1>
      <Space>
        <h1
          style={{
            color: token.colorPrimary,
          }}
        >
          isDarkTheme
        </h1>
        <Switch
          checked={antdConfig?.theme?.algorithm.includes(darkAlgorithm)}
          onChange={(data) => {
            // 此配置会与原配置深合并
            setAntdConfig({
              theme: {
                algorithm: [data ? darkAlgorithm : defaultAlgorithm],
                token: {
                  // Seed Token，影响范围大
                  colorPrimary: data ? '#00b96b' : '#1890ff',

                  // // 派生变量，影响范围小
                  // colorBgContainer: '#f6ffed',
                },
              },
            });
            // or
            // setAntdConfig((config) => {
            //   const algorithm = config.theme!.algorithm as MappingAlgorithm[];
            //   if (algorithm.includes(darkAlgorithm)) {
            //     config.theme!.algorithm = [defaultAlgorithm];
            //   } else {
            //     config.theme!.algorithm = [darkAlgorithm];
            //   }
            //   return config;
            // });
          }}
        ></Switch>
      </Space>
    </Layout>
  );
}
