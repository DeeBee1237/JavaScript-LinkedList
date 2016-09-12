/**
 * Created by Dragos on 8/14/16.
 */

/**
 *  Function for creating new node objects in the linked list
 *
 * @param value: the value that this node has
 * @param next: the next node that this node points to
 * @constructor
 */
function Node (value,next) {
    this.value = value;
    this.next = next;
}

/**
 *  The actual linked list, it will have a pointer to a node that will be the front of the list
 *
 * @constructor
 */
function LinkedList () {
    this.list = undefined;
    this.addNode = add;
}

// the linked list object:
var linkedList = new LinkedList ();


/**
 *  add a new node to the linked list
 *
 * @param value: the value that will be in this newly added node
 */
var add = function (value) {
    var newNode = new Node(value, undefined);

    if (linkedList.list == undefined) {
        linkedList.list = newNode;
    }


    else {
        var currentNode = linkedList.list;
        while (currentNode.next != undefined) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
};


/**
 * Allows users to add a collection of values to the linked list
 *
 * @param items: the collection of items to be added
 */
var addCollection = function (items) {
    for (i in items)
        add(items[i]);
};

/**
 * Does the linked list contain a node with the specified value ?
 * @param value
 * @param list: the linked list to check
 * @returns {boolean}
 */

var contains = function (list,value) {
    if (linkedList.list == undefined)
        return false;
    if (list.value == value)
        return true;

    if (list.next == undefined)
        return false;

    return contains (list.next,value);
};

/**
 *  removes a node from the linked list with the specified value:
 * @param value
 */
var remove = function (value) {

    // if the list doesn't contain the value, we can't delete it!
    if (!contains(linkedList.list,value)) {
        console.log("This node is not inside the linked list! ");
        return;
    }

    // if the value we want to remove is in the node at the start of the linked list:
    if (linkedList.list.value == value) {
        linkedList.list = linkedList.list.next;
        return;
    }

    var currentNode = linkedList.list;
    while (currentNode.next != undefined) {

        if (currentNode.next.value == value) {
            currentNode.next = currentNode.next.next;
            break;
        }

        currentNode = currentNode.next;

        if (currentNode == undefined)
            break;
    }
};

/**
 * Allows users to remove a collection of items from the linked list
 *
 * @param items
 */
var removeCollection = function (items) {
    for (i in items)
        remove(items[i]);
};


/**
 * return the array representation of this linked list:
 */
var toArray = function () {
    var array = [];
    var position = 0;

    var currentNode = linkedList.list;
    while (currentNode != undefined) {
        array[position] = currentNode.value;

        position++;
        currentNode = currentNode.next;
    }

    return array;
};

/**
 * Helper function for get(N), this code takes in a node a count variable and a target
 * it recursively increments the node and the count, until the count is the same as target
 * at which point that node is returned
 *
 * @param node
 * @param count
 * @param target
 * @returns {*}
 */
var obtainNode = function (node,count,target) {
    if (node == null)
        return null;
    if (count == target)
        return node;
    return obtainNode(node.next,count+1,target);
};

/**
 * returns the node at position n, in the linked list
 *
 * @param n
 * @returns {*}
 */
var get = function (n) {
    var nodeAtN =  obtainNode(linkedList.list,0,n);
    if (nodeAtN == null)
        return null;

    return nodeAtN;
};

/**
 * Print the linked list to the console:
 * @param node
 */
var printList = function (node) {
    if (node == undefined) {
        console.log("the list is empty");
        return;
    }

    console.log(node.value);

    if (node.next == undefined)
        return;

    printList(node.next);
};


// Test code:


// console.log(get(173).value);

add(1);
add(2);
add(3);
add(4);
// console.log(contains(linkedList.list,4));

addCollection([8,9,10]);

removeCollection([1,2,3]);

printList(linkedList.list);


console.log(contains(linkedList.list,10));
//console.log(getFactors(10));


// console.log(get(2).value);
// console.log(contains(linkedList.list,10));
