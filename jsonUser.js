const user = JSON.stringify([
  {
    _id: "605acace4ab389d8ed54c496",
    age: 35,
    name: {
      last: "Hensley",
      first: "Dollie",
    },
    email: "dollie.hensley@undefined.org",
    index: 0,
    phone: "+1 (904) 421-3160",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceed1f0e1cfa1eee67",
    age: 21,
    name: {
      last: "Hunt",
      first: "Dolores",
    },
    email: "dolores.hunt@undefined.com",
    index: 1,
    phone: "+1 (967) 432-2905",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acacefedd0fe77874d78f",
    age: 28,
    name: {
      last: "Pennington",
      first: "Milagros",
    },
    email: "milagros.pennington@undefined.net",
    index: 2,
    phone: "+1 (922) 492-2085",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace6d3f84fc9b40849f",
    age: 32,
    name: {
      last: "Anderson",
      first: "Myrtle",
    },
    email: "myrtle.anderson@undefined.biz",
    index: 3,
    phone: "+1 (858) 404-3273",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace06d24518b6419d23",
    age: 29,
    name: {
      last: "York",
      first: "Terry",
    },
    email: "terry.york@undefined.co.uk",
    index: 4,
    phone: "+1 (816) 492-3475",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace46f0669738455d6b",
    age: 38,
    name: {
      last: "Bridges",
      first: "Effie",
    },
    email: "effie.bridges@undefined.info",
    index: 5,
    phone: "+1 (856) 423-3786",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace5ab5217354268532",
    age: 26,
    name: {
      last: "Walter",
      first: "Krista",
    },
    email: "krista.walter@undefined.me",
    index: 6,
    phone: "+1 (849) 513-2888",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaced68677a5dca08a9b",
    age: 20,
    name: {
      last: "Buchanan",
      first: "Gomez",
    },
    email: "gomez.buchanan@undefined.biz",
    index: 7,
    phone: "+1 (888) 494-2462",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acaceb7ece55cb38e546a",
    age: 20,
    name: {
      last: "Potter",
      first: "Caitlin",
    },
    email: "caitlin.potter@undefined.io",
    index: 8,
    phone: "+1 (801) 514-3055",
    picture: "http://placehold.it/32x32",
  },
  {
    _id: "605acace98de45687c4c6279",
    age: 26,
    name: {
      last: "Dillon",
      first: "Guzman",
    },
    email: "guzman.dillon@undefined.ca",
    index: 9,
    phone: "+1 (857) 407-2403",
    picture: "http://placehold.it/32x32",
  },
]);

// =======================1=======================
function getUserJsonPommies() {
  return new Promise((resolve, reject) => {
    let newUser = JSON.parse(user);
    newUser.length > 0 ? resolve(newUser) : reject({ massage: "error" });
  });
}

async function asyncFunctionUser() {
  try {
    return await getUserJsonPommies();
  } catch (error) {
    return error;
  }
}

asyncFunctionUser()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

//   =======================2=======================

function getIdFromUser(idUser) {
  return new Promise((resolve, reject) => {
    let oneUser = JSON.parse(user);
    for (const item of oneUser) {
      if (item._id == idUser) resolve(item);
    }
    return reject({ massage: "error" });
  });
}

async function asyncFunctionUserId() {
  try {
    return await getIdFromUser("605acacefedd0fe77874d78f");
  } catch (error) {
    return error;
  }
}
asyncFunctionUserId()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

//   =======================3=======================

function getEmailFromUser(emailUser) {
  return new Promise((resolve, reject) => {
    let oneUser = JSON.parse(user);
    for (const item of oneUser) {
      if (item.email == emailUser) resolve(item);
    }
    return reject({ massage: "error" });
  });
}

async function asyncFunctionUserEmail() {
  try {
    return await getEmailFromUser("gomez.buchanan@undefined.biz");
  } catch (error) {
    return error;
  }
}
asyncFunctionUserEmail()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// =======================4=======================
// 4.	צרו פונקצית פרומיס שמחזירה מערך של
//  משתמשים שהגיל שלהם גבוה ממספר שמתקבל מבחוץ, במידה וישנם משתמשים.
// אם אין משתמשים, היא מחזירה אובייקט של שגיאה, שמודיע שאין משתמשים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאות.

function getArrayUsers(num) {
  let firstUser = JSON.parse(user);
  return new Promise((resolve, reject) => {
    for (const item of firstUser) {
      if (item.age > num) resolve(item);
    }
    return reject({ massage: "error" });
  });
}

async function asyncGetArrayUsers() {
  try {
    return await getArrayUsers(4);
  } catch (error) {
    return error;
  }
}
asyncGetArrayUsers()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// =======================5=======================
// 5.	צרו פונקצית פרומיס שמחזירה מערך של משתמשים שהשם
//  הפרטי שלהם זהה לשם שמתקבל מבחוץ, במידה וישנם משתמשים.
// אם אין משתמשים, היא מחזירה אובייקט של שגיאה, שמודיע שאין משתמשים.
// צרו פונקציה אסיכרונית שקוראת לפרומיס ומחזירה את התוצאות.

function promiseGetArrayUsers(nameFromOut) {
  return new Promise((resolve, reject) => {
    let sconcedUser = JSON.parse(user);
    for (const itemUser of sconcedUser) {
      itemUser.name.last == nameFromOut
        ? resolve(itemUser)
        : reject({ massage: "error" });
    }
  });
}
async function asyncPromiseGetArrayUsers() {
  try {
    return await promiseGetArrayUsers("Hensley");
  } catch (error) {
    return error;
  }
}
asyncPromiseGetArrayUsers()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
// =======================6=======================

function loadingGif() {
  shimi.innerHTML = `<img id="img" src="./image/990.gif">`;
}

function stopLoadingGif() {
  img.style.display = "none";
}

function showInScreen(objUser) {
  for (const key in objUser) {
    shimi.innerHTML += `<p>${key}: ${objUser[key]}</p> `;
  }
}
 function showError(){
  pi.innerHTML += `<p> ${rej.massage}</p>`;
 }

btn.onclick = () => {
  loadingGif();
  setTimeout(() => {
    switch (select.value) {
      case "id":
        getIdFromUser(inp.value)
          .then((res) => {
            showInScreen(res);
          })
          .catch((rej) => {
            showError();
          })
          .finally(() => {
            stopLoadingGif();
          });

        break;
      case "name":
        promiseGetArrayUsers(inp.value)
          .then((res) => {
            showInScreen(res);
          })
          .catch((rej) => {
            showError();
          })
          .finally(() => {
            stopLoadingGif();
          });

        break;
      case "email":
        getEmailFromUser(inp.value)
          .then((res) => {
            showInScreen(res);
          })
          .catch((rej) => {
            showError();
          })
          .finally(() => {
            stopLoadingGif();
          });

        break;

      default:
        console.log("not found");
        break;
    }
  }, 3000);
};
