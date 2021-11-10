import React from 'react'
import { Content } from 'antd/lib/layout/layout'
import Cards from '../component/Cards'
import { Breadcrumb ,Row, Col } from 'antd';
import { Link } from 'react-router-dom';
function Blog() {
  const blogs = [
    {
      "id": 1,
      "title": "Post 1"
    },
    {
      "id": 2,
      "title": "Post 2"
    },
    {
      "id": 3,
      "title": "Post 3"
    }
  ];

    return (
        <div>
       
        <Content style={{ width:'85%', padding: '60px 0px 0px 0px' , margin: '24px 16px 0px 200px', overflow: 'initial' }}>
        <Breadcrumb>
    <Breadcrumb.Item>React Dashboard</Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to='/blog'> Blog </Link>
    </Breadcrumb.Item>
  
  </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <h1>Blog</h1>
          <Row justify="space-between">
          {
            blogs.map((blog) => 
            <Col span={6}>
            <Cards title={blog.title} />
            </Col>
            ) 
          }
          </Row>
          
        </div>
      </Content>
        </div>
    )
}

export default Blog
