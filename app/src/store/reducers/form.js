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
  saving: false,
};

const actions = {
  ON_UPDATE_EMPLOYEE: (state, { employee }) => ({
    ...state,
    employee: employee,
  }),
  ON_FORM_SAVE: (_, { form }) => {
    if (!form.saving) {
      return INIT;
    } else return form;
  },
  RESET_EMPLOYEE: (state, _) => {
    return { ...state, employee: INIT.employee };
  },
};

export default function form(state = INIT, action) {
  const callback = actions[action.type];
  if (callback) return callback(state, action);
  return state;
}
