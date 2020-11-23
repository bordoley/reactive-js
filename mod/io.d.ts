/// <reference types="node" />
import { Function1 } from './functions';
import './option';
import './disposable';
import './dispatcher';
import './scheduler';
import { ObservableLike } from './observable';
import './enumerable';
import './runnable';
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

export { IOEvent, IOEventType, IOSinkLike, IOSourceLike, IOSourceOperator, decodeWithCharset, done, empty, encodeUtf8, fromArray, fromObservable, fromValue, map, notify };
