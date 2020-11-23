import { dispatchTo } from "../../dispatcher";
import { addDisposable } from "../../disposable";
import { compose, pipe, Function1 } from "../../functions";
import { none } from "../../option";
import { StreamLike, subscribe, ignoreElements, ObservableLike, onNotify, using, endWith } from "../../observable";
import { StreamableLike } from "./interfaces";
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
      onNotify(dispatchTo(destStream)),
      subscribe(scheduler),
    );

    const destSubscription = pipe(
      destStream,
      onNotify(dispatchTo(srcStream)),
      subscribe(scheduler),
    );

    addDisposable(srcSubscription, destStream);
    addDisposable(destSubscription, srcStream);

    return destStream;
  }, ignoreAndNotifyVoid);
