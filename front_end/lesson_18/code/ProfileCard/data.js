// Экспортировать нужно то что вы хотите потом импортировать в другом файле, т.е то что должно выходить наружу файла
// 1. Экспорт данных напрямую
// export const profile = {
//   src: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
//   firstName: "Homer",
//   lastName: "Simpson",
//   career: "Nuclear Safety Inspector",
//   hairColor: "Black",
//   hobby: "Drink beer Duff",
// };

// export const normalizeFirstLastName = () => {
//   return `${profile.firstName} ${profile.lastName}`;
// };

// 2. Экспорт напрямую, но все вместе, что вы хотите экспортировать - это альтернатива первому способу
const profile = {
  src: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  firstName: "Homer",
  lastName: "Simpson",
  career: "Nuclear Safety Inspector",
  hairColor: "Black",
  hobby: "Drink beer Duff",
};

const normalizeFirstLastName = () => {
  return `${profile.firstName} ${profile.lastName}`;
};

export default normalizeFirstLastName;

export {profile};