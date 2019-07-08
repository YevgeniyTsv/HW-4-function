


// ЗАДАНИЯ ДЛЯ РАЗМИНКИ!!!!!!)))

        //1) Написать функцию которая принимает 2 параметра перемножает и возвращает значение!!!
        console.log('1=перемножение=======================================================================');
        function multiply(a, b) {
            return (a * b);
        }
        console.log(multiply(5, 10));


        // 2) Написать функцию которая принимает 3 параметра и возвращает найменьшее из них
        console.log('2=наименьшее=======================================================================');
        let minNum;
        function min(a, b, c) {

            if (a < b && a < c) {
                minNum = a;
            } else if (b < c) {
                minNum = b;
            } else {
                minNum = c;
            }
        }
        min(100, 33, 11);
        console.log(minNum);


        console.log('3)=непарные=числа=======================================================================');
        //3) Написать функцию которая 
        //  -принимает массив, 
        //  -сохраняет непарные числа в новый массив, 
        //  -сортирует массив
        // - и возвращает отсортированный массив
        function sortOddNumbers(array) {
            return array.filter(item => { return (item % 2) !== 0 }).sort((a, b) => { return a - b });
        }
        sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11])
        console.log('[' + sortOddNumbers([2, 5, 3, 6, 9, 8, 10, 11]) + ']');


        console.log('4)=кратные=5=======================================================================');
        // 4) Написать функцию котороя принимает массив, и выводит новый массив из тех элементов которые кратны 5!!


        function multipleOfFive(array) {
            const newArr = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 5 === 0) {
                    newArr.push(array[i]);
                }
            }
            return newArr;
        }
        console.log('[' + multipleOfFive([20, 5, 3, 23, 15, 8, 10, 11]) + ']');


        console.log('5=jitb=======================================================================');
        // 5) Написать функцию котороя принимает массив из строк, и возвращает кокатенацию из элементов первые символы которых
        // совпадают с этой подстрокой 'jitb'. Используем  toLowerCase() и indexOf() методы  !!
        function matchWithString(array) {
            const str = 'jitb';
            return array.filter((item) => { return str.indexOf(item[0].toLowerCase()) !== -1 }).join(' ').toLowerCase();
        }
        matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']); // должно вывести javascript is the best
        console.log(matchWithString(['Javascript', 'nice', 'coding', 'is', 'the', 'language', 'Best', 'worst']));

        console.log('6=подстрока+caunter=======================================================================');
        // 6) Написать функцию котороя принимает строку и возвращает подстроку и количество таких подстрок в строке! 
        function sameSubstring(str) {
            let counter = 0;
            let subString = str[0];
            for (let i = 1; i < str.length; i++) {
                if (subString.indexOf(str[i]) !== -1) {
                    break;
                }
                subString += str[i];
            }

            for (let i = 0; i < str.length; i += subString.length) {
                counter++;
            }
            return [subString, counter];
        }

        console.log('[' + sameSubstring('fdfdfdfd') + ']'); // рузльтат массив из ['fd', 4]
        console.log('[' + sameSubstring('xxxxxx') + ']'); // рузльтат массив из ['x', 6]
        console.log('[' + sameSubstring('xyzxyzxyz') + ']'); // рузльтат массив из ['xyz', 3]


        console.log('7=Рекурсия=перемножить=от=5=до=10===================================================================');
        // 7) Написать функцию которая перемножает числа от 5 до 10 через рекурсию!!!

        function recursive(number) {
            if (number === 10) {
                return number;
            }
            return number * recursive(number + 1)
        }
        console.log(recursive(5));



        console.log('8=простое=исло=true/false=======================================================================');
        // 8) Написать функцию котороя принимает число и проверяет простое ли число, если да то возвращает true иначе false!!


        function isPrime(num) {
            for (let i = 2; i < num; i++) {
                if (num % i == 0)
                    return false;
            }
            return true;
        }
        console.log(isPrime(7)); // true
        console.log(isPrime(6)); // false
        console.log(isPrime(9)); // false