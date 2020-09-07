class ExchangePage {
  get purchaseForeinCurrencyTab() {
    return browser.$('#tabs > ul > li:nth-child(3)');
  }

  get currencySelectField() {
    return browser.$('#pc_currency');
  }

  get amountField() {
    return browser.$('#pc_amount');
  }

  get usDollarRadioButton() {
    return browser.$('#pc_inDollars_true');
  }

  get purchaseButton() {
    return browser.$('#purchase_cash');
  }
}

module.exports = new ExchangePage();
