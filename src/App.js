import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#1c548d';
      showAlert('Dark mode has been enabled', 'success');
      // setInterval(() => {
      //   document.title = 'Text Utils- Dark mode';
      // }, 2000);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'Text Utils- Light mode';
    }
  };

  return (
    <div>
      {/* <Router> */}
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className='container my-3'>
        {/* <Routes>
            <Route exact path='/about' element={<About />}></Route> */}
        {/* <Route
              exact
              path='/'
              element={ */}
        <TextForm
          heading='Enter text to analyze'
          mode={mode}
          showAlert={showAlert}
        />
        {/* }
            ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;
