class EmailValidator {
  isValid (email) {
    return true
  }
}
describe('Email Validator', () => {
  test('should return true if validator returns trye', () => {
    const sut = new EmailValidator()
    const isEmailValid = sut.isValid('valid_email@gmail.com')
    expect(isEmailValid).toBe(true)
  })
})
