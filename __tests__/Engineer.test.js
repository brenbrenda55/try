const Employee = require('../lib/Employee')
const Engineer  = require('../lib/Engineer')



test('creates Engineer object', () => {
    const engineer = new Engineer ('James', 1, 'abc123@yahoo.com', 'brenbrenda55');

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toBe('abc123@yahoo.com')
    expect(engineer.github).toBe('brenbrenda55')

});

test('does my get role return to me', () => {
    const engineer = new Engineer ('James', 1, 'abc123@yahoo.com', 'brenbrenda55');
    expect(engineer.getRole()).toBe('Engineer')
})

test('does my test github work', () => {
    const engineer = new Engineer ('James', 1, 'abc123@yahoo.com', 'brenbrenda55');
    expect(engineer.getGithub()).toBe('brenbrenda55')

})