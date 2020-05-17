import { FlowableLike, FlowMode, fromObservable as fromObservableFlowable } from "./flowable.ts";
import { Function1, compose, pipe, returns } from "./functions.ts";
import {
  map as mapObs,
  withLatestFrom,
  compute,
  concatMap,
  fromIterator,
  fromArray as fromArrayObs,
  ObservableLike,
} from "./observable.ts";

import {
  map as mapStream,
  lift,
  StreamableLike,
} from "./streamable.ts";
import { endWith } from "./internal/observable/endWith.ts";

export const enum IOEventType {
  Next = 1,
  Complete = 2,
}

export type IOEvent<T> =
  | { readonly type: IOEventType.Next; readonly data: T }
  | { readonly type: IOEventType.Complete };

export const next = <T>(data: T): IOEvent<T> => ({
  type: IOEventType.Next,
  data,
});
const _complete: IOEvent<any> = { type: IOEventType.Complete };
export const complete = <T>(): IOEvent<T> => _complete;

/** @noInheritDoc */
export interface IOStreamableLike<T>
  extends FlowableLike<IOEvent<T>> {}

/** @noInheritDoc */
export interface IOSinkLike<T> extends StreamableLike<IOEvent<T>, FlowMode> {}

export type IOStreamableOperator<TA, TB> = Function1<
  IOStreamableLike<TA>,
  IOStreamableLike<TB>
>;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): IOStreamableOperator<ArrayBuffer, string> =>
  lift(
    compose(
      withLatestFrom(
        compute<TextDecoder>()(() => new TextDecoder(charset, options)),
        function*(ev, decoder) {
          switch (ev.type) {
            case IOEventType.Next: {
              const data = decoder.decode(ev.data, { stream: true });
              if (data.length > 0) {
                yield next(data);
              }
              break;
            }
            case IOEventType.Complete: {
              const data = decoder.decode();
              if (data.length > 0) {
                yield next(data);
              }
              yield complete<string>();
              break;
            }
          }
        },
      ),
      concatMap(compose(returns, fromIterator())),
    ),
  );

export const encodeUtf8: IOStreamableOperator<string, Uint8Array> = lift(
  withLatestFrom(
    compute<TextEncoder>()(() => new TextEncoder()),
    (ev, textEncoder) => {
      switch (ev.type) {
        case IOEventType.Next: {
          const data = textEncoder.encode(ev.data);
          return next(data);
        }
        case IOEventType.Complete: {
          return ev;
        }
      }
    },
  ),
);

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<IOStreamableLike<TA>, IOStreamableLike<TB>> =>
  mapStream((ev: IOEvent<TA>) =>
    ev.type === IOEventType.Next ? pipe(ev.data, mapper, next) : ev,
  );

const _fromObservable = compose(
  mapObs(next),
  endWith(complete()),
  fromObservableFlowable(),
);
export const fromObservable = <T>(): Function1<ObservableLike<T>, IOStreamableLike<T>> => _fromObservable;

const _fromArray = compose(
  fromArrayObs(),
  fromObservable(),
);
export const fromArray = <T>(): Function1<readonly T[], IOStreamableLike<T>> => _fromArray;

const _fromValue = <T>(v: T) => pipe([v], fromArray());
export const fromValue = <T>(): Function1<T, IOStreamableLike<T>> => _fromValue;

const _empty: IOStreamableLike<any> = _fromArray([]);
export const empty = <T>(): IOStreamableLike<T> => _empty;