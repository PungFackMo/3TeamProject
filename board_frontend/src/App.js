// import './App.css';

import React from 'react';
import InquiryList from './components/InquiryList';
import InquiryForm from './components/InquiryForm';
import NoticeList from './components/NoticeList';
import NoticeForm from './components/NoticeForm';

function App() {


  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/inquiries"></Link></li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default App;
