// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum;
let count = 1; 

while(count <= 20){
  count = count + (count + 1);
  sum = count;
  alert(sum)
}
console.log(sum);

