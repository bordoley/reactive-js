import { endWith, ignoreElements } from "../container";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableLike,
  StreamLike,
  __memo,
  __observe,
  concatT,
  dispatchTo,
  fromArrayT,
  keepT,
  merge,
  observable,
  onNotify,
  onSubscribe,
} from "../observable";

import { none } from "../option";
import { StreamableLike } from "../streamable";
import { __stream } from "./streamable";

const ignoreAndNotifyVoid: Function1<
  ObservableLike<any>,
  ObservableLike<void>
> = compose(
  ignoreElements(keepT),
  endWith({ ...fromArrayT, ...concatT }, none as void),
);

const createSinkObs = <TReq, T>(
  srcStream: StreamLike<TReq, T>,
  destStream: StreamLike<T, TReq>,
) =>
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
  );

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T, StreamLike<TReq, T>>,
  dest: StreamableLike<T, TReq, StreamLike<T, TReq>>,
): ObservableLike<void> =>
  pipe(
    observable(() => {
      const srcStream = __stream(src);
      const destStream = __stream(dest);
      const obs = __memo(createSinkObs, srcStream, destStream);

      return __observe(obs);
    }),
    ignoreAndNotifyVoid,
  );
