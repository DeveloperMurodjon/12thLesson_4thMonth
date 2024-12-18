// 1-10: Obyektlarni tanlash va chiqarish
// Masala: Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.
//  Massiv holati:

let people = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];
console.log(people[0].name);
// Natija: "Ali"

// Masala: Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.
//  Massiv holati:

let items = [{ id: 101 }, { id: 102 }, { id: 103 }, { id: 104 }, { id: 105 }];
console.log(items[items.length - 1].id);
// Natija: 105

// Masala: 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.
//  Massiv holati:

let people1 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
  { name: "Karim", age: 35 },
];
people1.forEach((person) => {
  console.log(person.age);
});
// Natija: 25, 30, 20, 35

// Masala: 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.
//  Massiv holati:

let users = [
  { name: "Ali", city: "Toshkent" },
  { name: "Vali", city: "Samarqand" },
  { name: "Sami", city: "Buxoro" },
];
console.log(users[1].city);
// Natija: "Samarqand"

// Masala: Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.
//  Massiv holati:

let workers = [
  { name: "Ali", job: "Dasturchi" },
  { name: "Vali", job: "O'qituvchi" },
  { name: "Sami", job: "Haydovchi" },
];
workers.forEach((worker) => {
  console.log(worker.job);
});
// Natija: "Dasturchi", "O'qituvchi", "Haydovchi"

// Masala: 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.
//  Massiv holati:

let employees = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
  { name: "Karim", salary: 1500 },
  { name: "Asad", salary: 1100 },
];
console.log(employees[2].salary);
// Natija: 900

// Masala: 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.
//  Massiv holati:
let countries = [
  { country: "Uzbekistan" },
  { country: "Russia" },
  { country: "USA" },
  { country: "China" },
];
console.log(countries[0].country);
// Natija: "Uzbekistan"

// Masala: 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.
//  Massiv holati:
let orders = [
  { id: 1, status: "New" },
  { id: 2, status: "Pending" },
  { id: 3, status: "Shipped" },
  { id: 4, status: "Delivered" },
  { id: 5, status: "Cancelled" },
  { id: 6, status: "Returned" },
];
console.log(orders[4].status);
// Natija: "Cancelled"

// Masala: 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.
//  Massiv holati:

let contacts = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
];
console.log(contacts[2].phone);
// Natija: "998903456789"

// Masala: 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.
//  Massiv holati:
let users1 = [
  { name: "Ali", email: "ali@gmail.com" },
  { name: "Vali", email: "vali@yahoo.com" },
  { name: "Sami", email: "sami@hotmail.com" },
  { name: "Karim", email: "karim@outlook.com" },
];
users1.forEach((user) => {
  console.log(user.email);
});
// Natija: "ali@gmail.com", "vali@yahoo.com", "sami@hotmail.com", "karim@outlook.com"

// 11-20: Obyektlar qiymatini o'zgartirish
// Masala: Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.
//  Massiv holati:
let users2 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];
users2[0].name = `Alisher`;
console.log(users2[0]);
// O'zgartirilgandan keyin: users[0].name = "Alisher"

// Masala: Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.
//  Massiv holati:
let tasks = [
  { id: 1, status: "New" },
  { id: 2, status: "In Progress" },
  { id: 3, status: "Pending" },
];
tasks[tasks.length - 1].status = `Updated`;
console.log(tasks[2]);
// O'zgartirilgandan keyin: tasks[2].status = "Updated"

// Masala: 3-obyektning salary qiymatini 2000 ga tenglashtiring.
//  Massiv holati:
let employees1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 1500 },
];
employees[2].salary = 2000;
console.log(employees[2].salary);
// O'zgartirilgandan keyin: employees[2].salary = 2000

// Masala: Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.
//  Massiv holati:
let cities = [
  { id: 1, city: "Toshkent" },
  { id: 2, city: "Namangan" },
  { id: 3, city: "Samarqand" },
];
cities[1].city = "Farg'ona";
console.log(cities[1].city);
// O'zgartirilgandan keyin: cities[1].city = "Farg'ona"

