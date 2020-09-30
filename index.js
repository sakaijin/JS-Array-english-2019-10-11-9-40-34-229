// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
console.log(typeof(a));
console.log(typeof(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
for (var x = 0; x < 5; x++){
    a[x] = a[x] * 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
console.log(colors[0] + " " + colors [1] + " " + colors[2] + " " + colors [3]);
console.log(colors[0] + "+" + colors [1] + "+" + colors[2] + "+" + colors [3]);
console.log(colors[0] + "," + colors [1] + "," + colors[2] + "," + colors [3]);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
a.sort((a,b)=>b-a);
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var frequency = 1;
var counter = 0;
var value;
for (var x = 0; x < 13; x++){
    for (var y = x; y < 13; y++){
        if (a[x] === a[y]) {
            counter++;
        }
        if (frequency<counter){
            frequency=counter;
            value = a[x];
        }
    }
    counter=0;
}
console.log(value);