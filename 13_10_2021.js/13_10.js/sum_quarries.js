function checktheQ(arr,q){
    
    if(q % 2 === 0){
        
       foreven(arr);
    }
    else{
        forodd(arr);
    }
}

function forodd(arr){
    
    var store2 = [];
    for(var i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            for(var j = 0; j < arr[0].length; j++){
                store2.push(arr[i][j]);
            }
        }
        else{
            for(var j = arr[0].length-1; j >= 0; j-- ){
                 store2.push(arr[i][j]);
            }
        }
    }
    console.log(store2.join(' '));
}

function foreven(arr){
    var store = [];
     for(var i = 0; i < arr.length; i++){
            if(i % 2 === 0){
                 for(var j = arr[0].length-1; j >=0; j--){
                    store.push(arr[i][j]);
                }
                
            }
            else {
               for(var j = 0; j < arr[0].length; j++){
                    store.push(arr[i][j]);
                }
            }
        }
        console.log(store.join(' '));
}


function runProgram(input) {
 
 input = input.split('\n');
 
 var T = +input[0];
 var line = 1;
 for(var i = 0; i < T; i++){
     
     var arr = [];
     var [n,m,q] = input[line++].split(' ').map(Number);
     for(var j = 0; j < n; j++){
          arr.push(input[line++].split(' ').map(Number)); 
     }
      checktheQ(arr,q);
 }
  
  
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}