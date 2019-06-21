var tape = require("tape")
	, pivot = require("../")

tape("pivot() should work with implicit key / value labels", function(test) {
	var dataset =[[
		{
			name: 'one'
			, value: 1
		}
		, {
			name: 'two'
			, value: 'whatever'
		}
	]]
	
	test.deepEqual(pivot(dataset), [
		{
			'one': 1
			, 'two': 'whatever'
				
		}
	])
	
	test.end()
})

tape("pivot() should work on deeply nested properties via nestedPath option", function(test) {
	var dataset =[
		{
			payload: {
				body: 'whatever'
				, headers: [
					{
						name: 'one'
						, value: 1
					}
					, {
						name: 'two'
						, value: 'whatever'
					}
				]
			}
		}
	]
	
	test.deepEqual(pivot(dataset, {nestedPath: 'payload.headers'}), [
		{
			'one': 1
			, 'two': 'whatever'
				
		}
	])
	test.end()
})

tape("pivot() should support optional keyName and valueName parameters", function(test) {
	// todo
	test.end()
})

tape("pivot() should ignore extra properties", function(test) {
	// todo
	test.end()
})
