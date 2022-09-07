import React from 'react';
import Gif form './Gif';

const GifList = (props) => {
  const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "PnpkimJ5mrZRe" ];
  return (
    <div className="gif-list">
    { gifIds.map(gifId) => <Gif gifId={gifId} key={gifID} />) }
    </div>
  );
};

export default GifList;

/* <img src="https://media.giphy.com/media/gG6OcTSRWaSis/giphy.gif" alt="gif" /> */
