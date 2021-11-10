import { Table, Tag, Space } from 'antd';
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;
const { Column } = Table;

const data = [
  {
    key: '1',
    name: 'John',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '5',
    name: 'Joe',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

  
function Tabledata() {
  function showPromiseConfirm() {
    confirm({
      centered : true,
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleOutlined />,
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }
  return ( 
  <Table dataSource={data}>
   <Column title="Name" dataIndex="name" key="name" />
  <Column title="Age" dataIndex="age" key="age" />
  <Column title="Address" dataIndex="address" key="address" />
  <Column
    title="Tags"
    dataIndex="tags"
    key="tags"
    render={tags => (
      <>
        {tags.map(tag => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    )}
  />
  <Column
    title="Action"
    key="action"
    render={(text, record) => (
      <Space size="middle">
        <Button onClick={showPromiseConfirm} type="danger" shape="circle" icon={<DeleteOutlined />} />
        
      </Space>
    )}
  />
</Table> 
  )
}

export default Tabledata
