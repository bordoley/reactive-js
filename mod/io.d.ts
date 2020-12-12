import { Function1, Reducer, Factory } from './functions';
import { ObservableLike, MulticastObservableLike } from './observable';
import { StreamableLike } from './streamable';
import { FlowableLike, FlowMode } from './flowable';

declare const enum IOEventType {
    Notify = 1,
    Done = 2
}
declare type IOEvent<T> = {
    readonly type: IOEventType.Notify;
    readonly data: T;
} | {
    readonly type: IOEventType.Done;
};
declare const notify: <T>(data: T) => IOEvent<T>;
declare const done: <T>() => IOEvent<T>;
/** @noInheritDoc */
interface IOSourceLike<T> extends FlowableLike<IOEvent<T>> {
}
/** @noInheritDoc */
interface IOSinkLike<T> extends StreamableLike<IOEvent<T>, FlowMode> {
}
declare type IOSourceOperator<TA, TB> = Function1<IOSourceLike<TA>, IOSourceLike<TB>>;
declare const decodeWithCharset: (charset?: string, options?: TextDecoderOptions | undefined) => IOSourceOperator<ArrayBuffer, string>;
declare const encodeUtf8: IOSourceOperator<string, Uint8Array>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<IOSourceLike<TA>, IOSourceLike<TB>>;
declare const fromObservable: <T>() => Function1<ObservableLike<T>, IOSourceLike<T>>;
declare const fromArray: <T>(options?: {
    readonly delay?: number | undefined;
    readonly startIndex?: number | undefined;
    readonly endIndex?: number | undefined;
} | undefined) => Function1<readonly T[], IOSourceLike<T>>;
declare const fromValue: <T>(options?: {
    readonly delay?: number | undefined;
} | undefined) => Function1<T, IOSourceLike<T>>;
declare const empty: <T>() => IOSourceLike<T>;
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

export { IOEvent, IOEventType, IOSinkAccumulatorLike, IOSinkLike, IOSourceLike, IOSourceOperator, createIOSinkAccumulator, decodeWithCharset, done, empty, encodeUtf8, fromArray, fromObservable, fromValue, map, notify };
