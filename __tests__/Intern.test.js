const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')

test('creates Intern object', () => {
    const intern = new Intern ('James', 1, 'abc123@yahoo.com', 'UTSA');

    expect(intern.name).toBe('James');
    expect(intern.id).toEqual(1);
    expect(intern.email).toBe('abc123@yahoo.com')
    expect(intern.school).toBe('UTSA')

});

test('does my get role return to me', () => {
    const intern = new Intern ('James', 1, 'abc123@yahoo.com', 'UTSA');
    expect(intern.getRole()).toBe('Intern')
})

test('does my test school work', () => {
    const intern = new Intern ('James', 1, 'abc123@yahoo.com', 'UTSA');
    expect(intern.getSchool()).toBe('UTSA')

}
)