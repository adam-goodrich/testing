const capitalize = require("./capitalize");

test("capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalize", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Function is defined", () => {
  expect(capitalize("hello")).toBeDefined();
});

test("Returns a string", () => {
  expect(typeof capitalize("hello")).toBe("string");
});

test("Alerts if no args", () => {
  expect(capitalize()).toBe("You must provide a string");
});

test("Alerts if boolean", () => {
  expect(capitalize(true)).toBe("You must provide a string");
});

test("Alerts if null", () => {
  expect(capitalize(null)).toBe("You must provide a string");
});

test("Alerts if undefined", () => {
  expect(capitalize(undefined)).toBe("You must provide a string");
});

test("Alerts if nan", () => {
  expect(capitalize(NaN)).toBe("You must provide a string");
});

test("Numbers should not work", () => {
  expect(capitalize(3)).toBe("You must provide a string");
});

test("First letter of string should be changed to capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("First letter of string should stay capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("test empty string", () => {
  expect(capitalize("")).toBe("");
});

test("test large string", () => {
  expect(
    capitalize(
      "it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    )
  ).toBe(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
  );
});
