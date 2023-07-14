const { I } = inject();

module.exports = {
  buttons: {
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
    },
    resultPreview: '#com.google.android.calculator:id/result_preview',
    resultFormula: 'com.google.android.calculator:id/formula'

  },

  toClick(button) {
    I.tap(button)
  },

  validateResult(button) {
    I.seeElement(button)
    let previewResult =  I.grabTextFrom(button)
    return previewResult
  }
}
