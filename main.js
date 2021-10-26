// let myUser = {
//   name: "yafit",
//   lastName: "samuel",
//   age: 25,
//   email: "yafit642@gmail.com",
// };

// let myUeserJson = JSON.stringify(myUser);
// console.log(myUeserJson);

// let movie = [
//   {
//     name: "yafit",
//     ctorey: "action",
//     year: 1125,
//   },
//   {
//     name: "matan",
//     ctorey: "drama",
//     year: 1125,
//   },
// ];

// let myUeserJson2 = JSON.stringify(movie);
// console.log(myUeserJson2);

// let dogs = [
//   {
//     name: "rex",
//     breed: "boldog",
//     age: 2,
//   },
//   {
//     name: "chip",
//     breed: "pincher",
//     age: 7,
//   },
//   {
//     name: "bob",
//     breed: "lavrodor",
//     age: 5,
//   },
// ];

// function dogsPorimes() {
//   return new Promise((resolve, reject) => {
//     let myDogJson3 = JSON.stringify(dogs);
//     if (dogs.length > 0) {
//       resolve(myDogJson3);
//     } else {
//       reject({ massage: "array ia empty" });
//     }
//   });
// }
// async function getDog() {
//   try {
//     return await dogsPorimes();
//   } catch (error) {
//     return error;
//   }
// }

// getDog()
//   .then((res) => {
//     console.log(JSON.parse(res));
//   })
//   .catch((rej) => {});