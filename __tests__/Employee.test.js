const Employee = require('../lib/Employee.js')

test('creates Employee object', () => {
    const employee = new Employee ('James', 1, 'abc123@yahoo.com');

    expect(employee.name).toBe('James');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('abc123@yahoo.com')

});

test('does my get role return to me', () => {
    const employee = new Employee ('James', 1, 'abc123@yahoo.com');
    expect(employee.getRole()).toBe('Employee')
})
