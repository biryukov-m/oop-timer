export default (input: string) =>
  Number(input) < 10 ? '0'.concat(input) : input;
