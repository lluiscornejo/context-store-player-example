import { play, pause, togglePlay } from '@Player/context/actions';
import { createReducer } from '@Common/utils/context';

export const initialState = {
  playing: false,
  source: 'http://techslides.com/demos/sample-videos/small.mp4',
};

export const reducer = createReducer({
  [play]: (state, action) => ({ ...state, ...action.payload }),
  [pause]: (state, action) => ({ ...state, ...action.payload }),
  [togglePlay]: (state, action) => ({ ...state, ...action.payload }),
});

export const selectPlaying = ({ playing }) => playing;
