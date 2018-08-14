"use strict";
exports.__esModule = true;
/**
 * Creates a node that will hold a linked list in itself
 * @class
 */
var LinkedListAndNode = /** @class */ (function () {
    function LinkedListAndNode(data) {
        this.next = null;
        this.data = data;
    }
    LinkedListAndNode.prototype.appendToEnd = function (data) {
        var endNode = new LinkedListAndNode(data);
        var node = this;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = endNode;
    };
    //Returns a new copy of the linked list, modifies the original only if the index is not 0
    LinkedListAndNode.prototype.appendAtIndex = function (index, data) {
        var crrIndex = 0; // kind of indexing linked list like arrays
        var newNode = new LinkedListAndNode(data);
        var node = this;
        if (index !== 0) {
            while (node.next !== null && crrIndex !== index - 1) {
                node = node.next;
                crrIndex += 1;
            }
            newNode.next = node.next;
            node.next = newNode;
        }
        else {
            newNode.next = this;
            node = newNode;
            // If inserted a new head(index 0) return that new head with the rest of the LL
            // attached to node.next  
            return node;
        }
        // If the insertion happened anywhere else but in the first node(head)
        // I need to return the modified copy
        return this;
    };
    LinkedListAndNode.prototype.printDummyHumanReadable = function () {
        var node = this;
        var result = node.data + '->';
        while (node.next !== null) {
            result += node.next.data + '->';
            node = node.next;
        }
        return result + null;
    };
    LinkedListAndNode.prototype.atIndex = function (index) {
        var node = this;
        var i = 0;
        while (i < index) {
            node = node.next;
            i += 1;
        }
        return node.data;
    };
    return LinkedListAndNode;
}());
exports.LinkedListAndNode = LinkedListAndNode;
var myLinkedList = new LinkedListAndNode(0);
for (var i = 1; i < 11; i++) {
    myLinkedList.appendToEnd(i);
}
// If i want to add at the beginning(index 0) then my appendAtIndex returns
// a new linked list with the first node being the node I wanted to insert
// an the rest being what already was in the original myLinkedList and the function
// doesn't modify the original linked list
var newLL = myLinkedList.appendAtIndex(0, 100);
console.log('myLinkedList (original not modified):', myLinkedList.printDummyHumanReadable());
console.log('newLL(new modified):', newLL.printDummyHumanReadable());
// Here is the thing when I appendAtIndex to an index different than 0 this edits 
// my original linked list and also returns a new copy. I think that is tolerable
// like in the Array Class some functions modify the original and some return a new 
// modified copy
var otherLL = myLinkedList.appendAtIndex(5, 100);
console.log('myLinkedList:', myLinkedList.printDummyHumanReadable());
console.log(otherLL.printDummyHumanReadable());
//Another way will to insert at the beginning will be
var otherOtherLL = new LinkedListAndNode(100);
otherOtherLL.next = myLinkedList;
console.log('otherOtherLL: ', otherOtherLL.printDummyHumanReadable());
