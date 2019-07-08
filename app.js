//Функции высшего порядка. Задачи.
//task 1
function processArray(arr, handler) {
  let resString = "New value: ";
  for (i = 0; i < arr.length; i++) {
    resString += handler(arr[i]);
  }
  console.log(resString);
  return resString;
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
      return console.log(false);
    }
  }
  return console.log(true);
}

customEvery([10, 0, 6], function(el, index, arr) {
  return el > 5;
});

//Деструктурирующее присваивание. Задачи.
//task 1
function func1() {
   const [num1, ...others] = [...arguments];
   console.log(num1, others);
   return num1, others;
}

func1(10, 54, 9, 0)

//task 2
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
  console.log(`Name: ${name}`);
  console.log(`Partners: ${partner1}, ${partner2}`);
}

getInfo(organisation);

//Функции стрелки. Задачи.
//task 1
const sum = () => {
  const params = Array.prototype.slice.call(arguments);
  if (!params.length) return 0;
  return params.reduce((prev, next) => prev + next);
};
