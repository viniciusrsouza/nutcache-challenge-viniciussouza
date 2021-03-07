const INIT = {
  employeeForm: false,
  deleteEmployee: false,
};

const actions = {
  TOGGLE_DIALOG: (_, { dialogs }) => dialogs,
};

export default function dialogs(state = INIT, action) {
  console.log(action);
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