// Masala: 4-obyektning email qiymatini yangi qiymat bilan almashtiring.
//  Massiv holati:
let clients = [
  { name: "Ali", email: "ali@mail.com" },
  { name: "Vali", email: "vali@mail.com" },
  { name: "Sami", email: "sami@mail.com" },
  { name: "Karim", email: "karim@mail.com" },
];
clients[3].email = "karim_new@mail.com";
console.log(clients[3].email);
// O'zgartirilgandan keyin: clients[3].email = "karim_new@mail.com"

// Albatta, davom ettiraman. Quyida massivlar ichida obyektlar bilan ishlash uchun masalalar sekin-asta qiyinlashib boradigan tarzda tuzilgan.
// 21-30: Yangi maydon qo'shish va qiymatni yangilash
// Masala: Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.
//  Massiv holati:
let users3 = [
  { name: "Ali", age: 25 },
  { name: "Vali", age: 30 },
  { name: "Sami", age: 20 },
];
users3[0].status = "active";
console.log(users3[0]);

// Masala: Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.
//  Massiv holati:
let people3 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];
people3[2].role = "admin";
console.log(people3);

// Masala: Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.
//  Massiv holati:
let users4 = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];
users4.forEach((user) => {
  user.isVerified = false;
});
console.log(users4);
// Har bir obyekt uchun: users[i].isVerified = false

// Masala: 2-obyektning salary qiymatini 500 ga oshiring.
//  Massiv holati:
let workers1 = [
  { name: "Ali", salary: 1000 },
  { name: "Vali", salary: 1200 },
  { name: "Sami", salary: 900 },
];
workers1[1].salary += 500;
console.log(workers1[1].salary);
// workers[1].salary += 500

// Masala: 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.
//  Massiv holati:
let contacts1 = [
  { name: "Ali", phone: "998901234567" },
  { name: "Vali", phone: "998902345678" },
  { name: "Sami", phone: "998903456789" },
  { name: "Karim", phone: "998904567890" },
];
contacts1[3].phone += " (updated)";
console.log(contacts1[3].phone);
// contacts[3].phone += " (updated)"

// Masala: Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.
//  Massiv holati:
let people2 = [
  { name: "Ali", age: 20 },
  { name: "Vali", age: 25 },
  { name: "Sami", age: 30 },
];
people2[1].age *= 2;
console.log(people2[1]);
// people[1].age *= 2

// Masala: Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.
//  Massiv holati:
let employeess = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];
employeess[2].joinedAt = "2024-07-01";
console.log(employeess[2]);
// employees[2].joinedAt = "2024-07-01"

// Masala: Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.
//  Massiv holati:
let team = [{ name: "Ali" }, { name: "Vali" }, { name: "Sami" }];
team[0].name += " (CEO)";
console.log(team[0]);
// team[0].name += " (CEO)"

// Masala: 3-obyektning price qiymatini 10% kamaytiring.
//  Massiv holati:
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
];
products[2].price *= 0.9;
console.log(products[2]);
// products[2].price *= 0.9

// Masala: Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.
//  Massiv holati:
let users5 = [
  { name: "Ali", isActive: false },
  { name: "Vali", isActive: false },
  { name: "Sami", isActive: false },
];
users5.forEach((user) => {
  user.isActive = true;
});
console.log(users5);
// users[i].isActive = true (barcha obyektlarda)

// 31-40: Shartli tekshirish va qiymatlar o'zgarishi
// 31. Shartli tekshirish va qiymatlar o'zgarishi
// Masala: Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.
// Massiv:
let data = [
  { id: 1, name: "Ali", status: "Completed" },
  { id: 2, name: "Vali", status: "Pending" },
  { id: 3, name: "Sami", status: "Completed" },
];
if (data[1].status == `Pending`) {
  data[1].status = `Completed`;
}
console.log(data[1].status);

// 32. Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.
// Massiv:
let data1 = [
  { id: 1, name: "Ali", age: 35 },
  { id: 2, name: "Vali", age: 25 },
  { id: 3, name: "Sami", age: 28 },
];
if (data1[0].age > 30) {
  data1[0].senior = `true`;
}
console.log(data1);

