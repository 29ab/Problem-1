function printCircle(arr) {             //completed
    var store = [];
    var top = 0;
    var bottom = arr.length-1;
    var left = 0;
    var right = arr[0].length-1; 
    for(var i = bottom; i >= top; i--){
        store.push(arr[i][left]);
    }
    left++;
    for(var i = left; i <= right; i++){
        store.push(arr[top][i]);
    }
    top++;

    for(var i = top; i <= bottom; i++){
        store.push(arr[i][right]);
    }
    right--;
    for(var i = right; i >= left; i--){
        store.push(arr[bottom][i]);
    }
    
    console.log(store.join(' '));
}



function runProgram(input) {
    input = input.trim().split('\n');
    var T = +input[0];
    var line = 1;

    for(var j = 0; j < T; j++){
        
        var N = +input[line++];
        var arr = [];
        for(var i = 0; i < N; i++){
            arr.push(input[line++].trim().split(' ').map(Number));
        }
        printCircle(arr);
    }

  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`1
    3
    1 2 3
    4 5 6
    7 8 9`);
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
  
  