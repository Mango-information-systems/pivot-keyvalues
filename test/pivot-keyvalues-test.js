const tape = require("tape")
	, pivot = require("../")

tape("pivot() should work with implicit key / value labels", function(test) {
	
	test.plan(1)
	
	let dataset = [
		{
			name: 'website'
			, value: 'https://d3js.org/'
		}
		, {
			name: 'visitors'
			, value: 10000
		}
	]
	
	test.deepEqual(pivot(dataset), {
		website: 'https://d3js.org/'
		, visitors: 10000
	})
	
	test.end()
})

tape("pivot() should work on deeply nested properties via nestedPath option", function(test) {
	
	test.plan(1)
	
	let dataset =
		{
			analytics: {
				details: 'something'
				, summary: [
					{
						name: 'website'
						, value: 'https://d3js.org/'
					}
					, {
						name: 'visitors'
						, value: 10000
					}
				]
			}
		}
	
	test.deepEqual(pivot(dataset, { nestedPath: 'analytics.summary' }), {
		website: 'https://d3js.org/'
		, visitors: 10000
	})
		
	test.end()
})

tape("pivot() should support optional keyName and valueName parameters", function(test) {
	
	test.plan(1)
	
	let dataset =[
		{
			title: 'website'
			, data: 'https://d3js.org/'
		}
		, {
			title: 'visitors'
			, data: 10000
		}
	]
	
	test.deepEqual(pivot(dataset, { keyName: 'title', valueName: 'data' }), {
		website: 'https://d3js.org/'
		, visitors: 10000
	})
	
	test.end()
})

tape("pivot() should ignore extra properties", function(test) {
	
	test.plan(1)
	
	let dataset = [
		{
			name: 'website'
			, value: 'https://d3js.org/'
			, comment: 'bookmarked'
		}
		, {
			name: 'visitors'
			, value: 10000
			, description: 'daily average'
		}
	]
	
	test.deepEqual(pivot(dataset), {
		website: 'https://d3js.org/'
		, visitors: 10000
	})
	
	test.end()
})

tape("pivot() should throw when structure to pivot is not an array", function(test) {
	
	test.plan(4)
		
	test.throws(() => pivot(), /Invalid datatype/)
	test.throws(() => pivot(''), /Invalid datatype/)
	test.throws(() => pivot({}), /Invalid datatype/)
	
	
	let dataset =
		{
			analytics: {
				details: 'something'
				, summary: [
					{
						name: 'website'
						, value: 'https://d3js.org/'
					}
					, {
						name: 'visitors'
						, value: 10000
					}
				]
			}
		}
		
	test.throws(() => pivot(dataset, { nestedPath: 'analytics.details' }), /Invalid datatype/)
	
	test.end()
})
