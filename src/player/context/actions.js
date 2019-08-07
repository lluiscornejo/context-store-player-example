import { createAction } from '@Common/utils/context';

export const play = createAction('play', () => () => ({ playing: true }));

export const pause = createAction('pause', () => () => ({ playing: false }));

export const togglePlay = createAction('togglePlay', state => () => ({
  playing: !state.playing,
}));
