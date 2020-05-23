import { fromIterable, toRunnable, enumerate, } from "../../enumerable.js";
import { pipe } from "../../functions.js";
import { isSome } from "../../option.js";
import { first } from "../../runnable.js";
class UniqueQueueImpl {
    constructor() {
        this.values = new Set();
    }
    get count() {
        return this.values.size;
    }
    clear() {
        this.values.clear();
    }
    enumerate() {
        return pipe(this.values, fromIterable(), enumerate);
    }
    peek() {
        return pipe(this.values, fromIterable(), toRunnable(), first);
    }
    pop() {
        const head = this.peek();
        if (isSome(head)) {
            this.values.delete(head);
        }
        return head;
    }
    push(item) {
        if (!this.values.has(item)) {
            this.values.add(item);
        }
    }
}
export const createUniqueQueue = () => new UniqueQueueImpl();
