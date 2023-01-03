import React from 'react';
import './App.css';
import {action,trending,romantic,documentaries,horror,comedy} from './urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={trending} title="Trending"/>
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romantic} title="Romantic" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
