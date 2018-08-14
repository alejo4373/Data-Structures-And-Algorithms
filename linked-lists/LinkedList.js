"use strict";
exports.__esModule = true;
/**
 * Creates a node that will hold a linked list in itself
 * @class
 */
var Node = /** @class */ (function () {
    function Node(data) {
        this.next = null;
        this.data = data;
    }
    Node.prototype.appendToEnd = function (data) {
        var endNode = new Node(data);
        var node = this;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = endNode;
    };
    Node.prototype.appendAtGivenIndex = function (index, data) {
        var crrIndex = 0; // kind of indexing linked list like arrays
        var newNode = new Node(data);
        var node = this;
        if (index !== 0) {
            while (node.next !== null && crrIndex !== index) {
                node = node.next;
                crrIndex += 1;
            }
            console.log('this is crrNode', node);
            console.log('this is newNode', newNode);
            newNode.next = node.next;
            node.next = newNode;
        }
        else {
            console.log('else');
            newNode.next = this;
            node = newNode;
        }
        return node;
    };
    Node.prototype.printDummyHumanReadable = function () {
        var node = this;
        var result = node.data + '->';
        while (node.next !== null) {
            result += node.next.data + '->';
            node = node.next;
        }
        return result + null;
    };
    return Node;
}());
exports["default"] = Node;
//Initialize linked list
var myLinkedList = new Node(0);
//Fill in linked list with nums 1 to 10
// for(let i = 1; i < 11; i++) {
//   myLinkedList.appendToEnd(i);
// }
//add node at index 5
console.log(myLinkedList.printDummyHumanReadable());
var headChanged = myLinkedList.appendAtGivenIndex(0, 100); //=> 0-> 100->1->2->3->4->5->6->7->8->9->10-> 
// myLinkedList.appendAtGivenIndex(100, 100);//=> 0->1->2->3->4->5->6->7->8->9->10->100-> why does this work?
console.log(headChanged.printDummyHumanReadable());
console.log(myLinkedList.printDummyHumanReadable());
