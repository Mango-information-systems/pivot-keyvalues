/***************************************
 *
 * Pivot an array of key-values into a Javascript object.
 *
 * @param {object} data array to be pivoted
 * @param {object?} options
 *   * {string?} keyName - default to 'name'
 *   * {string?} valueName - default to 'value'
 * 
 * @return {object} Original object with transformed data structure: array is transformed into an object
 * 
 **************************************/

export default function pivot(data, options) {
		
	// Initialize options
	options = options || {}
	
	options.keyName = options.keyName || 'name' 
	options.valueName = options.valueName || 'value'
	
	if (!Array.isArray(data))
		throw new TypeError('Invalid datatype - structure to pivot must be an array')
	else {
		// perform the pivot
		
		let pivoted = {}

		data.forEach(function(obj) {
			pivoted[obj[options.keyName]] = obj[options.valueName]
		})

			return pivoted
	
	}
}
