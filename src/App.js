import React from 'react';
import './index.css';
import './App.css';
import { Card } from 'antd';
import { Row, Col} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
// import { blue } from '@ant-design/colors';
// console.log(blue);

const { Meta } = Card;

const App = () => {
  return (
    <Row 
    align='bottom' 
    justify="center"
    >
    <Col 
      style={{
        padding: '200px 0 0',
      }}
    >
    <Card
      
    style={{
      width: 400,
      height: '100%',
      // padding: '24px 0 0',
    }}
  >
    <div class="flex-container">
      <Meta>
        <p>wadd</p>
      </Meta>  
    </div>
    </Card>
    </Col>
  </Row>
    
  );
  
        };
export default App;