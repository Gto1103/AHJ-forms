// import cardIssuer from '../cardIssuer';
// import cardValidator from '../cardValidator';

// test.each([
//   ['mir', '2', 'mir'],
//   ['visa', '4', 'visa'],
//   ['american-express', '34', 'american-express'],
//   ['dinnersclub', '303', 'dinnersclub'],
//   ['jcb', '3529', 'jcb'],
//   ['discover', '6011', 'discover'],
//   ['discover', '622127', 'discover'],
//   ['master-card', '5038', 'master-card'],
//   ['master-card', '222100', 'master-card'],
//   ['null', '123', null],
//   ['null', '0000', null],
// ])(('Check for cardIssuer() %s'), (_, input, expected) => {
//   const receive = cardIssuer(input);
//   expect(receive).toBe(expected);
// });

// test.each([
//   ['valid', '20223344545544554', true],
//   ['invalid', '425576765577', false],

// ])(('Check cardValidator() for %s'), (_, input, expected) => {
//   const receive = cardValidator(input);
//   expect(receive).toBe(expected);
// });
