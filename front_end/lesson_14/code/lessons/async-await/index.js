// Async/await
const timer = 2000;

// Имитация запроса по сети
const promise = new Promise((resolve, reject) => {
  const user = {
    firstName: "John",
    lastName: "Johnson",
    age: 32,
  };

  if (timer > 3000) {
    reject("Error");
  } else {
    setTimeout(() => {
      resolve(user);
    }, 2000);
  }
});

const getUserData = async () => {
  try {
    const result = await promise;

    console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Выпонится в любом случае");
  }
};

getUserData();
