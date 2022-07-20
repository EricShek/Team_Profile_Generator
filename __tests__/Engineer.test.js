const Engineer = require("../lib/Engineer.js")
describe("Employee", () =>{
    describe("test Engineer's properties", () => {
        it ("test all Properties", () => {
            const engineer = new Engineer( 'Phil', 1, 'ploy@yahoo.com', phil)

            expect(engineer.name).toEqual('Phil')
            expect(engieer.id).toEqual(1)
            expect(engineer.email).toEqual('ploy@yahoo.com')
            expect(engineer.gitHub).toEqual(2345678)

        })
    })


    describe("test Engineer's methods", () => {
        it("test all methods", () => {
            const engineer = new Engineer( 'brian', 2, 'brian@yahoo.com', Brian)

            expect(engineer.getName()).toEqual('brian')
            expect(engineer.getId()).toEqual(2)
            expect(engineer.getEmail()).toEqual('brian@yahoo.com')
            expect(engineer.getGitHub()).toEqual(Brian)
            expect(employee.getRole()).toEqual('Engineer')
        })
    })
})