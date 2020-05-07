import { pipe } from "../../functions.js";
import { fromIterable, first } from "../../enumerable.js";
import { isSome } from "../../option.js";
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
        return fromIterable(this.values).enumerate();
    }
    peek() {
        return pipe(this.values, fromIterable, first);
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
