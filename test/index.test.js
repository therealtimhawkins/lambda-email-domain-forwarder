const LambdaTester = require('lambda-tester');
const handler = require('../LambdaFunction/index').handler;

describe('handler', () => {
  it('should be called correctly', (done) => {
    LambdaTester(handler)
      .event({message: 'Lambda Testing Message!'})
      .expectResult(result => {
        expect(result).toEqual('Lambda Testing Message!');
      })
      .verify(done);
  });
});
