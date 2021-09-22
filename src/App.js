import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Shop from './components/product.js';
import Listen from './components/listen.js';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

class App extends React.Component {
  render() {
    return (
      <Router>
 <Layout style={{background:'#FFDAB9'}}>
      <Header style={{background:'#CD853F'}}>
        <Text style={{fontFamily:'Fantasy', color:'#FFFFFF', fontSize: '30px'}}>
        ERIGO STORE
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px', fontFamily:'Roboto',fontSize: '20px', color:'#FFFFFF'}}>PRODUCT</Link>
          <Link to="/listen" style={{margin:'8px', fontFamily:'Roboto',fontSize: '20px', color:'#FFFFFF'}}>LISTEN</Link>
        </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inline-block'}}>
      <Switch>
      <Route path="/" exact component={Shop} />
      <Route path="/listen" exact component={Listen} />
      </Switch>
      </Content>
      <Footer style={{background:'#CD853F', fontSize: '20px', textAlign:'center', width:'100%', fontFamily:'Roboto', color:'#FFFFFF'}}>
          KELOMPOK 31 - Azzah - Caerel
        </Footer>
    </Layout>
    </Router>
    )
  }
}
export default App;