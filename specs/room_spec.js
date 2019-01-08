const assert = require('assert');
const Room = require('../room');

describe('Room', function () {

  let room;



  beforeEach(function() {
    room = new Room(25, false, true)
  });

  it('should have an area', function() {
    assert.strictEqual(room.area, 25);
  });

  it('room painted', function() {
    assert.strictEqual(room.paint, false);
  });

  it('should be able to be painted', function() {
    assert.strictEqual(room.paintable, true);
  });


});
