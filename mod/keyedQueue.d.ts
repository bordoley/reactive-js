/// <reference types="node" />
import './functions';
import { Option } from './option';
import './enumerable';
import './runnable';
import { KeyedCollection } from './collections';

interface KeyedQueueLike<K, V> extends KeyedCollection<K, V> {
    clear(): void;
    peek(key: K): Option<V>;
    pop(key: K): Option<V>;
    push(key: K, value: V): void;
}
declare const createKeyedQueue: <K, V>() => KeyedQueueLike<K, V>;

export { KeyedQueueLike, createKeyedQueue };
