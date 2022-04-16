describe("Issue Tracker", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3001/")
    });

    it("can visit the front page", () => {
        cy.contains("Dashboard")
    });

    it("add issue button can be found", () => {
        cy.contains("Add new issue")
    });

    it("add issue button can be clicked", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard")
    });

    it("'To dashboard' button can be found after clicking Add new issue", () => {
        cy.contains("Add new issue").click()
        cy.contains("To dashboard")
    });

    it("All the form can be typed in", () => {
        cy.contains("Add new issue").click()
        cy.get("input").eq(0).type("Some developer")
        cy.get("input").eq(1).type("Some priority")
        cy.get("input").eq(2).type("Some description")
    });

    it("The form can be written and can click Add after", () => {
        cy.contains("Add new issue").click()
        cy.get("input").eq(0).type("Some developer")
        cy.get("input").eq(1).type("Some priority")
        cy.get("input").eq(2).type("Some description")
        cy.get("Button").eq(1).click()
    });

    it("The form can be written, be sent and click on Understood", () => {
        cy.contains("Add new issue").click()
        cy.get("input").eq(0).type("Some developer")
        cy.get("input").eq(1).type("Some priority")
        cy.get("input").eq(2).type("Some description")
        cy.get("Button").eq(1).click()
        cy.contains("Added issue")
        cy.contains("Understood").click()
        
    });

    it("The form can be written, be sent and return to dashboard", () => {
        cy.contains("Add new issue").click()
        cy.get("input").eq(0).type("Some developer")
        cy.get("input").eq(1).type("Some priority")
        cy.get("input").eq(2).type("Some description")
        cy.get("Button").eq(1).click()
        cy.contains("Added issue")
        cy.contains("Understood").click()
        cy.get("button").eq(2).click()
        
    });

});


