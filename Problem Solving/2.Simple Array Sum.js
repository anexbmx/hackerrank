const simpleArraySum = ([first, ...rest]) =>
    first ? first + simpleArraySum(rest) : 0;
