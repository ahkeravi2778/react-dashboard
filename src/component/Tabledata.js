import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';
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
        <Link to='/'> Invite {record.lastName}</Link>
        <Link to='/'> Delete</Link>
      </Space>
    )}
  />
</Table> 
  )
}

export default Tabledata
