/// <reference types="node" />
import { Updater, Factory, Equality, Function1 } from './functions';
import { StreamableLike } from './streamable';

/** @noInheritDoc */
interface StateStoreLike<T> extends StreamableLike<Updater<T>, T> {
}
/**
 * Returns a new `StateStoreLike` instance that stores state which can
 * be updated by notifying the instance with a `StateUpdater` that computes a
 * new state based upon the previous state.
 *
 * @param initialState The initial accumulation value.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
declare const createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StateStoreLike<T>;
/**
 * Converts an `StreamableLike<T, T>` to an `StateStoreLike<T>`.
 *
 * @param initialState Factory function to generate the initial state.
 * @param equals Optional equality function that is used to compare
 * if a state value is distinct from the previous one.
 */
declare const toStateStore: <T>() => Function1<StreamableLike<T, T>, StreamableLike<Updater<T>, T>>;
declare const map: <TA, TB>(parse: Function1<TA, TB>, serialize: Function1<TB, TA>) => Function1<StateStoreLike<TA>, StateStoreLike<TB>>;

export { StateStoreLike, createStateStore, map, toStateStore };
