import MenuPage from "./menuPage";

const menuPage = new MenuPage();

export default class DashboardPage {
  selectorsList() {
    return {
      dashboardGrid: ".orangehrm-dashboard-grid",
    };
  }
  checkDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index");
    cy.get(this.selectorsList().dashboardGrid).should("be.visible");
    return new MenuPage();
  }
}
