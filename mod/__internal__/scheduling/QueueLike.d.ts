import { Optional, Comparator } from "../../functions.mjs";
interface QueueLike<T> {
    readonly count: number;
    clear(): void;
    peek(): Optional<T>;
    pop(): Optional<T>;
    push(item: T): void;
}
declare const createPriorityQueue: <T>(comparator: Comparator<T>) => QueueLike<T>;
export { QueueLike, createPriorityQueue };
