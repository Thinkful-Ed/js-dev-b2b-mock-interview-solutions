/** NOTE: Students are given two Qualified coding challenges to solve within 20 minutes. */

/**
 * Challenge 1 (~10 minutes)
 * Write a function `getEmployeeNames()` that accepts an array of employees and returns a list of the employees' names.
 * For example:
 *
 * const thinkfulEmployees = [
 * {
 *   id: 1,
 *   name: "Andrew Li",
 *   department: "Engineering",
 * },
 * {
 *   id: 2,
 *   name: "Bisha Sundarya",
 *   department: "Accounting",
 * },
 * {
 *   id: 3,
 *   name: "Cassandra Wilkins",
 *   department: "Marketing",
 * },
 * ];
 *
 *
 * getEmployeeNames(thinkfulEmployees) // > ["Andrew Li", "Bisha Sundarya", "Cassandra Wilkins"]
 */

function getEmployeeNames(employees) {
  const employeeNames = [];
  for (let i = 0; i < employees.length; i++) {
    employeeNames.push(employees[i].name);
  }
  return employeeNames;
}

/**
 * Challenge 2: Numbers greater than 100 (~10 minutes)
 *
 * Write a function `greaterThan100()` that takes in an array of numbers, and uses `filter()` to return the ones
 * that are greater than 100.
 *
 * Arguments: an array of numbers like:
 *
 * [4,41,832,72,89,120,431,505,70]
 * Return value: an array of numbers greater than 100. If there are no numbers greater than 100, return an
 * empty array.
 * For the sample array above, the function should return [832,120,431,505].
 */

function greaterThan100(numbers) {
  return numbers.filter((number) => number > 100);
}
