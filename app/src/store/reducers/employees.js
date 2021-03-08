const INIT = { list: null };

const actions = {
  REFRESH_EMPLOYEES: (_, { employees }) => employees,
};

export default function form(state = INIT, action) {
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
