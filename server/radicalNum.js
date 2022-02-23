const sumDigits = (num) => {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  };
  
  const radicalNum = (str) => {
    const dob = str.replace(/-/g, "");
    let num = sumDigits(parseInt(dob));
  
    while (num.toString().length > 1 ) { 
      num = sumDigits(num);
    }
  
    return num;
  };
  
  module.exports = radicalNum;
  