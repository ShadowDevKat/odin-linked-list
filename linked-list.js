class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }
    //adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    //returns the total number of nodes in the list
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }
    // returns the node at the given index
    at(index) {
        let count = 0;
        let current = this.head;
        while (current) {
            if (count === index) return current;
            current = current.nextNode;
            count++;
        }

        return null;
    }
    // removes the last element from the list
    pop() {
        if (!this.head) return;

        if (this.head === this.tail) {
            this.head = this.tail = null;
            return;
        }

        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }
        this.tail = current;
        this.tail.nextNode = null;
    }
    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }
    // returns the index of the node containing value, or null if not found.
    find(value) {
        let index = 0;
        let current = this.head;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    toString() { 
        if(!this.head) return "";

        let myString = "";
        let current = this.head;
        while (current) {
            myString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        myString += "null";
        return myString;
    }
}