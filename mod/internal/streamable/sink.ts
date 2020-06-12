import { dispatchTo } from "../../dispatcher.ts";
import { addDisposable } from "../../disposable.ts";
import { compose, pipe, Function1 } from "../../functions.ts";
import { ObservableLike, onNotify, using, endWith } from "../../observable.ts";
import { none } from "../../option.ts";
import { ignoreElements } from "../observable/ignoreElements.ts";
import { StreamLike } from "../observable/interfaces.ts";
import { subscribe } from "../observable/subscribe.ts";
import { StreamableLike } from "./interfaces.ts";
import { stream } from "./streamable.ts";

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
