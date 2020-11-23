/// <reference types="node" />
import { EnumerableLike } from './enumerable';

interface KeyedEnumerableLike<K, V> extends EnumerableLike<[K, V]> {
    readonly keys: EnumerableLike<K>;
    readonly values: EnumerableLike<V>;
}
interface Collection<T> extends EnumerableLike<T> {
    readonly count: number;
}
interface KeyedCollection<K, V> extends KeyedEnumerableLike<K, V> {
    readonly count: number;
}

export { Collection, KeyedCollection, KeyedEnumerableLike };
