const diagonalDifference = ([first, ...rest], diff = 0) =>
    first
        ? diagonalDifference(
              rest,
              diff + first[rest.length] - first[first.length - 1 - rest.length]
          )
        : Math.abs(diff);
