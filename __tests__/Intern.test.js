const Intern = require("../lib/Intern.js")
describe("Employee", () =>{
    describe("Intern's properties", () => {
        it ("test all Properties", () => {
            const intern = new Intern( 'Phil', 1, 'ploy@yahoo.com', 'osu')

            expect(intern.name).toEqual('Phil')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('ploy@yahoo.com')
            expect(intern.school).toEqual('osu')

        })
    })


    describe("test Intern's methods", () => {
        it("test all methods", () => {
            const intern = new Intern( 'brian', 2, 'brian@yahoo.com', 'osu')

            expect(intern.getName()).toEqual('brian')
            expect(intern.getId()).toEqual(2)
            expect(intern.getEmail()).toEqual('brian@yahoo.com')
            expect(intern.getSchool()).toEqual('osu')
            expect(intern.getRole()).toEqual('Intern')
        })
    })
})