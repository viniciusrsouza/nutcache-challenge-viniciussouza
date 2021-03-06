const INIT = {
  employee: {
    name: "",
    date_of_birth: "",
    gender: "",
    email: "",
    cpf: "",
    start_date: "",
    team: "",
  },
  saving: false,
};

const actions = {
  ON_UPDATE_EMPLOYEE: (state, { employee }) => ({
    ...state,
    employee: employee,
  }),
  ON_FORM_SAVE: (_, { form }) => form,
};

export default function form(state = INIT, action) {
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
