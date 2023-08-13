import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Col, Divider, Input, Row, Space } from 'antd';

const style: React.CSSProperties = { background: '#eeeeee', padding: '8px 0' };
const rightSideStyle: React.CSSProperties = {maxHeight: "100vh", overflowY: "scroll"}

function App() {
  const [click, setClick] = useState(0);
  const [dblClick, setDblClick] = useState(0);
  const [changeValue, setChangeValue] = useState("")

  const [focusBlur, setFocusBlur] = useState(false);
  const [focusBlurQuestion, setFocusBlurQuestion] = useState(1);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const incrementWithOneClick = () => {
    setClick(click + 1);
  }

  const incrementWithDoubleClick = () => {
    setDblClick(dblClick + 1);
  }

  const getChangeValue = (e: any) => {
    setChangeValue(e.target.value);
  }

  const setFocusField = () => {
    setFocusBlurQuestion(focusBlurQuestion + 1)
    setFocusBlur(true)
  }

  const setBlurField = () => {
    setFocusBlur(false)
  }

  const submitForm = () => {
    setEmail("")
    setPassword("")
  }

  return (
    <div className="App">
      <Row>
        <Col className="gutter-row" span={12}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Event management
            </p>
          </header>
        </Col>

        <Col className="gutter-row" span={12} style={rightSideStyle}>
          <Divider orientation="left">onClick</Divider>
          <div style={style}>
            <Space wrap align='start' direction='vertical'>
              <Button type="primary" size={'large'} onClick={incrementWithOneClick}>
                onClick
              </Button>

              <span>Count: {click}</span>
            </Space>
          </div>

          <Divider orientation="left">ondblClick</Divider>
          <div style={style}>
            <Space wrap align='start' direction='vertical'>
              <Button type="primary" size={'large'} onDoubleClick={incrementWithDoubleClick}>
                ondblClick
              </Button>

              <span>Count: {dblClick}</span>
            </Space>
          </div>

          <Divider orientation="left">onChange</Divider>
          <div style={style}>
            <Space wrap align='start' direction='vertical'>
              <Input placeholder="Type..." size='large' onChange={(e) => getChangeValue(e)} />
              <span>Type to pass the input field value, here <br />{changeValue}</span>
            </Space>
          </div>

          <Divider orientation="left">onFocus/onBlur</Divider>
          <div style={style}>
            <Space wrap align='start' direction='vertical'>
              <Input placeholder="Which is your action?" size='large' onFocus={setFocusField} onBlur={setBlurField} />
              <span>
                {
                  focusBlurQuestion === 1 ? "You aren't focused or focused off the field" 
                  :(focusBlur ? "onFocus: You are focused on the field" : "onBlur: You focused off the field")
                }
              </span>
            </Space>
          </div>

          <Divider orientation="left">onSubmit</Divider>
          <div style={style}>
            <Space wrap align='start' direction='vertical'>
              <form action='' method="post" name='form' onSubmit={(e) => e.preventDefault()}>
                <Input placeholder="Your e-mail" type='email' name='email' size='large' onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Input placeholder="Your password" type='password' name='password' size='large' onChange={(e) => setPassword(e.target.value)} value={password}/>

                <Button type="primary" size={'large'} htmlType='submit' onClick={submitForm}>
                  Submit
                </Button>
              </form>
            </Space>
          </div>
        </Col>
      </Row>      
    </div>
  );
}

export default App;
