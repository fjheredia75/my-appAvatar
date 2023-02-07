import React from 'react';
import { Button, Space } from 'antd';

const Boton: React.FC = () => (
  <Space wrap>
    <Button  style={{height:45, width:130, top:12, right:30}}>Descartar</Button>
    <Button style={{height:40, width:130, top:12, left:22}} type="primary">Usar</Button>
    
  </Space>
);

export default Boton;