var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Pat";
    var text = "Testing";
    var message = generateMessage("Pa", text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});