//Функции высшего порядка. Задачи.
//task 1
function processArray(arr, handler) {
  let resString = "New value: ";
  for (i = 0; i < arr.length; i++) {
    resString += handler(arr[i]);
  }
  return resString.slice(0, -1);
}

processArray(["my", "name", "is", "Trinity"], function(el) {
  return el.charAt(0).toUpperCase() + el.slice(1);
});

processArray([10, 20, 30], function(el) {
  return el * 10 + ",";
});

processArray([{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }], function(
  el
) {
  return el.name + " is " + el.age + ",";
});

processArray(["abc", "123"], function(el) {
  return (
    el
      .split("")
      .reverse()
      .join("") + ","
  );
});

//task 2
function customEvery(arr, handler) {
  if (!Array.isArray(arr)) {
    console.error("First argument should be array");
    return [];
  }
  if (typeof handler !== "function") {
    return console.error("Second argument should be fucntion");
  }
  for (let i = 0; i < arr.length; i++) {
    let res = handler(arr[i], i, arr);
    if (!res) {
      return false;
    }
  }
  return true;
}

customEvery([10, 0, 6], function(el, index, arr) {
  return el > 5;
});

//Деструктурирующее присваивание. Задачи.
//task 3
function func1(...args) {
  const [num1, ...others] = args;
  const obj = {
    first: num1,
    other: others
  };
  console.log(obj);
  return obj;
}

func1(10, 54, 9, 0);

//task 4
const organisation = {
  name: "Google",
  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"]
  }
};

function getInfo(obj) {
  const {
    name = "Unknown",
    info: {
      partners: [partner1, partner2]
    }
  } = obj;
  let nameStr = `Name: ${name}`;
  let partnersStr = `Partners: ${partner1}, ${partner2}`;
  console.log(nameStr);
  console.log(partnersStr);

  return nameStr, partnersStr;
}

getInfo(organisation);

//Функции стрелки. Задачи.
//task 5
const sum = (...args) => {
  const params = Array.prototype.slice.call(args);
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
};
console.log(sum);
