// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("hanoi");
});

test("test cancel #peg-a", async ({ page }) => {
  await page.goto("/");

  let pegA = await page.locator("#peg-a");

  await expect(pegA).not.toHaveClass("selected");

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).not.toHaveClass("selected");
});

test("test cancel #peg-b", async ({ page }) => {
  await page.goto("/");

  let pegB = await page.locator("#peg-b");

  await expect(pegB).not.toHaveClass("selected");

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegB).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegB).not.toHaveClass("selected");
});

test("test cancel #peg-c", async ({ page }) => {
  await page.goto("/");

  let pegC = await page.locator("#peg-c");

  await expect(pegC).not.toHaveClass("selected");

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegC).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegC).not.toHaveClass("selected");
});

test("test cacnel #button-a", async ({ page }) => {
  await page.goto("/");

  let buttonA = await page.locator("#button-a");

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonA).not.toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).toHaveClass(/selected/);
  await expect(buttonA).not.toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonA).not.toBeDisabled();
});

test("test cacnel #button-b", async ({ page }) => {
  await page.goto("/");

  let buttonB = await page.locator("#button-b");

  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonB).toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonB).not.toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonB).toBeDisabled();
});

test("test cacnel #button-c", async ({ page }) => {
  await page.goto("/");

  let buttonC = await page.locator("#button-c");

  await expect(buttonC).not.toHaveClass(/selected/);
  await expect(buttonC).toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonC).not.toHaveClass(/selected/);
  await expect(buttonC).not.toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonC).not.toHaveClass(/selected/);
  await expect(buttonC).toBeDisabled();
});
