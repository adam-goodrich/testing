const analyzeArray = require("./analyzeArray");

test("function is defined", () => {
  expect(analyzeArray([])).toBeDefined();
});

test("function only accepts arrays", () => {
  expect(analyzeArray(false)).toBeDefined();
});

test("function returns correct answers length 1", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("function returns correct empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  });
});

test("function returns correct all 0's", () => {
  expect(analyzeArray([0, 0, 0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 5,
  });
});

test("function returns correct 1 zero", () => {
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("function returns correct answers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("function returns correct answers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
