let obj = {
  name: "name"
};

function objFun() {
  return obj;
}
let obj1 = objFun();
let obj2 = objFun();

obj1.name = "zhang";
obj.name = "liu";
obj2.name = "wang";
console.log(obj1.name, obj2.name);

function person() {
  return {
    name: "name"
  };
}

let person1 = person();
let person2 = person();

person1.name = "zhang";
console.log(person1.name, person2.name);
