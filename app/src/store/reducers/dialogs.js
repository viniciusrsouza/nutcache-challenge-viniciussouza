const INIT = {
  employeeForm: {
    visible: false,
    employee: null,
  },
  deleteEmployee: {
    visible: false,
    user: null,
  },
};

const actions = {
  TOGGLE_DIALOG: (_, { dialogs }) => dialogs,
};

export default function dialogs(state = INIT, action) {
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
