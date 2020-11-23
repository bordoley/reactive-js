/// <reference types="node" />
import { Option } from './option';
import { KeyedCollection } from './collections';

interface KeyedQueueLike<K, V> extends KeyedCollection<K, V> {
    clear(): void;
    peek(key: K): Option<V>;
    pop(key: K): Option<V>;
    push(key: K, value: V): void;
}
declare const createKeyedQueue: <K, V>() => KeyedQueueLike<K, V>;

export { KeyedQueueLike, createKeyedQueue };
