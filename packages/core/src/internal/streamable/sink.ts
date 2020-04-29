import { StreamableLike } from "./interfaces";
import { ObservableLike, onNotify, using, endWith } from "../../observable";
import { StreamLike } from "../observable/interfaces";
import { pipe } from "../../functions";
import { subscribe } from "../observable/subscribe";
import { ignoreElements } from "../observable/ignoreElements";
import { isSome, none } from "../../option";

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
      ).add(e => {
        if (isSome(e)) {
          destStream.dispose(e);
        }
      });

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
