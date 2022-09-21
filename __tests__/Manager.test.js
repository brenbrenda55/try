const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')

test('creates Manager object', () => {
    const manager = new Manager ('James', 1, 'abc123@yahoo.com', 5555555555);

    expect(manager.name).toBe('James');
    expect(manager.id).toEqual(1);
    expect(manager.email).toBe('abc123@yahoo.com')
    expect(manager.officeNumber).toEqual(5555555555)

});

test('does my get role return to me', () => {
    const manager = new Manager ('James', 1, 'abc123@yahoo.com', 5555555555);
    expect(manager.getRole()).toBe('Manager')
})

test('does my test officenumber work', () => {
    const manager = new Manager ('James', 1, 'abc123@yahoo.com', 5555555555);
    expect(manager.getOfficeNumber()).toEqual(5555555555)

})