const filterData = (array, stringInArray, stringToCompare) => {
  return array.filter(
    (el) => el.stringInArray.toLowerCase() === stringToCompare.toLowerCase()
  );
};

export default filterData;
