import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import Main from '../pages/Main'
function Contentsection() {
    return (
        <div>
        <Content style={{ width:'85%', padding: '60px 0px 0px 0px' , margin: '24px 16px 0px 200px', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <Main></Main>
        </div>
      </Content>
        </div>
    )
}

export default Contentsection
