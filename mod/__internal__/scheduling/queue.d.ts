import { Comparator } from "../../functions.mjs";
import { Option } from "../../util.mjs";
interface QueueLike<T> {
    readonly count: number;
    clear(): void;
    peek(): Option<T>;
    pop(): Option<T>;
    push(item: T): void;
}
declare const createPriorityQueue: <T>(comparator: Comparator<T>) => QueueLike<T>;
export { QueueLike, createPriorityQueue };
