import React, { useState } from 'react';
import './App.css';
import WrappedMap from './components/gMap/Map';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import config from './components/gMap/config';
import useFetch from './hooks/useFetch';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const { data: paths } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/path');
  const { data: stops } = useFetch('https://61a4a0604c822c0017041d33.mockapi.io/shuttle/v1/stops');
  const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.mapsKey}`;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div className='row'>
            <div className='col-md-8'>
              {paths && stops ?
                <WrappedMap
                  paths={paths}
                  stops={stops}
                  googleMapURL={mapURL}
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={<div className='mapContainer' />}
                  mapElement={<div style={{ height: `100%` }} />}
                />
                :
                <Box sx={{ width: '100%' }}>
                  <LinearProgress />
                </Box>
              }
            </div>
            <div className='col-md-4'></div>
          </div>


        </Content>
      </Layout>
    </Layout>


  );
}

export default App;
