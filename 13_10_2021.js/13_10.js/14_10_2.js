function runProgram(input) {
    var N = Number(input);
    for(var i = 1; i <= N; i++)
    {    
        var output = "";
        for(var j = 1; j <= N; j++)
        {
            if(j == 1 || j == 5 || i == 5)
            {
                output = output + "*" + " ";
            }
            else {
                output = output + " " + " ";
            }
        }
        console.log(output);
    }
   }
   if (process.env.USERNAME === "abhis") {
     runProgram(`5`);
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
   
   