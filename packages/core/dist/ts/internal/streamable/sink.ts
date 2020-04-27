import { StreamableLike } from "./interfaces.ts";
import { ObservableLike, onNotify, using, endWith } from "../../observable.ts";
import { StreamLike } from "../observable/interfaces.ts";
import { pipe } from "../../pipe.ts";
import { subscribe } from "../observable/subscribe.ts";
import { ignoreElements } from "../observable/ignoreElements.ts";
import { none } from "../../option.ts";

export const sink = <TReq, T>(
  src: StreamableLike<TReq, T>,
  dest: StreamableLike<T, TReq>,
): ObservableLike<void> =>
  using(
    scheduler => {
      const srcStream = src.stream(scheduler);
      const destStream = dest.stream(scheduler);

      const dataSubscription = pipe(
        srcStream,
        onNotify(next => destStream.dispatch(next)),
        subscribe(scheduler),
      );
      const reqSubscription = pipe(
        destStream,
        onNotify(next => srcStream.dispatch(next)),
        subscribe(scheduler),
      );

      return destStream
        .add(srcStream)
        .add(dataSubscription)
        .add(reqSubscription);
    },
    (destStream: StreamLike<T, TReq>) =>
      pipe(destStream, ignoreElements(), endWith(none as void)),
  );
