const quickSort = array => {
  return array = [...qsort(array)]
};

const partition = (array, low, high) => {
  const pivotPosition = Math.floor((low + high) / 2);
  const pivot = array[pivotPosition].order;
  while(high >= low) {
    while(array[high].order > pivot) {
      high--;
    }
    while(array[low].order < pivot) {
      low++;
    }
    if(high >= low) {
      [array[low], array[high]] = [array[high], array[low]];
      high--;
      low++;
    }
  }
  return low;
}

const qsort = (array, low = 0, high = array.length - 1) => {
  if(low < high) {
    const index = partition(array, low, high);
    qsort(array, low, index - 1);
    qsort(array, index, high);
  }
  return array
}

const toFlat = array => {
  return flatten(array)
}

function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

const binarySearch = (array, searchValue) => {
  let left = -1;
  let right = array.length;

  while(right - left > 1) {
    let middle = Math.floor((right + left) / 2);

    if(array[middle].amount === searchValue) {
      return array[middle];
    }
    if(array[middle].amount > searchValue) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return -1
}

class HashTable {
  static getKeyByName(name){
    return name.charCodeAt(0)
  }
  constructor () {
    this.map = new Map()
  }
  add (value) {
    const key = HashTable.getKeyByName(value.name);

    if(!this.map.has(key)){
      this.map.set(key, []);
    }
    
    this.map.get(key).push(value)
    return key
  }
  find (name) {
    const key = HashTable.getKeyByName(name);
    const employeesMap = this.map.get(key);

    if(!employeesMap){
      return;
    }

    return Array.from(employeesMap.values())
      .find((item) => item.name === name)
  }
  removeByName(name) {
    const key = HashTable.getKeyByName(name);
    let employeesMap = this.map.get(key);

    if(!employeesMap){
      return;
    }

  this.map.set(key, employeesMap
    .filter(item => item.name !== name))
  }
}

module.exports = {
  quickSort,
  toFlat,
  binarySearch,
  HashTable,
}
