const staircase = (n, row= 1, text = "") => 
  row <= n 
    ? staircase(n, row+1, `${text}${" ".repeat(n - row)}${"#".repeat(row)}\n`)
    : console.log(text)
