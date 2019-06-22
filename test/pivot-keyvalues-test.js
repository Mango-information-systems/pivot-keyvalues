const tape = require("tape")
	, pivot = require("../")

tape("pivot() should work with implicit key / value labels", function(test) {
	let dataset =[[
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
	let dataset =[
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
	
	test.deepEqual(pivot(dataset, { nestedPath: 'payload.headers' }), [
		{
			'one': 1
			, 'two': 'whatever'
				
		}
	])
	test.end()
})

tape("pivot() should support optional keyName and valueName parameters", function(test) {
	let dataset =[[
		{
			title: 'one'
			, measure: 1
		}
		, {
			title: 'two'
			, measure: 'whatever'
		}
	]]
	
	test.deepEqual(pivot(dataset, { keyName: 'title', valueName: 'measure' }), [
		{
			'one': 1
			, 'two': 'whatever'
		}
	])
	
	test.end()
})

tape("pivot() should ignore extra properties", function(test) {
	let dataset =[[
		{
			name: 'one'
			, value: 1
			, comment: 'something'
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
