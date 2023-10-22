// @ts-check
const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle("hanoi");
});

test("#peg-a has 8 disks", async ({ page }) => {
  let disks = await page.locator("#peg-a > .disk");
  await expect(disks).toHaveCount(8);
});

test("#peg-b has 0 disks", async ({ page }) => {
  let disks = await page.locator("#peg-b > .disk");
  await expect(disks).toHaveCount(0);
});

test("#peg-c has 0 disks", async ({ page }) => {
  let disks = await page.locator("#peg-c > .disk");
  await expect(disks).toHaveCount(0);
});

test("buttons have 3 buttons", async ({ page }) => {
  let buttons = await page.locator(".buttons > button");
  await expect(buttons).toHaveCount(3);
});

test("test A->A pegs", async ({ page }) => {
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

test("test A->A buttons", async ({ page }) => {
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

test("test A->B->A pegs", async ({ page }) => {
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

test("test A->B->A buttons", async ({ page }) => {
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

test("test A->B->B pegs", async ({ page }) => {
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

  await page.getByRole("button", { name: "B" }).click();

  await expect(pegA).not.toHaveClass(/selected/);
  await expect(pegB).toHaveClass(/selected/);
  await expect(pegC).not.toHaveClass(/selected/);
});

test("test A->B->B buttons", async ({ page }) => {
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

  await page.getByRole("button", { name: "B" }).click();

  await expect(buttonA).not.toHaveClass(/selected/);
  await expect(buttonB).toHaveClass(/selected/);
  await expect(buttonC).not.toHaveClass(/selected/);

  await expect(buttonA).not.toBeDisabled();
  await expect(buttonB).not.toBeDisabled();
  await expect(buttonC).not.toBeDisabled();
});
