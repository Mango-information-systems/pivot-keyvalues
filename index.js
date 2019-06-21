/***************************************
 *
 * Pivot key-values data in an array of JSON object into array of keys and values.
 *
 * @param {object} data array
 * @param {object?} options
 *         * {string?} nestedPath level at which the reverse pivot is expected to be done
 *         * {string?} keyName - default to 'name'
 *         * {string?} valueName - default to 'value'
 * 
 * 
 **************************************/

export default function(data, opts) {
		
		// Initialize options
		opts = opts || {}
		
		opts.keyName = opts.keyName || 'name' 
		opts.valueName = opts.valueName || 'value'
		//~opts.nestedPath = opts.nestedPath || null
		
		// Iterate to the data array	
		data.forEach(function(record, i) {
		
			let entry = record
				, transposed = {}
			
			if (typeof opts.nestedPath !== 'undefined') {
				// navigate down the tree until specified path key is reached
			
			console.log(opts.nestedPath, typeof opts.nestedPath)
			
				opts.nestedPath = opts.nestedPath.split('.')
				
				opts.nestedPath.forEach(function(pathElem) {
					entry = entry[pathElem]
				})
			}
			
			if (typeof entry !== 'undefined') {
			
				entry.forEach(function(obj) {
					transposed[obj[opts.keyName]] = obj[opts.valueName]
				})
				
				data[i] = transposed
			}
			
		})
		
		return data
		
}
