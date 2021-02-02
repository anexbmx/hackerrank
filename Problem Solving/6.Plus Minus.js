const plusMinus = (arr, avg = v => (v / arr.length).toFixed(6)) => {
    let positive = 0,
      negative = 0,
      zero = 0;
    for (let digit of arr)
      digit > 0 ? positive++ : digit < 0 ? negative++ : zero++;
    console.log(avg(positive));
    console.log(avg(negative));
    console.log(avg(zero));
  };