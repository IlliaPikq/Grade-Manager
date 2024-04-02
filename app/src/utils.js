export const calculateGrade = (average) => {
    if (average > 95) {
      return 6;
    } else if (average > 83) {
      return 5;
    } else if (average > 70) {
      return 4;
    } else if (average > 55) {
      return 3;
    } else if (average > 40) {
      return 2;
    } else if (average > 0) {       
        return 1;
    } 
        return '-';
  };
  