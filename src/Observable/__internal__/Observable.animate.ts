import type * as Observable from "../../Observable.js";
import Observable_repeat from "../../Observable/__internal__/Observable.repeat.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Observable_concatMany from "./Observable.concatMany.js";
import Observable_empty from "./Observable.empty.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_spring from "./Observable.spring.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: Observable.Animation<T>,
): RunnableLike<T> =>
  config.type === "loop"
    ? pipe(
        Observable_animate<T>(config.animation),
        Observable_repeat<T>(config.count ?? 1),
      )
    : config.type === "delay"
    ? Observable_empty({ delay: config.duration })
    : config.type === "frame"
    ? pipe(
        config.value,
        Optional_toObservable(),
        isSome(config.selector)
          ? Observable_map(config.selector)
          : (identity as Observable.RunnableUpperBoundObservableOperator<
              number,
              T
            >),
      )
    : pipe(
        config.type === "keyframe"
          ? Observable_keyFrame(config.duration, config)
          : Observable_spring(config),
        Observable_map(scale(config.from, config.to)),
        isSome(config.selector)
          ? Observable_map(config.selector)
          : (identity as Observable.RunnableUpperBoundObservableOperator<
              number,
              T
            >),
      );

const Observable_animate: Observable.Signature["animate"] = <T = number>(
  config: Observable.Animation<T> | readonly Observable.Animation<T>[],
) => {
  const configs = isReadonlyArray<Observable.Animation<T>>(config)
    ? config
    : [config];
  const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
  return Observable_concatMany(observables);
};

export default Observable_animate;
