const Employee = require('../lib/Employee.js')

test('creates Employee object', () => {
    const employee = new Employee ('James');

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(expect.any(Number));
});