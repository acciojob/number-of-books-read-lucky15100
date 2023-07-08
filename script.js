function numberOfBooksRead(library) {
  let count = 0;
  for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus === true) {
      count++;
    }
  }
  return count;
}
