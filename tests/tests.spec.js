// @ts-check
const { test, expect } = require('@playwright/test');

test('ensure post added', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // Get the input field and fill it with text
  let input = await page.locator('#input-field');
  await input.fill('Cook food');

  // Press enter to submit the form
  await page.keyboard.press('Enter');

  // Locate the todo and take the label text
  let todo = await page.locator('#todo-content li label').textContent();

  // Ensure the label contains the correct text
  await expect(todo).toEqual('Cook food');
});

test('ensure item count', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // Get the input field and fill it with text
  let input = await page.locator('#input-field');
  await input.fill('Cook food');

  // Press enter to submit the form
  await page.keyboard.press('Enter');

  // Locate the todo checkbox and get the uncompleted task text
  let todo = await page.locator('#todo-content li input');
  let incompleteCounter = await page.locator('#incomplete-count').textContent();

  // Check that the correct text is displayed
  await expect(incompleteCounter).toEqual('1 item left');

  // Check the box and get the count again
  await todo.check();
  incompleteCounter = await page.locator('#incomplete-count').textContent();

  await expect(incompleteCounter).toEqual('0 items left');
});

test('ensure count with multiple posts', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // Get the input field and fill it with text 
  //1
  let input = await page.locator('#input-field');
  await input.fill('Cook food');

  // Press enter to submit the form
  await page.keyboard.press('Enter');

  // 2
  // input = await page.locator('#input-field');
  await input.fill('Eat food');

  await page.keyboard.press('Enter');

  // 3
  // input = await page.locator('#input-field');
  await input.fill('Clean dishes');

  await page.keyboard.press('Enter');

  // Locate a todo checkbox
  let todo = await page.locator('#todo-content li input').first();
  await todo.check();

  // Ensure the label contains the correct text
  let incompleteCounter = await page.locator('#incomplete-count').textContent();
  await expect(incompleteCounter).toEqual('2 items left');
});
