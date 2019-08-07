import React, { useState, useRef, useEffect } from 'react';
import { initialState, selectPlaying } from '@Player/context/reducer';
import { useStateValue } from '@Player/hooks/useStateContext';

const AgilePlayer = () => {
  const playerRef = useRef(null);
  const [state] = useStateValue();
  const [url, setUrl] = useState(initialState.source);

  useEffect(() => {
    if (state.source !== url) {
      // playerRef.current.load();
      console.log('loaded');
    }
    if (state.playing) {
      playerRef.current.play();
      console.log('play');
    } else {
      playerRef.current.pause();
    }
  }, [state]);

  return (
    <div>
      <video ref={playerRef} width="320" height="240" controls>
        <source src={url} />
        Your browser does not support the video tag.
      </video>
      <p>----</p>
    </div>
  );
};

export default AgilePlayer;
