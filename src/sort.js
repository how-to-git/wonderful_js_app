function sort(list) {
  for (i = 0; i < list.length; i++) {
    for (j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        a = list[i];
        list[i] = list[j];
        list[j] = a;
      }
    }
  }
  return list;
}

module.exports = sort;
