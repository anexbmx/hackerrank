function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    // Declare second integer, double, and String variables.
    let integer, double, str;
    // Read and save an integer, double, and String to your variables.
    integer = +readLine();
    double = +readLine();
    str = readLine();
    // Print the sum of both integer variables on a new line.
    console.log(integer + i);
    // Print the sum of the double variables on a new line.
    console.log((double + d).toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + str);
}
