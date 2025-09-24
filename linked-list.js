class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // adds a new node containing value to the end of the list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }
    // adds a new node containing value to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    // returns the total number of nodes in the list
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
    // returns true if the passed in value is in the list and otherwise returns false.
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
        if (!this.head) return "";

        let myString = "";
        let current = this.head;
        while (current) {
            myString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        myString += "null";
        return myString;
    }

    // Extra Credit
    // that inserts a new node with the provided value at the given index.
    insertAt(value, index) {
        const length = this.size();
        if (index < 0 || index > length) return; // invalid index

        // insert at head
        if (index === 0) {
            this.prepend(value);
            return;
        }

        // insert at tail
        if (index === length) {
            this.append(value);
            return;
        }

        // insert in the middle
        const newNode = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.nextNode;
        }

        newNode.nextNode = prev.nextNode;
        prev.nextNode = newNode;
    }
    // that removes the node at the given index.
    removeAt(index) {
        const length = this.size();
        if (index < 0 || index >= length) return; // invalid index

        // Remove head
        if (index === 0) {
            this.head = this.head.nextNode;
            if (!this.head) this.tail = null; // list became empty
            return;
        }

        // Remove tail
        if (index === length - 1) {
            this.pop();
            return;
        }

        // Remove from middle
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.nextNode;
        }
        prev.nextNode = prev.nextNode.nextNode;
    }
}

// Test cases generated using ChatGPT
function runTests() {
    const list = new LinkedList();
    console.log("== Empty list tests ==");
    console.assert(list.size() === 0, "Size of empty list should be 0");
    console.assert(list.at(0) === null, "at(0) on empty list should be null");
    console.assert(list.toString() === "", "toString on empty list should be empty string");
    console.assert(!list.contains(5), "contains should return false on empty list");
    console.assert(list.find(5) === null, "find should return null on empty list");
    list.pop(); // should not crash
    list.removeAt(0); // should not crash

    console.log("== Append tests ==");
    list.append(1);
    console.assert(list.size() === 1, "Size should be 1 after append");
    console.assert(list.head.value === 1 && list.tail.value === 1, "Head and tail should be same after single append");
    list.append(2);
    list.append(3);
    console.assert(list.tail.value === 3, "Tail should be 3 after appending more");
    console.assert(list.size() === 3, "Size should be 3");
    console.assert(list.toString() === "( 1 ) -> ( 2 ) -> ( 3 ) -> null", "toString after appends");

    console.log("== Prepend tests ==");
    list.prepend(0);
    console.assert(list.head.value === 0, "Head should be 0 after prepend");
    console.assert(list.size() === 4, "Size should be 4 after prepend");
    console.assert(list.toString() === "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> null", "toString after prepend");

    console.log("== at() tests ==");
    console.assert(list.at(0).value === 0, "at(0) should be 0");
    console.assert(list.at(3).value === 3, "at(3) should be 3");
    console.assert(list.at(5) === null, "at(5) out of range should be null");

    console.log("== contains/find tests ==");
    console.assert(list.contains(2), "contains(2) should be true");
    console.assert(!list.contains(9), "contains(9) should be false");
    console.assert(list.find(2) === 2, "find(2) should return index 2");
    console.assert(list.find(9) === null, "find(9) should return null");

    console.log("== pop tests ==");
    list.pop();
    console.assert(list.tail.value === 2, "Tail should be 2 after pop");
    console.assert(list.size() === 3, "Size should be 3 after pop");
    list.pop();
    list.pop();
    list.pop(); // popping until empty
    console.assert(list.size() === 0, "Size should be 0 after popping all");
    console.assert(list.head === null && list.tail === null, "Head and tail should be null when empty");

    console.log("== insertAt tests ==");
    list.append("a");
    list.append("c");
    list.insertAt("b", 1); // insert in middle
    console.assert(list.toString() === "( a ) -> ( b ) -> ( c ) -> null", "Insert in middle");
    list.insertAt("start", 0); // insert at head
    console.assert(list.head.value === "start", "Insert at head");
    list.insertAt("end", list.size()); // insert at tail
    console.assert(list.tail.value === "end", "Insert at tail");
    list.insertAt("invalid", 99); // invalid index
    console.assert(list.toString().includes("invalid") === false, "Invalid insert ignored");

    console.log("== removeAt tests ==");
    list.removeAt(0); // remove head
    console.assert(list.head.value === "a", "Head after removing start");
    list.removeAt(list.size() - 1); // remove tail
    console.assert(list.tail.value === "c", "Tail after removing end");
    list.removeAt(1); // remove middle ("b")
    console.assert(!list.contains("b"), "Middle removed correctly");
    list.removeAt(42); // invalid index
    console.assert(list.size() === 2, "Invalid remove ignored");

    console.log("All tests passed ✅");
}

// runTests();