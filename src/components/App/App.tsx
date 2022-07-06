import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useSubmitHandler from '../../hooks/useSubmitHandler';
import { HomePage, UserProfile } from '../../pages';

import './App.scss';
import { useSetResponse } from '../../hooks/useSetResponse';

// https://api.github.com

function App() {
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);
  const { onSubmitHandler } = useSubmitHandler({ value, setUsers });

  useSetResponse('https://api.github.com/users', setUsers);

  return (
    <div className="App">
      <h1 className="App__title">GitHub Searcher</h1>
      <form onSubmit={onSubmitHandler}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage users={users} setValue={setValue} />} />
            <Route path="/user/:login" element={<UserProfile />} />
          </Routes>
        </Router>
      </form>
    </div>
  );
}

export default App;