// 33. Masala: Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.
// Massiv:
let data2 = [
  { id: 1, name: "Product1", price: 150 },
  { id: 2, name: "Product2", price: 80 },
  { id: 3, name: "Product3", price: 60 },
];
if (data2[data2.length - 1].price < 100) {
  data2[data2.length - 1].price = 100;
}

// 34. Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.
// Massiv:
let data3 = [
  { id: 1, name: "Ali", role: "manager" },
  { id: 2, name: "Vali", role: "guest" },
  { id: 3, name: "Sami", role: "supervisor" },
];
data3.forEach((data) => {
  data.role = `user`;
});
data3[2].role = `admin`;

// 35. Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.
// Massiv:
let data4 = [
  { id: 1, name: "Ali", city: "Buxoro" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" },
];
if (data4[2].city == `Toshkent`) {
  data4[2].city = `Samarqand`;
}

// 36. Masala: Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.
// Massiv:
let data5 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1200 },
  { id: 3, name: "Sami", salary: 800 },
];
data5.forEach((data) => {
  if (data.salary < 1000) {
    data.low = undefined;
  }
});

// 37. Masala: 2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.
// Massiv:
let data6 = [
  { id: 1, name: "Ali", email: "ali@yahoo.com" },
  { id: 2, name: "Vali", email: "vali@gmail.com" },
  { id: 3, name: "Sami", email: "sami@mail.com" },
];
if (data6[1].email.endsWith(`@gmail.com`)) {
  data6[1].email += `verified`;
}
console.log(data[1].email);

// 38. Masala: Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.
// Massiv:
let data7 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];
data7[data7.length - 1].lastLogin = `12/17/2024`;

// 39. Masala: Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.
// Massiv:
let data8 = [
  { id: 1, name: "Product1", stock: 0 },
  { id: 2, name: "Product2", stock: 5 },
  { id: 3, name: "Product3", stock: 10 },
];
if (data8[0].stock == 0) {
  data8[0].isAvailable = false;
}

// 40. Masala: Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.
// Massiv:
let data9 = [
  { id: 1, name: "Ali", status: "Pending" },
  { id: 2, name: "Vali", status: "Active" },
  { id: 3, name: "Sami", status: "Completed" },
];
data9.forEach((data) => {
  data.status = `Inactive`;
});
data9[0].status = `Active`;
// 41-50: Obyektni saralash, tanlash va qiymatlarni tekshirish
// 41. Masala: Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.
// Massiv:
let data10 = [
  { id: 1, name: "Product1", price: 600 },
  { id: 2, name: "Product2", price: 400 },
  { id: 3, name: "Product3", price: 800 },
];
data10.forEach((data) => {
  if (data.price > 500) {
    data.isExpensive = true;
  }
});

// 42. Masala: 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.
// Massiv:
let data11 = [
  { id: 1, name: "Ali", salary: 900 },
  { id: 2, name: "Vali", salary: 1000 },
  { id: 3, name: "Sami", salary: 800 },
];
if (data11[1].salary >= 1000) {
  data11[1].HighSalary = true;
}
console.log(data11);

// 43. Masala: Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.
// Massiv:
let data12 = [
  { id: 1, name: "Vali", role: "user" },
  { id: 2, name: "Sami", role: "user" },
  { id: 3, name: "Ali", role: "guest" },
];
if (data12[2].name == `Ali`) {
  data12[2].isManager = true;
}

// 44. Masala: Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.
// Massiv:
let data13 = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Vali", age: 20 },
  { id: 3, name: "Sami", age: 16 },
];
data13.forEach((data) => {
  if (data.age < 18) {
    data.isUnderage = true;
  }
});

// 45. Masala: Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.
// Massiv:
let data14 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 15 },
  { id: 3, name: "Product3", stock: 8 },
];
data14.forEach((data) => {
  if (data.stock < 10) {
    data.lowStock = true;
  }
});

// 46. Masala: 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.
// Massiv:
let data15 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "supervisor" },
];
data15.forEach((data) => {
  data.role = `guest`;
});
data15[1].role = "user";

