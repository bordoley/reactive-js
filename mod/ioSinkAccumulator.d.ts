/// <reference types="node" />
import { Reducer, Factory } from './functions';
import { MulticastObservableLike } from './observable';
import { IOSinkLike } from './io';

/**
 * @experimental
 * @noInheritDoc
 * */
interface IOSinkAccumulatorLike<T, TAcc> extends IOSinkLike<T>, MulticastObservableLike<TAcc> {
}
/** @experimental */
declare const createIOSinkAccumulator: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
    readonly replay?: number | undefined;
} | undefined) => IOSinkAccumulatorLike<T, TAcc>;

export { IOSinkAccumulatorLike, createIOSinkAccumulator };
