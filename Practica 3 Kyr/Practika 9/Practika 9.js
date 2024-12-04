let user = {
  name: "Джон",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi();
let Sims = {
  name: "Дмитрий Смирнов",
  address: "ул. Исаковского, дом 6",
  phone: "+7 (999) 999-99-99",
  email: "Hostg7609@gmail.com",
  orderHistory: [] 
 };
 
 console.log(Sims.name); 
 console.log(Sims.address); 
 console.log(Sims.phone); 
 let children = {
  name: "Дмитрий",
  isAdmin: false
 };
 let Rust = {
userID: 1,
ZAKAZ: 2,
items: ["Berdanka","Uoka"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "Mag",
  address:"Бутово"
 };
 if (Rust.status === "Ожидание") {
  console.log(`Заказ ${Rust.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Дмитрий");
 const member2 = new GroupMember("Елисей");
 const member3 = new GroupMember("Кирилл");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующем курсе: ${this.courses.join(', ')}`);
  };
 }
 
 const addCreep = new Student("Дмитрий", "ИСП-309", ["Web-Разработка"]);
 
 addCreep.sayHi(); 
 addCreep.showCourses();