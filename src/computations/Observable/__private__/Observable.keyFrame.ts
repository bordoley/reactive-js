import { Function1, identity } from "../../../functions.js";
import { ClockLike_now } from "../../../utils.js";
import type * as Observable from "../../Observable.js";
import { Observable_genPure } from "./Observable.gen.js";

const Observable_keyFrame: Observable.Signature["keyFrame"] = ((
  duration: number,
  options?: {
    readonly easing?: Function1<number, number>;
  },
) => {
  const { easing = identity } = options ?? {};

  return Observable_genPure(function* keyFrame(clock) {
    const startTime = clock[ClockLike_now];
    let elapsed = clock[ClockLike_now] - startTime;
    while (elapsed <= duration) {
      const next = easing(elapsed / duration);

      yield next;

      elapsed = clock[ClockLike_now] - startTime;
    }
  });
}) as Observable.Signature["keyFrame"];

export default Observable_keyFrame;
