export const sortDominoes = (dominoes, order = "asc") => {
    return [...dominoes].sort((a, b) => {
      const sumA = a[0] + a[1];
      const sumB = b[0] + b[1];
  
      if (sumA === sumB) {
        if (order === "asc") {
          return a[0] - b[0];
        } else {
          return b[0] - a[0];
        }
      }
  
      if (order === "asc") {
        return sumA - sumB;
      } else {
        return sumB - sumA;
      }
    });
  };
  
  export const countDoubleNumber = (dominoes) => {
    let count = 0;
    for (let i = 0; i < dominoes.length; i++) {
      // let dominoes = dominoes[i]
      // let left = dominoes[0]
      // let right = dominoes[1]
      const [left, right] = dominoes[i];
      if (left === right) {
        count++;
      }
    }
    return count;
  };
  
  export const removeDuplicates = (dominoes) => {
    const totalCombination = {};
  
    for (const [a, b] of dominoes) {
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
  
      totalCombination[key] = (totalCombination[key] || 0) + 1;
    }
  
    return dominoes.filter(([a, b]) => {
      const key = a < b ? `${a}-${b}` : `${b}-${a}`;
      return totalCombination[key] === 1;
    });
  };
  
  export const flipDominoes = (dominoes) => {
    return dominoes.map(([left, right]) => [right, left]);
  };
  
  export const removeCardsWithTotal = (dominoes, totalToRemove) => {
      return dominoes.filter(([left, right]) => left + right !== totalToRemove)
  }