// 47. Masala: Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.
// Massiv:
let data16 = [
  { id: 1, name: "Ali", status: "Pending" },
  { id: 2, name: "Vali", status: "Completed" },
  { id: 3, name: "Sami", status: "Pending" },
];
data16.forEach((data) => {
  if (data.status == `pending`) {
    data.isPending = true;
  }
});

// 48. Masala: Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.
// Massiv:
let data17 = [
  { id: 1, name: "Ali", city: "Samarqand" },
  { id: 2, name: "Vali", city: "Namangan" },
  { id: 3, name: "Sami", city: "Toshkent" },
];
if (data17[2].city == `Toshkent`) {
  data17[2].city = `Buxoro`;
}

// 49. Masala: Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.
// Massiv:
let data18 = [
  { id: 1, name: "Ali", score: 70 },
  { id: 2, name: "Vali", score: 90 },
  { id: 3, name: "Sami", score: 40 },
];
if (data18[data18.length - 1].score < 50) {
  data18[2].failed = true;
}
// 50. Masala: Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.
// Massiv:
let data19 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1500 },
];
data19.forEach((data) => {
  data.discount = 0;
  if (data.price > 1000) {
    data.discount = 20;
  }
});
console.log(data19);

// 51-60: Obyektlarni o'zgartirish va murakkabroq amallar
// 51. Masala: Massivdagi obyektlarning salary qiymatini 10% ga oshiring.
// Massiv:
let data20 = [
  { id: 1, name: "Ali", salary: 1000 },
  { id: 2, name: "Vali", salary: 1500 },
  { id: 3, name: "Sami", salary: 2000 },
];
data20.forEach((data) => {
  data.salary = data.salary * 1.1;
});
console.log(data20);

// 52. Masala: 2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.
// Massiv:
let data21 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];
data21[2].name += "- employee";
console.log(data21);

// 53. Masala: Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.
// Massiv:
let data22 = [
  { id: 1, name: "Product1", stock: 5 },
  { id: 2, name: "Product2", stock: 0 },
  { id: 3, name: "Product3", stock: 10 },
];
data22.forEach((data) => {
  if (data.stock > 0) {
    data.isAvailable = true;
  } else {
    data.isAvailable = false;
  }
});
console.log(data22);

// 54. Masala: Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.
// Massiv:
let data23 = [
  { id: 1, name: "Product1", price: 1200 },
  { id: 2, name: "Product2", price: 800 },
  { id: 3, name: "Product3", price: 1000 },
];
if (data23[0].price > 1000) {
  data23[0].price = 900;
}
console.log(data23);

// 55. Masala: Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.
// Massiv:
let data24 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];
data24[data24.length - 1].updatedAt = `2024-07-10`;
console.log(data24);

// 56. Masala: 3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.
// Massiv:
let data25 = [
  { id: 1, name: "Ali", level: "Beginner" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];
data25[2].level = `Intermediate`;

// 57. Masala: Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.
// Massiv:
let data25 = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 85 },
  { id: 3, name: "Sami", score: 90 },
];
data25.forEach((data) => {
  data.isTop = false;
  if (data.score > 80) {
    data.isTop = true;
  }
});
console.log(data25);

// 58. Masala: Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.
// Massiv:
let data26 = [
  { id: 1, name: "Ali", role: "admin" },
  { id: 2, name: "Vali", role: "user" },
  { id: 3, name: "Sami", role: "admin" },
];
data26.forEach((data) => {
  if (data.role == `admin`) {
    data.privileges = `full`;
  }
});
console.log(data26);

// 59. Masala: Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.
// Massiv:
let data27 = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sami" },
];
data27[data27.length - 1].name += ` (completed)`;
console.log(data27);

// 60. Masala: Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.
// Massiv:
let data28 = [
  { id: 1, name: "Ali", isVerified: false },
  { id: 2, name: "Vali", isVerified: true },
  { id: 3, name: "Sami", isVerified: false },
];
data28[0].isVerified =
  data28[0].isVerified == false ? true : data28[0].isVerified;
console.log(data28);
