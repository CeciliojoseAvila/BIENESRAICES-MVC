import bcrypt from 'bcrypt'

const usuarios = [
  {
    nombre: "Cecilio",
    email: "cecilio@cecilio.com",
    confirmado: 1,
    password: bcrypt.hashSync("password", 10),
  },
];

export default usuarios