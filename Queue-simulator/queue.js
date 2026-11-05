class Queue {
    constructor() {
        this.items = []
        this.count = 0
        this.front = 0
         
    }

    // Add element to top of queue
    enqueue(element) {
        this.items[this.count] = element
        let enqueue_res = `${element}`;
        let count = this.count;
        this.count++;
        //return [enqueue_res,count];
        return [enqueue_res, count];
    }
    // Return and remove first element in queue
    // Return undefined if queue is empty
    dequeue() {
        if(this.isEmpty()) return undefined;
        let deleteItem = this.items[this.front];
        this.items[this.front] = undefined;
        this.front ++;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    // Check top element in queue
    peek() {
        if (this.isEmpty()) return undefined 
        console.log(`Front element is ${this.items[this.front]}`)
        return this.items[this.front] 
    }
    // Check if stack is empty
    isEmpty() {
        return this.count === this.front;
    }

    // Check size of stack
    size() {
        return this.count-this.front;
    }

    // Print elements in queue
    print() {
        let str = ''
        for(let i = this.front; i < this.cont; i++) {
            str += this.items[i] + ' '
        }
        return str;
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        this.front = 0
        console.log('Queue cleared..')
        return this.items
    }
}

const queue = new Queue()
      
$(document).ready(function(){
  $("#btn_push").on("click", function(){
    let enqueue_data = queue.enqueue($("#st_data").val());
    $("#stack").append(`<div id="st${enqueue_data[0]}"  class="row bg-primary push">${enqueue_data[0]}</div>`);
  });
  $("#btn_pop").on("click", function(){
    let dequeue_data = queue.dequeue();
    $("#poped").prepend(`<div class="row pop text-bg-danger border border-light"> ${dequeue_data} </div>`);
    $(`#st${dequeue_data}`).remove();
  });
  $("#btn_peek").on("click", function(){
    let peek_data = queue.peek();
    if (peek_data === undefined) return;
    $(`#st${peek_data}`).removeClass("bg-primary").addClass("peek");
    setTimeout(function(){
    $(`#st${peek_data}`).removeClass("peek").addClass("bg-primary");}, 500)
    });
  $("#btn_clear").on("click", function(){
    queue.clear();
    $("#stack, #poped").empty();
  });
  
   // $("#stack").prepend(`<div class="row bg-primary push">${stack.push(100)[0]}</div>`);
   // $("#stack").prepend(`<div class="row bg-success push">${stack.push(200)[0]}</div>`);
   // $("#stack").prepend(`<div class="row bg-primary push">${stack.push(300)[0]}</div>`);
   // $("#stack").prepend(`<div class="row bg-success push">${stack.push(400)[0]}</div>`);
});
        
