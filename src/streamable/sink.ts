import { addDisposable } from "../disposable";
import { Function1, compose, pipe } from "../functions";
import {
  ObservableLike,
  StreamLike,
  endWith,
  ignoreElements,
  subscribe,
  using,
} from "../observable";

import { none } from "../option";
import { StreamableLike } from "../streamable";
import { stream } from "./streamable";

const ignoreAndNotifyVoid: Function1<
  StreamLike<any, any>,
  ObservableLike<void>
> = compose(ignoreElements(), endWith(none as void));

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T>,
  dest: StreamableLike<T, TReq>,
): ObservableLike<void> =>
  using(scheduler => {
    const srcStream = pipe(src, stream(scheduler));
    const destStream = pipe(dest, stream(scheduler));

    const srcSubscription = pipe(
      srcStream,
      subscribe(scheduler, destStream.dispatch, destStream),
    );

    const destSubscription = pipe(
      destStream,
      subscribe(scheduler, srcStream.dispatch, srcStream),
    );

    addDisposable(srcSubscription, destStream);
    addDisposable(destSubscription, srcStream);

    return destStream;
  }, ignoreAndNotifyVoid);
