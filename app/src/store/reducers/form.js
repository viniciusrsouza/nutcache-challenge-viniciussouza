const INIT = {
  employee: {
    _id: null,
    name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    cpf: "",
    start_date: "",
    team: "",
  },
};

const actions = {
  ON_UPDATE_EMPLOYEE: (state, { employee }) => ({
    ...state,
    employee: employee,
  }),
  ON_FORM_SAVE: () => ({
    employee: {
      _id: null,
      name: "",
      date_of_birth: "",
      gender: "",
      email: "",
      cpf: "",
      start_date: "",
      team: "",
    },
  }),
};

export default function form(state = INIT, action) {
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
