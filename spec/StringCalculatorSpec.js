describe("string calculator", function() {

	var tests = [
    {
      candidate: "",
      expectation: 0
    },
    {
      candidate: "1",
      expectation: 1
    },
    {
      candidate: "2",
      expectation: 2
    },
    {
      candidate: "1,2",
      expectation: 3
    },
    {
      candidate: "1,3",
      expectation: 4
    },
    {
      candidate: "1,2,3",
      expectation: 6
    },
    {
      candidate: "1,2,3,4",
      expectation: 10
    }
  ];

	function testString(candidate, expectation){
    it("results as " + expectation + " when input is " + ( candidate || 'empty' ), function() {
      expect(add(candidate)).toBe(expectation);  
    });
  }
  
  for(i in tests){
  	testString(tests[i].candidate, tests[i].expectation);
  }
  
});
