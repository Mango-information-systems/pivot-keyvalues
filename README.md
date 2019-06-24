# pivot-keyvalues [![Build Status](https://travis-ci.org/Mango-information-systems/pivot-keyvalues.svg?branch=master)](https://travis-ci.org/Mango-information-systems/pivot-keyvalues)

pivot JSON key / value array properties to actual objects.

Example: `{name: 'location', value: 'https://example.com'}` → `{location: 'https://example.com'}`

## Why

Converting arrays of keys / values into objects has the following benefits:

* values can be looked up by key, instead of having to iterate through an array.
* the data structure is more compact.

![Why-pivot](/docs/why-pivot-keyvalues.png?raw=true)


## Setup

    npm install pivot-keyvalues

## Usage


### `nestedPath` option

This option allows to pivot an array deeply nested inside an object. Use dots notation.


Example: 

````javascript

const pivot = require('pivot-keyvalues')

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
