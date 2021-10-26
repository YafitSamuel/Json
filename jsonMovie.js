

const moviesJson = JSON.stringify({
  success: true,
  data: [
    {
      _id: "606d7d2c110a540674caa27a",
      movieName: "avatar",
      rating: 3,
      date: "2021-04-07T09:36:44.053Z",
      __v: 0,
    },
    {
      _id: "607828bcd9def60015535fcc",
      movieName: "spider_man",
      rating: 3,
      date: "2021-04-15T11:51:24.833Z",
      __v: 0,
    },
    {
      _id: "60815daa6b305d8dcd07c674",
      movieName: "princes",
      rating: 3,
      date: "2021-04-22T11:27:38.067Z",
      __v: 0,
    },
    {
      _id: "6122459bdbf6109484b6d2eb",
      movieName: "iron_men",
      rating: 4,
      date: "2021-08-22T12:39:55.115Z",
      __v: 0,
    },
    {
      _id: "612245fcbb593194fcda74d0",
      movieName: "shrek",
      rating: 3,
      date: "2021-08-22T12:41:32.969Z",
      __v: 0,
    },
  ],
});

// =====================================================================================================

function promiseFunction() {
  return new Promise((resolve, reject) => {
    let stringJson = JSON.parse(moviesJson);
    stringJson.success
      ? resolve(stringJson.success)
      : reject({ massage: "error" });
  });
}

async function functionPron() {
  try {
    return await promiseFunction();
  } catch (error) {
    return error;
  }
}

functionPron()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// =====================2===============

function functionPromise1() {
  return new Promise((resolve, reject) => {
    let obJson = JSON.parse(moviesJson);
    moviesJson.length > 0 ? resolve(obJson.data) : reject({ massage: "error" });
  });
}

async function asyncFunction1() {
  try {
    return await functionPromise1();
  } catch (error) {
    return error;
  }
}

asyncFunction1()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// ===================3===============

function getMoviePromise(movie) {
  return new Promise((resolve, reject) => {
    let movieChance = JSON.parse(moviesJson);
    for (const item of movieChance.data) {
      item.movieName == movie(resolve(item));
    }
    reject({ massage: "error" });
  });
}

async function getPromise() {
  try {
    return await getMoviePromise("avatar");
  } catch (error) {
    return error;
  }
}
getPromise()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// ===================4=================

function newPromise(id) {
  return new Promise((resolve, reject) => {
    let stringJson1 = JSON.parse(moviesJson);
    for (const item of stringJson1.data) {
      if (item._id == id) resolve(item);
    }
    reject({ massage: "err" });
  });
}

async function getPromiseId() {
  try {
    return await newPromise("607828bcd9def60015535fcc");
  } catch (error) {
    return error;
  }
}

getPromiseId()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// ===================5=================

function promiseFunction2(numOfOut) {
  return new Promise((resolve, reject) => {
    let stringJson11 = JSON.parse(moviesJson);
    let arrayMov = [];
    if (stringJson11.data.length > 0) {
      for (const item of stringJson11.data) {
        if (numOfOut < item.rating) arrayMov.push(item);
      }
    }
    arrayMov.length > 0
      ? resolve(arrayMov)
      : reject({ massage: "araay is empty" });
  });
}

async function promiseFunction22() {
  try {
    return await promiseFunction2(3);
  } catch (error) {
    return error;
  }
}
promiseFunction22()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });
