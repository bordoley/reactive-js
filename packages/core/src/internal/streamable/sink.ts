import { compose, pipe, Operator } from "../../functions";
import {
  ObservableLike,
  onNotify,
  using,
  endWith,
  dispatchTo,
} from "../../observable";
import { none } from "../../option";
import { ignoreElements } from "../observable/ignoreElements";
import { StreamLike } from "../observable/interfaces";
import { subscribe } from "../observable/subscribe";
import { StreamableLike } from "./interfaces";

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

    pipe(srcStream, onNotify(dispatchTo(destStream)), subscribe(scheduler)).add(
      destStream,
    );

    pipe(destStream, onNotify(dispatchTo(srcStream)), subscribe(scheduler)).add(
      srcStream,
    );

    return destStream;
  }, ignoreAndNotifyVoid);
