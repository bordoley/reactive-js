import { endWith, ignoreElements } from "../container";
import { pipe } from "../functions";
import {
  ObservableLike,
  StreamLike,
  __memo,
  __observe,
  concatT,
  createObservable,
  dispatchTo,
  fromArrayT,
  keepT,
  merge,
  onNotify,
  onSubscribe,
} from "../observable";
import { none } from "../option";
import { sinkInto as sinkIntoSink } from "../source";

import { StreamableLike } from "../streamable";

export const sinkInto =
  <TReq, T>(dest: StreamableLike<T, TReq, StreamLike<T, TReq>>) =>
  (src: StreamableLike<TReq, T, StreamLike<TReq, T>>): ObservableLike<void> =>
    createObservable(observer => {
      const { scheduler } = observer;
      const srcStream = src.stream(scheduler);
      const destStream = dest.stream(scheduler);

      pipe(
        merge(
          pipe(
            srcStream,
            onNotify(dispatchTo(destStream)),
            ignoreElements(keepT),
            onSubscribe(() => destStream),
          ),
          pipe(
            destStream,
            onNotify(dispatchTo(srcStream)),
            ignoreElements(keepT),
            onSubscribe(() => srcStream),
          ),
        ),
        ignoreElements(keepT),
        endWith({ ...fromArrayT, ...concatT }, none as void),
        sinkIntoSink(observer),
      );
    });
