import React from 'react';
import { Breadcrumb, Radio, Layout, Menu, theme, Button, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import { CylinderPage } from './components/Cylinder/CylinderPage';
import { fields } from './values';
import MainPage from './components/Main/MainPage';
import PhotoEditorPage from './components/PhotoEditor/PhotoEditorPage';
const { Header, Content, Sider } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const custom = { color: "white", textAlign: "center" }

  return (
    <Layout>
      <Header style={{ backgroundColor: "DeepSkyBlue", height: "80px" }} className="header">
        <div className='logo'><Title level={2} style={custom}>LIMS "Petrolis"</Title></div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0', }} />
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider width={'auto'}>
            <Menu
              activeKey=''
              mode="inline"
              style={{ height: '100%'}}
              items={fields}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 700 }}>
            <Space >
              <Radio.Group style={{ padding: '10px 0' }} buttonStyle="solid">
                <Radio.Button value="a">Развёртка</Radio.Button>
                <Radio.Button value="b">Редактирование развёртки</Radio.Button>
                <Radio.Button value="c">3D визуализация</Radio.Button>
              </Radio.Group>
              <Button>
                Выгрузить отчёт
              </Button>
            </Space>

            {/* <CylinderPage /> */}
            <MainPage/>
            {/* <PhotoEditorPage/>  */}

          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default App;