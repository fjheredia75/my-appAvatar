import React, { useState } from 'react';
import { Avatar, Button } from 'antd';

const UserList = ['U', 'Anthony', 'Edward', 'Stark'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];

const Superpoder: React.FC = () => {

  
  return (
    <>
      
      <Button
        size="small"
        style={{ margin: '0 10px', verticalAlign: 'middle', left:85 }}>
        habilidad #1
      </Button>
      <Button 
      size="small" 
      style={{ verticalAlign: 'middle', left:82 }}>
      habilidad #2
      </Button>
      <Button
        size="small"
        style={{ margin: '0 10px', verticalAlign: 'middle', left:80 }}>
        habilidad #3
      </Button>
    </>
  );
};

export default Superpoder;