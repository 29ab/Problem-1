// Problem-1
var arr = [1,1,2,3,4,4,5]

var square = function(ele){
    return ele**2;
}
var store = arr.map(square);
console.log(store);

// Problem-2

var arr2 = [1, 2]

var doubble = function(ele){
    return ele*2;
} 

var store2 = arr2.map(doubble);
console.log(store2);

// Problem-3

var arr3 = [1,2,3];
var odd = function (ele){
    return ele % 2 != 0;
}

var store3 = arr3.filter(odd);
console.log(store3);

// Problem-4

var arr4 = [2,3,4];

var store4 = arr4.reduce((a,b) => a*b);
console.log(store4);

// Problem-5

var arr5 = [1, 2, 3, 4];

var filt = function(ele){
    return ele % 2 != 0;
}
var Store5 = arr5.filter(filt).reduce((a,b) => a + b);
console.log(Store5);

// Problem-6

var arr6 = [1, 2, 3, 4, 5, 6];

var Oddfil = function(ele){
    return ele % 3 == 0;
}
var doubble2 = function(ele){
    return ele**3;
} 

var result = arr6.filter(Oddfil).map(doubble2).reduce((a,b) => a+b);
console.log(result);