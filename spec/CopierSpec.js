fdescribe("Copier tested with Mocks and Stubs", function() {

	var tests = [
		{ 
			description: "when the source is 'A'",
			itText: "should copy 'A' to the destination",
			expectedVal: ['A'],
			sourceValue: ['A']
		},
		{ 
			description: "when the source is 'AB'",
			itText: "should copy 'A' and then 'B' to the destination in seperate calls",
			expectedVal: ['A', 'B'],
			sourceValue: ['A', 'B']
		},
		{ 
			description: "when the source is 'AB' and ends in a new line",
			itText: "should copy until the source is a newline character",
			expectedVal: ['A', 'B'],
			sourceValue: ['A', 'B', '\n']
		}
	];

	tests.forEach(function(test){

		describe( test.description, function() {

			it( test.itText, function(){
				var source = {
					getChar: function(){
						return;
					}
				};
				var destination = jasmine.createSpyObj('destination', ['setChar']);

				spyOn(source, "getChar").and.returnValue(test.sourceValue.shift());

				var myCopier = new Copier(source, destination);
				myCopier.copy();
				// expect(destination.value).toEqual(test.expectedVal);
				expect(destination.setChar.calls.count()).toBe(test.expectedVal.length);
			});
		});
	});
});

describe("Copier tested with Spy and Fake", function(){

	var source = {
		value: [],
		getChar: function(){
			return this.value.shift();
		}
	};

	var destination = {
		value: [],
		invocations: 0,
		setChar: function(char){
			this.value.push(char);
			this.invocations++;
		}
	};

	beforeEach(function(){
		source.value = [];
		destination.value = [];
		destination.invocations = 0;
	});

	var tests = [
		{ 
			description: "when the source is 'A'",
			itText: "should copy 'A' to the destination",
			expectedVal: ['A'],
			sourceValue: ['A']
		},
		{ 
			description: "when the source is 'AB'",
			itText: "should copy 'A' and then 'B' to the destination in seperate calls",
			expectedVal: ['A', 'B'],
			sourceValue: ['A', 'B']
		},
		{ 
			description: "when the source is 'AB' and ends in a new line",
			itText: "should copy until the source is a newline character",
			expectedVal: ['A', 'B'],
			sourceValue: ['A', 'B', '\n']
		}
	];

	tests.forEach(function(test){

		describe( test.description, function(){
			it( test.itText, function(){

				source.value  = test.sourceValue;

				var myCopier = new Copier(source, destination);
				
				myCopier.copy();
				expect(destination.value).toEqual(test.expectedVal);
				expect(destination.invocations).toEqual(test.expectedVal.length);
			});
		});
	});
});