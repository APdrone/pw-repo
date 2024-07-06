import test from "@playwright/test";
import { NavigationPage } from "../page-objects/NavigationPage";
import { FormLayoutsPage } from "../page-objects/FormLayoutPage";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
});

test("navigate to form page", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  await navigateTo.formLayoutsPage();
  await navigateTo.datepickerPage();
  await navigateTo.smartTablePage();
  await navigateTo.toastPage();
  await navigateTo.tooltipPage();
});

test("parametrised methods", async ({ page }) => {
  const navigateTo = new NavigationPage(page);
  const onFormLayoutPage = new FormLayoutsPage(page);

  await navigateTo.formLayoutsPage();
  await onFormLayoutPage.submitUsingTheGridFormWithCredntialsAndSelectOption(
    "testd@test.com",
    "Welcome1",
    "Option 1"
  );

  await onFormLayoutPage.submitInlineFormWithNameEmailAndCheckbox(
    "testd@test.com",
    "Welcome1",
    true
  );
});
