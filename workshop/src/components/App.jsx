import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const App = () => {
  const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "PnpkimJ5mrZRe"];
  const [selectedId, setSelectedID] = useState("kHrKpJiCbOmkWD4xT9");
  const [gifIds, setGifIds] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY","PnpkimJ5mrZRe" ])
  return (
    <div className="left-scene">
      <SearchBar />
      <div className="selected-gif">
      <Gif />
      </div>
      <div className="divright-scene">

      </div>
    </div>
  );
};

export default App;
