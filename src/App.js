import React, { useState } from 'react';
import './App.css';
import WrappedMap from './components/gMap/Map';
import { NotificationOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Button, Badge } from 'antd';
import config from './components/gMap/config';
import useFetch from './hooks/useFetch';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Card } from 'antd';
import AlertNotification from './components/Notification/AlertNotification';
import logo from "./assest/image/small_logo_sidebar.jpeg"

const { Header, Content, Footer, Sider } = Layout;

const items = [VideoCameraOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `Fire station ${index + 1}`,
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
        <div className="demo-logo-vertical">
          <div className="manage_logo">
            <img
              className="nav_logo-icon"
              src={logo}
              alt="Nextyn Logo"
            />
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
        <Header style={{ background: colorBgContainer }}>
          {/* Left Content or Logo can go here */}
          <div className='d-flex justify-content-end align-items-center'>
            <Button className='text-end me-4' type="primary" onClick={() => console.log('Add Fire Station Clicked')}>
              Add Fire Station
            </Button>
            <Badge dot>
              <NotificationOutlined
                style={{
                  fontSize: 16,
                }}
              />
            </Badge>
          </div>

        </Header>
        <Content style={{ margin: '10px 16px 0' }}>
          <div className='row'>
            <div className='col-md-6'>
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
            <div className='col-md-6 camera_card'>
              <div className='row'>
                <div className='col-md-4'>
                  <Card
                    title="Cam 1"
                    bordered={false}
                  // style={{
                  //   width: 300,
                  // }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/zLjRG-eq3vI?autoplay=1&controls=0&mute=1&modestbranding=1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Video 1"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </Card>

                </div>
                <div className='col-md-4'>
                  <Card
                    title="Cam 2  "
                    bordered={false}
                  // style={{
                  //   width: 300,
                  // }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/zLjRG-eq3vI?autoplay=1&controls=0&mute=1&modestbranding=1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Video 1"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </Card>
                </div>
                <div className='col-md-4'>
                  <Card
                    title="Cam 3"
                    bordered={false}
                  // style={{
                  //   width: 300,
                  // }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/zLjRG-eq3vI?autoplay=1&controls=0&mute=1&modestbranding=1"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Video 1"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </Card>
                </div>
              </div>

              <div className='mt-3'>
                <AlertNotification />
              </div>
            </div>

          </div>
        </Content>

      </Layout>
    </Layout>


  );
}

export default App;
