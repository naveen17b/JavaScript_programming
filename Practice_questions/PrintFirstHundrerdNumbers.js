

for (i = 0; i <= 100; i++) {
    console.log(i);
    if (i % 3 == 0) {
        console.log('This ' + `${i}` + ' is divisible by 3 so this is nicknamed as Fizz');
    }
    else if (i % 5 == 0 && i % 3 !=0) {
        console.log('This ' + `${i}` + ' is divisible by 5 so this is nicknamed as Buzz');
        }

    }
