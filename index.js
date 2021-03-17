const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr, alert) {
      Object.values(testArr).forEach(item => alert(item))
      return testArr
    },

    map: function(arr, cb) {
      return Object.values(arr).map(item => cb(item))
    },

		reduce: function(c = [], callback = () => {}, acc) {
			let collection = c.slice(0)

			if (!acc) {
				acc = collection[0]
				collection = collection.slice(1)
			}


			for (let i = 0; i < collection.length; i++) {
				acc = callback(acc, collection[i], collection)
			}
			return acc;
		},


    find: function (arr, cb) {
      return Object.values(arr).find(cb)
    },
    filter: function (arr, cb) {
      return Object.values(arr).filter(cb)
    },
    size: function (arr) {
      return Object.values(arr).length
    },
    first: function (items, end=false) {
      const arr = Object.values(items)
      return end ? arr.slice(0,end) : arr[0]
    },
    last: function (items, end=false) {
      const arr = Object.values(items)
      return end ?  arr.slice(-end) : arr.pop()
    },
    compact: function (items) {
      return Object.values(items).filter(item => !!item)
    },
    sortBy: function(collection, callback) {
      const newArr = [...collection]
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },


    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },
    values: function (items) {
      return  Object.values(items)
    },
    keys: function (items) {
      return  Object.keys(items)
    },


    functions: function(obj) {
      return Object.keys(obj).filter(key => typeof obj[key] === 'function')
    },


  }
})()

fi.libraryMethod()
