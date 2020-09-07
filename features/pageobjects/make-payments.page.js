class MakePaymentsPage {
  get payeeField() {
    return browser.$('#sp_payee');
  }

  get accountField() {
    return browser.$('#sp_account');
  }

  get amountField() {
    return browser.$('#sp_amount');
  }

  get dateField() {
    return browser.$('#sp_date');
  }

  get descriptionField() {
    return browser.$('#sp_description');
  }

  get payButton() {
    return browser.$('#pay_saved_payees');
  }
}

module.exports = new MakePaymentsPage();
