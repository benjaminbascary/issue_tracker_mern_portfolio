describe("Issue Tracker", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3001/")
    })

    it("can visit the front page", () => {
        cy.contains("Dashboard")
    })

    it("add issue button can be found", () => {
        cy.contains("Add new issue")
    })

    it("add issue button can be clicked", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard")
    })

    it("'To dashboard' button can be found after clicking Add new issue", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard")
    })

    it("Can return to dashboard after going to 'Add new issue'", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard").click()
        cy.contains("Dashboard")
    })

    it("Can return to dashboard after going to 'Add new issue'", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard").click()
        cy.get("input: first").type("marcelo")

})