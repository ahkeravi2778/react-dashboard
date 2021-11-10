import React from 'react'
import { Header } from 'antd/lib/layout/layout'
import Logo from '../logo.png'
function Headernav() {
    return (
        <div>
            <Header className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, top:0}} >
            <div className="logo" >
                <img width="25px" src={Logo} />
            </div>
            </Header>
        </div>
    )
}

export default Headernav
