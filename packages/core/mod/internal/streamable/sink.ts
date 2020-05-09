import { compose, pipe, Operator } from "../../functions.ts";
import { ObservableLike, onNotify, using, endWith } from "../../observable.ts";
import { none } from "../../option.ts";
import { ignoreElements } from "../observable/ignoreElements.ts";
import { StreamLike } from "../observable/interfaces.ts";
import { subscribe } from "../observable/subscribe.ts";
import { StreamableLike } from "./interfaces.ts";

const ignoreAndNotifyVoid: Operator<
  StreamLike<any, any>,
  ObservableLike<void>
> = compose(ignoreElements(), endWith(none as void));

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T>,
  dest: StreamableLike<T, TReq>,
): ObservableLike<void> =>
  using(scheduler => {
    const srcStream = src.stream(scheduler);
    const destStream = dest.stream(scheduler);

    pipe(
      srcStream,
      onNotify(next => destStream.dispatch(next)),
      subscribe(scheduler),
    ).add(destStream);

    pipe(
      destStream,
      onNotify(next => srcStream.dispatch(next)),
      subscribe(scheduler),
    ).add(srcStream);

    return destStream;
  }, ignoreAndNotifyVoid);
