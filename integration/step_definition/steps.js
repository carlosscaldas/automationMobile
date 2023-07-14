const { buttons } = require("../page/home_page");

const { I, home_page } = inject();
Given('Clicking a first number', () => {
  home_page.toClick(buttons.number1)
});

Given('Clicking a sum', () => {
  home_page.toClick(buttons.operation.sum)
});

When('Clicking a secound number', () => {
  home_page.toClick(buttons.number2)
});

Then('See the result', async () => {
  let resultPreview = await home_page.validateResult(buttons.resultPreview)
  if (resultPreview == '3') {
    console.log('OK')
  }
});
