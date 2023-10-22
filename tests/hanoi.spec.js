// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("hanoi");
});

test("test cancel pegs", async ({ page }) => {
  await page.goto("/");

  let pegA = await page.locator("#peg-a");
  let pegB = await page.locator("#peg-b");
  let pegC = await page.locator("#peg-c");

  await expect(pegA).not.toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).not.toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);
});

test("test cacnel buttons", async ({ page }) => {
  await page.goto("/");

  let buttonA = await page.locator("#button-a");
  let buttonB = await page.locator("#button-b");
  let buttonC = await page.locator("#button-c");

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).toBeDisabled();
  await expect(buttonC).toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).not.toBeDisabled();
  await expect(buttonC).not.toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).toBeDisabled();
  await expect(buttonC).toBeDisabled();
});

test("test move pegs", async ({ page }) => {
  await page.goto("/");

  let pegA = await page.locator("#peg-a");
  let pegB = await page.locator("#peg-b");
  let pegC = await page.locator("#peg-c");

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "B" }).click();

  await expect(pegA).not.toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);

  await page.getByRole("button", { name: "A" }).click();

  await expect(pegA).toHaveClass(/selected/);
  await expect(pegB).not.toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);
});

test("test move buttons", async ({ page }) => {
  await page.goto("/");

  let buttonA = await page.locator("#button-a");
  let buttonB = await page.locator("#button-b");
  let buttonC = await page.locator("#button-c");

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).not.toBeDisabled();
  await expect(buttonC).not.toBeDisabled();

  await page.getByRole("button", { name: "B" }).click();

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).not.toBeDisabled();
  await expect(buttonC).toBeDisabled();

  await page.getByRole("button", { name: "A" }).click();

  await expect(buttonA).toHaveClass(/selected/);
  await expect(buttonB).not.toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).toBeDisabled();
  await expect(buttonC).not.toBeDisabled();
});
