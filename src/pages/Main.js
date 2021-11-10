import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import { Badge, Row, Col, Card , Alert, Button} from 'antd'
import Tabledata from '../component/Tabledata'
import Calenderwidget from '../component/Calenderwidget'
const style = { background: '#0092ff', padding: '8px 0' };
function Main() {
    return (
        <div>
        <Content style={{   margin: '24px 16px 0px 200px', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 10, textAlign: 'center' }}>
        <Row>
          <Col span={24} style={{padding : 20}}>
          <Alert
      message="Welcome to React Dashboard"
      type="success"
      showIcon
      action={
        <Button size="small" type="text">
          UNDO
        </Button>
      }
      closable
    />
          </Col>
        </Row>
         <Row justify="center" gutter={[10, 12]}>
            <Col span={6} >
              <Badge.Ribbon text="Users">
      <Card title="12.000" size="small">
        All over the World Users
      </Card>
    </Badge.Ribbon>
            </Col>
            <Col span={6} >
              <Badge.Ribbon text="Blogs" color="pink">
      <Card title="65.000" size="small">
        All blogs from users
      </Card>
    </Badge.Ribbon>
            </Col>
            <Col span={6} >
              <Badge.Ribbon text="Leads" color="purple">
      <Card title="45.000" size="small" >
       Leads 
      </Card>
    </Badge.Ribbon>
            </Col>
            <Col span={6} >
              <Badge.Ribbon text="Clients" color="green">
      <Card title="200" size="small">
        Happy Clients
      </Card>
    </Badge.Ribbon>
            </Col>
           
        </Row>
      
      <Row justify="space-between" gutter={[10, 12]} style={{padding:'20px 0px'}} >
      <Col  span={14}>
        <div>  <Tabledata></Tabledata></div>
      </Col>
      <Col  span={10}>
        <div style={style}>
          <Calenderwidget></Calenderwidget>
        </div>
      </Col>
      
    </Row>
    </div>
      </Content>
        </div>
    )
}

export default Main
