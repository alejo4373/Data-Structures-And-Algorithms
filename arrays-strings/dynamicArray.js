class DynamicArray {
  constructor(size) {
    this.array = new Array(size);
    this.length = 0;
    this.limit = size;
  }

  resize() {
    let newArray = new Array(this.limit * 2);
    for (let i = 0; i < this.length; i++) {
      newArray[i] = this.array[i];
    }
    this.array = newArray;
    this.limit = this.limit * 2;
  }

  insert(data) {
    if (this.length === this.limit) {
      this.resize();
    }
    this.array[this.length] = data;
    this.length++;
  }

  index(index) {
    if (index > this.limit) {
      throw new Error('Index out of bounds');
    }
    return this.array[index];
  }
  
  delete(index) {
    for (let i = index; i < this.length; i++) {
      if (this.array[i + 1] !== undefined) {
        this.array = this.array[i + 1];
      }
    }
    this.length = this.length - 1
  }
}
module.exports = DynamicArray