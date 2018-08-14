"use strict";
exports.__esModule = true;
/**
 * Creates a node that will hold a linked list in itself
 * @class
 */
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.next = null;
        this.data = data;
    }
    LinkedListNode.prototype.appendToEnd = function (data) {
        var endNode = new LinkedListNode(data);
        var node = this;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = endNode;
    };
    /**
     * appends at a given "index" and returns the new linked list
     * does not modify the original
     * @param index number
     * @param data any
     */
    //This is giving me problems I should have a LinkedList class wrapping the Node
    //because what if you want to update index 0 which will be this (the head)
    LinkedListNode.prototype.appendAtGivenIndex = function (index, data) {
        var crrIndex = 0; // kind of indexing linked list like arrays
        var newNode = new LinkedListNode(data);
        var node = this;
        if (index !== 0) {
            while (node.next !== null && crrIndex !== index - 1) {
                node = node.next;
                crrIndex += 1;
            }
            console.log('crrNode', node);
            newNode.next = node.next;
            node.next = newNode;
        }
        else {
            newNode.next = this;
            node = newNode;
        }
        return node;
    };
    LinkedListNode.prototype.printDummyHumanReadable = function () {
        var node = this;
        var result = node.data + '->';
        while (node.next !== null) {
            result += node.next.data + '->';
            node = node.next;
        }
        return result + null;
    };
    LinkedListNode.prototype.atIndex = function (index) {
        var node = this;
        var i = 0;
        while (i < index) {
            node = node.next;
            i += 1;
        }
        return node.data;
    };
    return LinkedListNode;
}());
exports.LinkedListNode = LinkedListNode;
var myLinkedList = new LinkedListNode(0);
for (var i = 1; i < 11; i++) {
    myLinkedList.appendToEnd(i);
}
var newLL = myLinkedList.appendAtGivenIndex(5, 100);
console.log(myLinkedList.printDummyHumanReadable());
console.log(newLL.printDummyHumanReadable());
