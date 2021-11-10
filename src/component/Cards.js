import React from 'react'
import { Card, Avatar  } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
function Cards(props) {
  function deleteClick() {
    console.log('dlete');
  }
    return (
        <Card  
        id={props.id}
        hoverable
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" onClick={deleteClick} />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={props.title}
          
          description="This is the description"
        />
      </Card>
    )
}

export default Cards

