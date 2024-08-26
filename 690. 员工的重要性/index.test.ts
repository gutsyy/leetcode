import { test, expect } from "vitest";

interface Employee {
  id: number;
  importance: number;
  subordinates: number[];
}

type EmployeeRaw = [number, number, number[]];

function convert(data: EmployeeRaw[]): Employee[] {
  return data.map(
    (item) =>
      ({
        id: item[0],
        importance: item[1],
        subordinates: item[2],
      }) as Employee,
  );
}

function getImportance(employees: Employee[], id: number): number {
  const employeesMap = new Map();

  for (const employee of employees) {
    employeesMap.set(employee.id, employee);
  }

  let res = 0;

  const recursion = (employee: Employee) => {
    res += employee.importance;
    for (const subordinate of employee.subordinates) {
      recursion(employeesMap.get(subordinate));
    }
  };

  recursion(employeesMap.get(id));

  return res;
}

test("examples", () => {
  expect(
    getImportance(
      convert([
        [1, 5, [2, 3]],
        [2, 3, []],
        [3, 3, []],
      ]),
      1,
    ),
  ).toBe(11);

  expect(
    getImportance(
      convert([
        [1, 2, [5]],
        [5, -3, []],
      ]),
      5,
    ),
  ).toBe(-3);
});
