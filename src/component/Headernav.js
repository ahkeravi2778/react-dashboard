import React from 'react'
import { Header } from 'antd/lib/layout/layout'
import Logo from '../logo.png'
import { Row, Col } from 'antd'
function Headernav() {
    return (
        <div>
            <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, top:0}} >
            
            <Row justify="center">
      <Col className="gutter-row" span={4}>
      <div className="logo" >
                <img alt="Logo" width="50px" src={Logo} />
            </div>
      </Col>
      <Col className="gutter-row" span={20}>
        <div >col-6</div>
     </Col>
    </Row>
            </Header>
        </div>
    )
}

export default Headernav
