// Problem -1 : Array String Length

var arr =["apple", "windows", "ubuntu"];

arr.forEach(function length(ele){
    console.log(ele.length);
})

// Problem -2 : Array String First Character

var arr2 =  ["apple", "windows", "ubuntu"]

var store = function(ele){
    return ele[0];
}

var char = arr2.map(store);
console.log(char);

// Problem -3 : Array String Pattern

var arr3 = ["apple", "windows", "ubuntu", "cola", "system"]

var vault = function(ele){
    if(ele[0] == 'a' || ele[ele.length-1] == 'a'){
        return ele;
    }
}

var Store = arr3.filter(vault);
console.log(Store);

// Problem -4 : Array Odd Length String sum

var arr4 = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var space = function (ele){
    if(ele.length % 2 == 1){
        return ele;
    } 
};

var some = function(ele){
    return ele.length;
}
var sum  = function(a,b){
    return a + b;
};

var store2 = arr4.filter(space).map(some).reduce(sum);
console.log(store2);

// Problem -5 : Array some criteria

// var arr5 = [2, 4, 5, 3, 6, 8];

// var even = function(ele){

//     console.log(ele);
// }


// var godown = arr5.filter(even);
// console.log(godown);