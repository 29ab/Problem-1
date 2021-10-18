function runProgram(input) {
    
    var string = input.trim().split('');
    // console.log(string);
    var count = 0;
    var output = "";
    var char = string[0];

    for(var i = 1; i < string.length; i++){
        if(char == string[i]){
            count++;
        }
         
        else{
            output = output + char + (count+1);
            char = string[i];
            count = 0;
        } 
        if(i == string.length - 1){
            output = output + char + (count+1);
        }
    }
   console.log(output);
  }
  if (process.env.USERNAME === "abhis") {
    runProgram(`aaabbbbccaaa`);
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
  
  