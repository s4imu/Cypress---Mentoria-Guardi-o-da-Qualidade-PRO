import MyInfoPage from "./myInfoPage";

export default class MenuPage {
  selectorsList() {
    return {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    };
  }

  clickMyInfoButton() {
    cy.get(this.selectorsList().myInfoButton).click();
    return new MyInfoPage();
  }
}
