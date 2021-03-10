const mongoose = require("mongoose");
const { Schema } = mongoose;

/*{
  _id: "6043f83213120c03e81c7515",
  name: "teste api",
  date_of_birth: "2021-03-07",
  gender: "male",
  email: "teste@email.com",
  cpf: "12345678910",
  start_date: "2021-03",
  team: "aaaa",
}*/

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other", "Prefer not to say"],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  team: {
    type: String,
    enum: ["", "Mobile", "Frontend", "Backend"],
    required: false,
  },
});

module.exports = mongoose.model("employee", employeeSchema);
