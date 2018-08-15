"use strict";
exports.__esModule = true;
/**
 * Creates a node that will hold data and a reference to next
 * @class
 */
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.next = null;
        this.data = data;
    }
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
/**
 * Creates a LinkedList that will hold references to the head and tail nodes
 * @class
 */
var LinkedList = /** @class */ (function () {
    function LinkedList(data) {
        this.head = null;
        this.tail = null;
        this.head = new LinkedListNode(data);
        this.tail = this.head;
    }
    LinkedList.prototype.appendFirst = function (data) {
        var newHead = new LinkedListNode(data);
        newHead.next = this.head;
        this.head = newHead;
    };
    LinkedList.prototype.appendToEnd = function (data) {
        var newNode = new LinkedListNode(data);
        this.tail.next = newNode;
        this.tail = newNode;
    };
    LinkedList.prototype.appendAtIndex = function (index, data) {
        var crrIndex = 0; // kind of indexing linked list like arrays
        var newNode = new LinkedListNode(data);
        var node = this.head;
        if (index !== 0) {
            while (node.next !== null && crrIndex !== index - 1) {
                node = node.next;
                crrIndex += 1;
            }
            newNode.next = node.next;
            node.next = newNode;
            //Check if were at the tail to update this.tail
            if (newNode.next === null) {
                this.tail = newNode;
            }
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    };
    /**
     * Finds node that satisfies the callback test
     * @param callback function to execute on each node, taking the current node as argument
     * @returns {LinkedListNode} that satisfies the provided testing function. Otherwise undefined
     */
    LinkedList.prototype.find = function (callback) {
        var crrNode = this.head;
        while (crrNode.next !== null && !result) {
            if (callback(crrNode)) {
                return crrNode;
            }
            crrNode = crrNode.next;
        }
        return undefined;
    };
    LinkedList.prototype.printHumanReadable = function () {
        var node = this.head;
        var result = node.data + '->';
        while (node.next !== null) {
            result += node.next.data + '->';
            node = node.next;
        }
        return result + null;
    };
    LinkedList.prototype.atIndex = function (index) {
        var node = this.head;
        var i = 0;
        while (i < index) {
            node = node.next;
            i += 1;
        }
        return node.data;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
console.log('launching ==>');
var testLinkedList = new LinkedList(0);
for (var i = 1; i < 11; i++) {
    testLinkedList.appendToEnd(i);
}
console.log(testLinkedList.printHumanReadable());
var result = testLinkedList.find(function (n) { return n.data === 500; });
console.log(result);
