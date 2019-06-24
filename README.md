# pivot-keyvalues [![Build Status](https://travis-ci.org/Mango-information-systems/pivot-keyvalues.svg?branch=master)](https://travis-ci.org/Mango-information-systems/pivot-keyvalues)

pivot an array of keys and value entries into actual objects.

Example: `[{name: 'url', value: 'https://d3js.org'}]` → `{url: 'https://d3js.org'}`

## Why

Converting arrays of keys / values into objects has the following benefits:

* values can be looked up by key, instead of having to iterate through the array (likely multiple times).
* the data structure is more compact.

![Why-pivot](/docs/why-pivot-keyvalues.png?raw=true)

## Setup

    npm install pivot-keyvalues

## Usage

### pivot(data, options <small>nullable</small>) → {object}

#### Parameters

* `data` object containing an array of data to be pivoted - either at root level, or nested.
* `options` object (optional):
  * `keyName` string - default to 'name'
  * `valueName` string - default to 'value'
  * `nestedPath` string - level at which the reverse pivot is expected to be done. Use dots notation.


#### Return

Original object with transformed data structure: array is transformed into an object

#### Examples


##### specifying the labels of input properties with `keyName` and `valueName`


````javascript

const pivot = require('pivot-keyvalues')

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

pivot(dataset, { keyName: 'title', valueName: 'data' })

// Returns
//
// {
// 	website: 'https://d3js.org/'
// 	, visitors: 10000
// }

````

##### pivoting at a deep nested level with `nestedPath`

In the example below, the dataset to pivot is nested under `analytics.summary` property structure.

````javascript

let dataset =
	{
		analytics: {
			details: 'something'
			, summary: [
				{
					name: 'website'
					, value: 'http://stackoverflow.com/'
				}
				, {
					name: 'visitors'
					, value: 10000
				}
			]
		}
	}

pivot(dataset, { nestedPath: 'analytics.summary' })

// Returns
//
// {
// 	website: 'http://stackoverflow.com/'
// 	, visitors: 10000
// })

````
