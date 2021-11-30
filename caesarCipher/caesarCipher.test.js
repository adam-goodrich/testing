const caesarCipher = require("./caesarCipher");

test("function is defined", () => {
  expect(caesarCipher("hello")).toBeDefined();
});

test("works with blank string", () => {
  expect(caesarCipher("", 3)).toBe("");
});

test("works with blank string no numbers", () => {
  expect(caesarCipher("")).toBe("Must enter a number as second parameter");
});

test("works with blank string and nan as second parameter", () => {
  expect(caesarCipher("hello", false)).toBe(
    "Must enter a number as second parameter"
  );
});

test("no string gives warning", () => {
  expect(caesarCipher()).toBe("Must enter a string");
});

test("Works with low number", () => {
  expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
});

test("Works with spaces", () => {
  expect(caesarCipher("Hello World", 1)).toBe("Ifmmp Xpsme");
});

test("Works with puncuation", () => {
  expect(caesarCipher("Hello World!", 1)).toBe("Ifmmp Xpsme!");
});

test("Works with negative numbers", () => {
  expect(caesarCipher("Hello", -1)).toBe("Gdkkn");
});

test("Works with large numbers", () => {
  expect(caesarCipher("Hello", 500)).toBe("Nkrru");
});
