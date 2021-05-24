'use strict';
const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
    this.size=0;

  }



  insert(value) {
    try {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.size++;
      }
      else {
        node.next = this.head;
        this.head = node;
        this.size++;
      }
    }

    catch (error) {
      console.log(`error in insert method `, error);
    }
  }

  includes(value) {
    try {
      if (!this.head) {
        return false;
      }
      else {
        let temp = this.head;
        while (temp) {
          if (temp.value === value) {
            return true;
          }
          else {
            temp = temp.next;
          }
        }
        return false;

      }
    } catch (error) {
      console.log(`error in includes method`, error);

    }
  }




  toString() {
    try {
      let linkedList = "";
      let temp = this.head;

      while (temp) {
        linkedList += `{${temp.value}} -> `;
        temp = temp.next;
      }
      linkedList += "NULL";
      return linkedList;
    } catch (error) {
      console.log(`Error in toString method`, error);
    }
  }


  append(value) {

    //method to add node to the last at the linked list 
    try {
      let node = new Node(value);
      if (!this.head) {// empty linked list
        this.head = node;
        this.size++;
         //refer the head to the the new node 
      } else { //there is nodes in the linked list 
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        this.size++;
      }
    }
    catch (error) {
      console.log('error in the append method', error);
    }
  }


  insertBefore(value, newVal) { //method to insert new node before specific node 



    try {
      let newNode = new Node(newVal); //create new node from the newVal
      if (this.head.value === value) {
        newNode.next = this.head
        this.head = newNode;
        this.size++;
      }

      let current = this.head  //make a pointer to point to the head
      while (current) {        //loop over ll until head=null

        if (current.next.value === value) {  //find the passed value 
          newNode.next = current.next;
          current.next = newNode;
          this.size++;
          return;
        }
        else {
          current = current.next;
        }

        // throw new Error; 
      }

    }

    catch (error) {
      console.log('error in insertBefore method', error);
    }

  }





  insertAfter(value, newVal) {  //method to creat nea node with new value and add it after specific passed value 
    try {
      let newNode = new Node(newVal);  //creat new node 
      let current = this.head;       //make a pointer to point to the head
      while (current) {             //loop over ll until head=null
        if (current.value === value) {
          let node = current.next;
          current.next = newNode;
          newNode.next = node;
          this.size++;
        }
        current = current.next;
      }
    } catch (error) {
      console.log('error in the insertAfter method', error);
    }
  }


  // kthFromEnd(k) {
  //   let current = this.head;
  //   let position = this.length - 1 - k;
  //   let index = 0;
  //   while(current) {
  //     if(position === index) {
  //       console.log(current.value);
  //       return current.value;
  //     }
  //     current = current.next
  //     index++;
  //   }
  //   console.log(`Exception`);
  //   return "Exception";
  // }

  kthFromEnd(k){
    //method to return the value of passing parameter as reversed index of the linked list 
    try { let current=this.head;  //make a pointer to point to the head
      let  i=this.size-1;          
      while(current){             // loop over ll until head=null
        if(i===k){                 // condition to equalize k with the index of node 
          return current.value;   //return the value of the node when the condition true 
        }
        else{
          current=current.next;   //condition false move to the next node 
          i--;                    //increment the index 
        }
      }
      
    } catch (error) {
      throw new Error (`Error in kthFromEnd method,invalid k` , error);
    }
   
  }

}














module.exports = LinkedList;



