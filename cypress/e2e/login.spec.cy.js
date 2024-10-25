describe("Orange HRM Tests", () => {
  it("Successful login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get("button.orangehrm-login-button").click();
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(".oxd-topbar-header-breadcrumb-module").contains("Dashboard");
  });
  it("Error login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin12");
    cy.get("button.orangehrm-login-button").click();
    cy.get(".oxd-alert-content-text").contains("Invalid credentials");
  });
});
