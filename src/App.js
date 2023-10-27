import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import React from 'react';
import FormAddTask from './components/addTask';
import ListTasks from './components/listTask';
import TrangChu from './pages/Home';
import store from './store';
import { Provider } from 'react-redux';
function App() {
    return (
      <>
      <Provider store={store}>
        <Routes>
          <Route path="/demo" element={<TrangChu/>}/>
        </Routes>
      </Provider>
      </>
    );
  }
export default App;
