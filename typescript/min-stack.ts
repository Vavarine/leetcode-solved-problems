class MinStack {
  list: number[];
  min: number[];

  constructor() {
    this.list = [];
    this.min = [];
  }

  push(val: number): void {
    this.list[this.list.length] = val;
    if (this.min.length === 0 || val <= this.min[this.min.length - 1])
      this.min[this.min.length] = val;
  }

  pop(): void {
    if (this.list[this.list.length - 1] === this.min[this.min.length - 1]) this.min.pop();
    this.list.pop();
  }

  top(): number {
    return this.list[this.list.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
