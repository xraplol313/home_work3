// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(i)
}

// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

let arrTwo = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arrTwo.length; i++) {
    if (arrTwo[i] <0 && arrTwo[i] > -10 && arrTwo[i] < -3) {
        console.log(arrTwo[i])
    }
}

// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

let arrThree = [];
let result = 0;

for (let i = 23; i <= 57; i++) {
    arrThree[i] = i + 1;
    result += arrThree[i];
}
console.log(arrThree)
console.log(result)

let i = 23;
while (i <= 57) {
    i++;
    arrThree[i] = i + 1;
}

// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.
let arrFour = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arrFour.length; i++) {
    let num = arrFour[i];
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(num);
    }
}

// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

let arrFive = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

for (let i = 0; i < arrFive.length; i++) {
    let day = arrFive[i];
    let firstSimvol = day[0] + day[1];
    if (firstSimvol == 'сб' || firstSimvol == 'вс') {
        console.log('СБ И ВС');
    } else {
        console.log(day)
    }
}

// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

let arrSix = ['7', '4', '2', '12', '9'];
arrSix.push('14', '66', '63463');
console.log(arrSix[arrSix.length - 1]);


// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

let arrSeven = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arrSeven)
arrSeven.reverse()
console.log(arrSeven)

// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

let arrEight = [];
let number;

while (number != '') {
    number = prompt('Введите число');
    arrEight.push(Number(number));
}

arrEight.pop();
console.log(arrEight);

arrEight.sort(function (a, b) {
    return a - b;
});

console.log(arrEight)