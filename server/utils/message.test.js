var expect = require("expect");

var { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    var from = "Admin";
    var text = "Testing";
    var message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA("number");
  });
});

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    var latitude = 1;
    var longitude = 10;
    var from = "Admin";
    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.url).toBe(
      `https://www.google.com/maps?q=${latitude},${longitude}`
    );
    expect(message).toInclude({ from });
  });
});
