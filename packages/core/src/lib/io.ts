import {
  FlowableLike,
  FlowMode,
  fromObservable as fromObservableFlowable,
} from "./flowable";
import { Function1, compose, pipe, returns, composeWith } from "./functions";
import { endWith } from "./internal/observable/endWith";
import {
  map as mapObs,
  withLatestFrom as withLatestFromObs,
  compute,
  concatMap,
  fromIterator,
  fromArray as fromArrayObs,
  ObservableLike,
} from "./observable";

import {
  map as mapStream,
  lift,
  withLatestFrom,
  StreamableLike,
} from "./streamable";

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
export interface IOSourceLike<T> extends FlowableLike<IOEvent<T>> {}

/** @noInheritDoc */
export interface IOSinkLike<T> extends StreamableLike<IOEvent<T>, FlowMode> {}

export type IOSourceOperator<TA, TB> = Function1<
  IOSourceLike<TA>,
  IOSourceLike<TB>
>;

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): IOSourceOperator<ArrayBuffer, string> =>
  pipe(
    withLatestFromObs(
      compute<TextDecoder>()(() => new TextDecoder(charset, options)),
      function*(ev: IOEvent<ArrayBuffer>, decoder) {
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
    composeWith(mapObs(returns)),
    composeWith(concatMap(fromIterator())),
    lift,
  );

const _encodeUtf8: IOSourceOperator<string, Uint8Array> = withLatestFrom(
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
);
export const encodeUtf8: IOSourceOperator<string, Uint8Array> = _encodeUtf8;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<IOSourceLike<TA>, IOSourceLike<TB>> =>
  mapStream((ev: IOEvent<TA>) =>
    ev.type === IOEventType.Next ? pipe(ev.data, mapper, next) : ev,
  );

const _fromObservable = compose(
  mapObs(next),
  endWith(complete()),
  fromObservableFlowable(),
);
export const fromObservable = <T>(): Function1<
  ObservableLike<T>,
  IOSourceLike<T>
> => _fromObservable;

const _fromArray = compose(fromArrayObs(), fromObservable());
export const fromArray = <T>(): Function1<readonly T[], IOSourceLike<T>> =>
  _fromArray;

const _fromValue = <T>(v: T) => pipe([v], fromArray());
export const fromValue = <T>(): Function1<T, IOSourceLike<T>> => _fromValue;

const _empty: IOSourceLike<any> = _fromArray([]);
export const empty = <T>(): IOSourceLike<T> => _empty;
