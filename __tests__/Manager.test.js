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

            expect(manager.getName()).toEqual('brian')
            expect(manager.getId()).toEqual(2)
            expect(manager.getEmail()).toEqual('brian@yahoo.com')
            expect(manager.getofficeNumber()).toEqual(345678)
            expect(manager.getRole()).toEqual('Manager')
        })
    })
})