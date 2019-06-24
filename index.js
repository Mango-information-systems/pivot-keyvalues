/***************************************
 *
 * Pivot an array of key-values into a Javascript object.
 *
 * @param {object} object containing an array of data to be pivoted
 * @param {object?} options
 *   * {string?} nestedPath level at which the reverse pivot is expected to be done
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
	
	let entries = data
	
	if (typeof options.nestedPath !== 'undefined') {
		// navigate down the tree until specified path key is reached
	
		options.nestedPath = options.nestedPath.split('.')
		
		options.nestedPath.forEach(function(pathElem) {
			entries = entries[pathElem]
		})
	}
	
	if (!Array.isArray(entries))
		throw new TypeError('Invalid datatype - structure to pivot must be an array')
	else {
		// perform the pivot
		
		let pivoted = {}

		entries.forEach(function(obj) {
			pivoted[obj[options.keyName]] = obj[options.valueName]
		})
		
		return pivoted
	
	}
}
