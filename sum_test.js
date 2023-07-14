const { I } = inject();

Feature('sum');

Scenario('test something', ({ I }) => {
    const buttons = {
        clear: '~clear',
        number0: '~0',
        number1: '~1',
        number2: '~2',
        number3: '~3',
        number4: '~4',
        number5: '~5',
        operation: {
            sum: '~plus',
            subtract: '~minus',
            multiply: '~multiply',
            division: '~divide',
            result: '~equals'
        }

    }

    I.click(buttons.clear)
    I.click(buttons.number0)

});
