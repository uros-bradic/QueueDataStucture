import React from "react";
import "./styles.css";
import Queue from "./components/Queue";

export default function App() {
  return (
    <div className="App">
      <h1>Queue Data Structures</h1>
      <div>
        <p>
          Like Stack, Queue is a linear structure which follows a particular
          order in which the operations are performed. The order is First In
          First Out (FIFO). A good example of queue is any queue of consumers
          for a resource where the consumer that came first is served first.{" "}
        </p>
        <p>
          The difference between stacks and queues is in removing. In a stack we
          remove the item the most recently added; in a queue, we remove the
          item the least recently added.
        </p>
        <p>
          Operations on Queue:
          <br /> Mainly the following four basic operations are performed on
          queue:
        </p>
        <ul>
          <li>
            Enqueue: Adds an item to the queue. If the queue is full, then it is
            said to be an Overflow condition.
          </li>
          <li>
            Dequeue: Removes an item from the queue. The items are popped in the
            same order in which they are pushed. If the queue is empty, then it
            is said to be an Underflow condition.
          </li>
          <li>Front: Get the front item from queue.</li>
          <li>Rear: Get the last item from queue.</li>
        </ul>
      </div>
      <Queue />
      <img
        alt="Queue"
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2014/02/Queue.png"
      />
    </div>
  );
}
