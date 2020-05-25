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
  Notify = 1,
  Done = 2,
}

export type IOEvent<T> =
  | { readonly type: IOEventType.Notify; readonly data: T }
  | { readonly type: IOEventType.Done };

export const notify = <T>(data: T): IOEvent<T> => ({
  type: IOEventType.Notify,
  data,
});
const _done: IOEvent<any> = { type: IOEventType.Done };
export const done = <T>(): IOEvent<T> => _done;

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
          case IOEventType.Notify: {
            const data = decoder.decode(ev.data, { stream: true });
            if (data.length > 0) {
              yield notify(data);
            }
            break;
          }
          case IOEventType.Done: {
            const data = decoder.decode();
            if (data.length > 0) {
              yield notify(data);
            }
            yield done<string>();
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
      case IOEventType.Notify: {
        const data = textEncoder.encode(ev.data);
        return notify(data);
      }
      case IOEventType.Done: {
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
    ev.type === IOEventType.Notify ? pipe(ev.data, mapper, notify) : ev,
  );

const _fromObservable = compose(
  mapObs(notify),
  endWith(done()),
  fromObservableFlowable(),
);
export const fromObservable = <T>(): Function1<
  ObservableLike<T>,
  IOSourceLike<T>
> => _fromObservable;

export const fromArray = <T>(
  options?: { delay?: number, startIndex?: number , endIndex?: number},
): Function1<readonly T[], IOSourceLike<T>> =>
  compose(fromArrayObs(options), fromObservable());

export const fromValue = <T>(
  config?: { delay?: number}
): Function1<T, IOSourceLike<T>> => v => fromArray<T>(config)([v]);

const _empty: IOSourceLike<any> = fromArray()([]);
export const empty = <T>(): IOSourceLike<T> => _empty;
