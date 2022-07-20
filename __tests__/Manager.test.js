const Manager = require("../lib/Manager.js")
describe("Employee", () =>{
    describe("test Manager's properties", () => {
        it ("test all Properties", () => {
            const manager = new Manager( 'Phil', 1, 'ploy@yahoo.com', 2345678)

            expect(manager.name).toEqual('Phil')
            expect(manager.id).toEqual(1)
            expect(manager.email).toEqual('ploy@yahoo.com')
            expect(manager.officeNumber).toEqual(2345678)

        })
    })


    describe("test Manager's methods", () => {
        it("test all methods", () => {
            const manager = new Manager( 'brian', 2, 'brian@yahoo.com', 3456789)

            expect(employee.getName()).toEqual('brian')
            expect(employee.getId()).toEqual(2)
            expect(employee.getEmail()).toEqual('brian@yahoo.com')
            expect(employee.getOfficeNumber()).toEqual(345678)
            expect(employee.getRole()).toEqual('Manager')
        })
    })
})