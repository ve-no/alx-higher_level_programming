#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let nOccurrences = 0;

  list.forEach(ele => {
    if(ele == searchElement)
      nOccurrences++;
  });
  return nOccurrences;
};
