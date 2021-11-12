// Задание 1:
// Сделать функцию котороя принимает 2 number аргумента
// И вычисляет какой из них меньше
//
// Задание 2:
//
// Написать функцию и назвать ее twoMass и передать 2 аргумента array и сравнить их длину
//
// Задание 3:
//
// Написать функцию countChar
// Которая может считать длину переданной как аргумент строки и вывести в консоль длину
//
// И скинуть мне через гит хаб








function number(a, b) {
    if (a > b) {
        console.log("Первый аргумент больше ")
    }
    else if (b > a) {
        console.log("Второй аргумент больше ")
    }
    else {
        console.log("Аргументы равны")
    }

}
number(20,20)







const mass_1 = [1];
const mass_2 = [1];


const random1 = Math.floor(Math.random() * 10) + 1;
const random2 = Math.floor(Math.random() * 300) + 1;

for (i = Math.floor(Math.random() * random1) + 1; i <= Math.floor(Math.random() * random2) + 1; i++) mass_1.push(i);
for (i = Math.floor(Math.random() * random1) + 1; i <= Math.floor(Math.random() * random2) + 1; i++) mass_2.push(i);

console.log(mass_1);
console.log(mass_2);



function twoMass(mass_1 , mass_2){

    if (mass_1.length>mass_2.length){
    console.log("первый массив длинее");
}
    else if (mass_1.length<mass_2.length){
    console.log("второй массив длинее ");
}
    else {
    console.log("Массивы равны");
}
}


twoMass(mass_1,mass_2)






const random = Math.floor(Math.random() * 200) + 1;

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < random; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(makeid());



function countChar(text){

    console.log(text.length)
}

countChar(makeid())
