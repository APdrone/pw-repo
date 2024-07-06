import { Locator, Page } from "@playwright/test";

export class NavigationPage {
  readonly page: Page;
  readonly formsLayoutMenuItem: Locator;
  readonly datePickerMenuItem: Locator;
  readonly smartTableMenuItem: Locator;
  readonly toasterMenuItem: Locator;
  readonly tooltipMenuItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formsLayoutMenuItem = page.getByText("Form layouts");
    this.datePickerMenuItem = page.getByText("Datepicker");
    this.smartTableMenuItem = page.getByText("Smart Table");
    this.toasterMenuItem = page.getByText("Toastr");
    this.tooltipMenuItem = page.getByText("Tooltip");
  }
  async formLayoutsPage() {
    await this.selectGroupMenuItem("Forms");
    // await this.page.getByText("Form layouts").click();
    await this.formsLayoutMenuItem.click();
  }
  async datepickerPage() {
    await this.selectGroupMenuItem("Forms");
    await this.page.waitForTimeout(1000);
    // await this.page.getByText("Datepicker").click();
    await this.formsLayoutMenuItem.click();
  }
  async smartTablePage() {
    await this.selectGroupMenuItem("Tables & Data");
    // await this.page.getByText("Smart Table").click();
    await this.smartTableMenuItem.click();
  }
  async toastPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    // await this.page.getByText("Toastr").click();
    await this.toasterMenuItem.click();
  }
  async tooltipPage() {
    await this.selectGroupMenuItem("Modal & Overlays");
    // await this.page.getByText("Tooltip").click();
    await this.tooltipMenuItem.click();
  }

  private async selectGroupMenuItem(groupItemTitle: string) {
    const groupMenuItem = this.page.getByTitle(groupItemTitle);
    const expandedState = await groupMenuItem.getAttribute("aria-expanded");
    if (expandedState == "false") {
      await groupMenuItem.click();
    }
  }
}
