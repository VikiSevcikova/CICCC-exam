// given head of a linked list
//linked list starts with 1 item, which has 2 attribute, first is the value and second is the next item (to which it points)
//also are given 2 integers m and n, where m is a number of items to keep and n is a number of items to remove in array


class ListItem{
    constructor(value, next = null){
        this.value = value,
        this.next = next
    }
}

function printList(head) {
    let item = head;
    while (item != null) {
        console.log(item.value+" ");
        item = item.next;
    }
}
    

function getModifiedLinkedList1(head, m, n){
    //list has only one item
    if(head === null || head.next === null) return head;

    let currentItem = head;
    let temp = head;
    let count = 1;

    while(currentItem != null){
        //if count if less than m then keep the item, and set temp to the next item
        if(count <= m && currentItem != null){
            currentItem = temp;
            temp = temp.next;
        // if the count is more than the items (m) we want to keep and less than the m+n, just skip the items
        }else if ((count > m  && count <= m+n) && temp !== null){
            temp = temp.next;
        }

        //if the count is m+n, then reset the count and set the next item to the item on which we are with our temp variable
        if (count === (m+n)){
            count = 1;
            currentItem.next = temp;
            currentItem = temp;
        }else{
            count++;
        }
        
    }
    printList(head);
}

function getModifiedLinkedList2(head, m, n){
    if(head === null || head.next === null) return head;
    
    let currentItem = head;
    let temp;
    while (currentItem !== null){
        console.log(currentItem.value)
        //skip m items, because we want to keep them
        for(let i = 1; i < m && currentItem !== null; i++){
            currentItem = currentItem.next;
        }
        //if it is not the end of the list then continue
        if(currentItem !== null){
            //start with the next item and "delete" the n items, so just set the temp to next
            temp = currentItem.next;
            for(let i = 1; i<= n && temp !== null; i++){
                temp = temp.next;
            }
            //after the for loop set the last item as the next item of the current item in our list
            currentItem.next = temp;
            //to start next iteration with the same item
            currentItem = temp;
        }
    }
    printList(head);
}

let next12 = new ListItem(13, null);
let next11 = new ListItem(12, next12);
let next10 = new ListItem(11, next11);
let next9 = new ListItem(10, next10);
let next8 = new ListItem(9, next9);
let next7 = new ListItem(8, next8);
let next6 = new ListItem(7, next7);
let next5 = new ListItem(6, next6);
let next4 = new ListItem(5, next5);
let next3 = new ListItem(4, next4);
let next2 = new ListItem(3, next3);
let next1 = new ListItem(2, next2);
let head = new ListItem(1, next1);

let m = 1;
let n = 3;

console.log("Solution 1:");
getModifiedLinkedList1(head, m, n);

// console.log("Solution 2:");
// getModifiedLinkedList2(head, m, n);






/*
function getModifiedLinkedList(head, m, n){
    let modifiedLinkedList = [];
    for( let i = 0; i < head.length; i = i + (m+n)){
        let mNodes = head.slice(i, i+m);
        console.log(mNodes);
        modifiedLinkedList = [...modifiedLinkedList, ...mNodes];
    }
    console.log(modifiedLinkedList);
}

// let head = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// let m = 3;
// let n = 2;

// let head = [1,2,3,4,5,6,7,8,9,10,11];
// let m = 1;
// let n = 3;

let head = [1,2,3,4,5,6,7,8,9,10,11];
let m = 3;
let n = 1;

getModifiedLinkedList(head,m,n);
*/