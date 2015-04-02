//How would you implement a queue in Javascript? In Computer Science, a queue has a very distinct meaning and behavior. See a description of a queue here: http://en.wikipedia.org/wiki/Queue_(abstract_data_type)
//queues represent a FIFO (first in, first out) policy with a linear data structure
/*ANSWER:
A javaScript array would be a natural way to handle a queue.  It orders elements automatically,
and you can easily 'push' (enqueue) an element onto the end of an array, and 'shift' (dequeue) an element
from the beginning of an array, keeping the FIFO policy.
*/

//what are some real world examples of a queue in Javascript?
/*ANSWER
You can build a literal queue, in which users hop in a queue and wait until their turn comes up before
exiting the queue (call centers, product waiting-lists, etc.).
*/

//which methods would be specific to a queue?
/*ANSWER
Array.shift(), and Array.push() would be the most important ones in my mind.
*/




//How would you implement a stack in Javascript? Stack: http://en.wikipedia.org/wiki/Stack_(abstract_data_type)
//stacks represent a LIFO (last in, first out) policy
/*ANSWER
A javaScript array would, again, be the most logical choice.  I would use the pop() and push() methods this time.
*/

//what are some real world examples of a stack in Javascript?
/*ANSWER
Recursion!  The layer in is the last layer to resolve.
Also, undo buttons.
Perhaps looping through nested objects/arrays.  The bottom layer (last to be touched by the loop)
would also be the first one finished. (basically same as recursion)
*/


//which methods are specific to a stack?
/*ANSWER
pop() and push().
*/