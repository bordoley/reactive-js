import { compose, pipe, Operator } from "../../functions.ts";
import {
  ObservableLike,
  onNotify,
  using,
  endWith,
  dispatchTo,
} from "../../observable.ts";
import { none } from "../../option.ts";
import { ignoreElements } from "../observable/ignoreElements.ts";
import { StreamLike } from "../observable/interfaces.ts";
import { subscribe } from "../observable/subscribe.ts";
import { StreamableLike } from "./interfaces.ts";
import { stream } from "./streamable.ts";

const ignoreAndNotifyVoid: Operator<
  StreamLike<any, any>,
  ObservableLike<void>
> = compose(ignoreElements(), endWith(none as void));

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T>,
  dest: StreamableLike<T, TReq>,
): ObservableLike<void> =>
  using(scheduler => {
    const srcStream = stream(src, scheduler);
    const destStream = stream(dest, scheduler);

    pipe(srcStream, onNotify(dispatchTo(destStream)), subscribe(scheduler)).add(
      destStream,
    );

    pipe(destStream, onNotify(dispatchTo(srcStream)), subscribe(scheduler)).add(
      srcStream,
    );

    return destStream;
  }, ignoreAndNotifyVoid);
