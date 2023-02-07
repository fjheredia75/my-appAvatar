import React from 'react';
import { Avatar, Card } from 'antd';
import Energia from './components/Avatar';
import Carou from './components/Carousel';
import Boton from './components/Boton';

const { Meta } = Card;

const App: React.FC = () => (
  <Card
    style={{ width: 420 }}
   
    actions={[
      <>
      <Carou/>
      <Boton/>
      </>
    ]}
  >
    <Meta
      avatar={<Avatar style={{width:110, height:110}}
     src="https://e7.pngegg.com/pngimages/518/82/png-clipart-iron-man-marvel-comics-marvel-iron-man-marvel-comics.png" />}
      title="Iron Man"
      description="Anthony Edward Stark"
    />
    <Energia/>
  </Card>
);

export default App;
