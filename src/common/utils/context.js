export const extractActions = ([state, dispatch], actions) => {
  return Object.keys(actions).reduce((acc, actionName) => {
    const action = actions[actionName];
    return {
      ...acc,
      [actionName]: (...args) => dispatch(action(state)(...args)),
    };
  }, {});
};

export const createReducer = reducers => (state, action) => reducers[action.type](state, action);

export const createAction = (type, action) => {
  const actionCreator = state => (...args) => ({
    type,
    payload: action(state)(...args),
  });

  actionCreator.toString = () => type;
  return actionCreator;
};
