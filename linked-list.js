class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        // head returns the first node in the list
        // tail returns the last node in the list
    }

    //adds a new node containing value to the end of the list
    append(value) { }
    //adds a new node containing value to the start of the list
    prepend(value) { }
    //returns the total number of nodes in the list
    size() { }
    // returns the node at the given index
    at(index) { }
    // removes the last element from the list
    pop() { }
    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value) { }
    // returns the index of the node containing value, or null if not found.
    find(value) { }
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() { }
}