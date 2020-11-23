/// <reference types="node" />
import './functions';
import './option';
import './enumerable';
import './runnable';
import { KeyedCollection } from './collections';

interface SetMultimapLike<K, V> extends KeyedCollection<K, V> {
    add(key: K, value: V): void;
    clear(): void;
    get(key: K): ReadonlySet<V>;
    remove(key: K, value: V): void;
    removeAll(key: K): void;
}
declare const createSetMultimap: <K, V>() => SetMultimapLike<K, V>;

export { SetMultimapLike, createSetMultimap };
