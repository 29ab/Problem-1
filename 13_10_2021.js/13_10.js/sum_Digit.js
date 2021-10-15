function splitNumbers(arr){  //complete
    
    var vault = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 9 ){
            var sum = 0;
            var box = arr[i].split('').map(Number);
            sum = box.reduce((a,b) => a+b);
            vault.push(sum);
            // console.log(sum + "<---");
        }
        else{
            vault.push(+arr[i]);
        }
    }

    var total = vault.reduce((a,b) => a+b)
    console.log(total);
}



function runProgram(input) {
    
    input = input.trim().split('\n');
     var T = +input[0];
     var line = 1;

     for(var i = 0; i < T; i++){
        
        var N = +input[line++];
        var array = input[line++].trim().split(' ');
        console.log(array);
        splitNumbers(array);
     }
   
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`2
    5
    12 14 16 17 29
    6
    1 2 3 4 5 51`);
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
  
  