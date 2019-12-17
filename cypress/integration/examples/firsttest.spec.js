it("load app", () => {
  cy.visit("http://localhost:3000");
  /*
  cy.get("root")
    .find("h1")
    .should("equal", "Homepage");

    */
  cy.get("[data-cy=input]").type("pikachu");
  cy.get("[data-cy=submit]").click();
  cy.get("[data-cy=be]").as("testvar");

  describe("check value of base experience", function() {
    cy.get("[data-cy=be]").contains("112");
  });
});
