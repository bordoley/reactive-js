import { FlowableLike, FlowMode, fromObservable } from "./flowable.ts";
import { Function1, compose, pipe, returns, isEqualTo } from "./functions.ts";
import {
  map as mapObs,
  mapTo,
  genMap,
  takeFirst,
  takeWhile,
  keep,
  withLatestFrom,
  compute,
  concatMap,
  fromIterator,
  fromArray as fromArrayObs,
} from "./observable.ts";

import {
  createStreamable,
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
export interface IOStreamLike<T>
  extends FlowableLike<IOEvent<T>> {}

  /** @noInheritDoc */
export interface IOSinkLike<T> extends StreamableLike<IOEvent<T>, FlowMode> {}

export type IOStreamFunction<TA, TB> = Function1<
  IOStreamLike<TA>,
  IOStreamLike<TB>
>;

const _empty: IOStreamLike<any> = createStreamable(
  compose(
    keep(isEqualTo(FlowMode.Resume)),
    takeWhile(isEqualTo(FlowMode.Pause), { inclusive: true }),
    mapTo(complete()),
  ),
);
export const empty = <T>(): IOStreamLike<T> => _empty;

const _fromValue = <T>(data: T): IOStreamLike<T> =>
  createStreamable(
    compose(
      keep(isEqualTo(FlowMode.Resume)),
      takeFirst(),
      genMap(function*(mode: FlowMode): Generator<IOEvent<T>> {
        switch (mode) {
          case FlowMode.Resume:
            yield next(data);
            yield complete();
        }
      }),
    ),
  );
export const fromValue = <T>(): Function1<T, IOStreamLike<T>> => _fromValue;

export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): Function1<IOStreamLike<TA>, IOStreamLike<TB>> =>
  mapStream((ev: IOEvent<TA>) =>
    ev.type === IOEventType.Next ? pipe(ev.data, mapper, next) : ev,
  );

export const decodeWithCharset = (
  charset = "utf-8",
  options?: TextDecoderOptions,
): IOStreamFunction<ArrayBuffer, string> =>
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

export const encodeUtf8: IOStreamFunction<string, Uint8Array> = lift(
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

export const fromArray = <T>() => (arr: T[]) => pipe(
  arr,
  fromArrayObs(),
  mapObs(next),
  endWith(complete()),
  fromObservable(),
);