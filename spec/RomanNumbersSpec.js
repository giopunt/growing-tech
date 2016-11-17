fdescribe("Roman Numbers", function(){

  var tests = [
    {
      candidate: 1,
      expectation: "I"
    },
    {
      candidate: 2,
      expectation: "II"
    },
    {
      candidate: 4,
      expectation: "IV"
    },
    {
      candidate: 5,
      expectation: "V"
    },
    {
      candidate: 6,
      expectation: "VI"
    },
    {
      candidate: 7,
      expectation: "VII"
    },
    {
      candidate: 9,
      expectation: "IX"
    },
    {
      candidate: 10,
      expectation: "X"
    },
    {
      candidate: 11,
      expectation: "XI"
    },
    {
      candidate: 14,
      expectation: "XIV"
    },
    {
      candidate: 40,
      expectation: "XL"
    },
    {
      candidate: 49,
      expectation: "XLIX"
    },
    {
      candidate: 59,
      expectation: "LIX"
    },
    {
      candidate: 99,
      expectation: "XCIX"
    },
    {
      candidate: 499,
      expectation: "CDXCIX"
    },
    {
      candidate: 599,
      expectation: "DXCIX"
    },
    {
      candidate: 999,
      expectation: "CMXCIX"
    }
  ];

  function testString(candidate, expectation){
    it("outputs " + expectation + " when input is " + candidate, function() {
      expect(romanNumbers(candidate)).toBe(expectation);  
    });
  }
    
  for(i in tests){
    testString(tests[i].candidate, tests[i].expectation);
  }

});