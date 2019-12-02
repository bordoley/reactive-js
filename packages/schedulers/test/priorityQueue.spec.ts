import {createPriorityQueue } from "../src/internal/priorityQueue";

const compare = (a: number, b: number): number => a - b;

describe("priority queue", () => {

  test("push", () => {
    const queue = createPriorityQueue(compare);
    queue.push(5);
    console.log(queue);

    queue.push(1);
    console.log(queue);

    queue.push(3);
    console.log(queue);

    queue.push(2);
    console.log(queue);

    queue.push(4);
    console.log(queue);


    const acc = [];

    while(queue.count > 0) {
      acc.push(queue.pop());
    }

    expect(acc).toEqual([1,2,3,4,5]);
  })
});