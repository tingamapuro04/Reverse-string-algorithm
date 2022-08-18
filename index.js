function reverseString(str) {
  return str.split("").reduce((prev, curr) => {
    prev = curr + prev;
    return prev
  }, "");
}
