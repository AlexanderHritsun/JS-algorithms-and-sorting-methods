class Stack {
    constructor(array) {
        this.array = array;
    }
    getElement() {
        return this.array[this.array.length -1];
    }
    setElement(element) {
        this.array.push(element);
        console.log(this.array);
    }
    removeElement() {
        this.array.pop();
        console.log(this.array);
    }
}

const test_stack = new Stack([1,2,3,5,7]);

console.log(test_stack.getElement());
test_stack.setElement(1);
test_stack.removeElement();