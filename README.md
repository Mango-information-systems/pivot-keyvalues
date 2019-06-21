# pivot-keyval

pivot JSON key / value array properties to actual objects.

Example: `{name: 'location', val: 'https://example.com'}` → `{location: 'https://example.com'}`

## Setup

    npm install pivot-keyval

## Usage


### `nestedPath` option

This option allows to pivot an array deeply nested inside an object. Use dots as separator



Example: 

````javascript

const pivot = require('pivot-keyval')

let data = {
	headers: [
		{
			name: 'location'
			, value: 'https://example.com'
		}
		, {
			name: 'content-type'
			, value: 'text/html; charset=UTF-8'
		}
		, {
			name: 'date'
			, value: 'Fri, 1 Jan 2018 10:00:00 GMT'
		}
	]
	, body: {
		// [...]
	}
	
}


pivot(data, { nestedPath: 'headers' })

// returns
// {
// 	headers: {
//		location: 'https://example.com'
// 	    , 'content-type': 'text/html; charset=UTF-8'
// 	    , date: 'Fri, 1 Jan 2018 10:00:00 GMT'
// 	}
// 	, body: {
// 		// [...]
// 	}
// }

````
