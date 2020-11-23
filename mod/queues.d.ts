/// <reference types="node" />
import { Comparator } from './functions';
import { Option } from './option';
import './enumerable';
import './runnable';
import { Collection } from './collections';

declare const createPriorityQueue: <T>(comparator: Comparator<T>) => QueueLike<T>;

declare const createUniqueQueue: <T>() => QueueLike<T>;

interface QueueLike<T> extends Collection<T> {
    clear(): void;
    peek(): Option<T>;
    pop(): Option<T>;
    push(item: T): void;
}

export { QueueLike, createPriorityQueue, createUniqueQueue };
