"use strict";
exports.__esModule = true;
/**
 * Stack data structure implemented with an array
 * @class
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.push = function (val) {
        this.stack.push(val);
    };
    return Stack;
}());
exports.Stack = Stack;
