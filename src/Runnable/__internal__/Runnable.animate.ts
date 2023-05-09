import Observable_concatObservables from "../../Observable/__internal__/Observable.concatObservables.js";
import Observable_empty from "../../Observable/__internal__/Observable.empty.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_repeat from "../../Observable/__internal__/Observable.repeat.js";
import Optional_toObservable from "../../Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import type { AnimationConfig } from "../../Runnable.js";
import Runnable_spring from "../../Runnable/__internal__/Runnable.spring.js";
import { Container, RunnableContainer } from "../../containers.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../functions.js";
import { RunnableLike } from "../../types.js";
import Runnable_keyFrame from "./Runnable.keyFrame.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: AnimationConfig.Description<T>,
): RunnableLike<T> =>
  config.type === "loop"
    ? pipe(
        Runnable_animate<T>(config.animation),
        Observable_repeat<RunnableContainer.Type, T>(config.count),
      )
    : config.type === "delay"
    ? Observable_empty({ delay: config.duration })
    : config.type === "frame"
    ? pipe(
        config.value,
        Optional_toObservable(),
        isSome(config.selector)
          ? Observable_map<RunnableContainer.Type, number, T>(config.selector)
          : (identity as Container.Operator<RunnableContainer.Type, number, T>),
      )
    : pipe(
        config.type === "keyframe"
          ? Runnable_keyFrame(config.duration, config)
          : Runnable_spring(config),
        Observable_map<RunnableContainer.Type, number, number>(
          scale(config.from, config.to),
        ),
        isSome(config.selector)
          ? Observable_map<RunnableContainer.Type, number, T>(config.selector)
          : (identity as Container.Operator<RunnableContainer.Type, number, T>),
      );

const Runnable_animate: <T = number>(
  configs:
    | AnimationConfig.Description<T>
    | readonly AnimationConfig.Description<T>[],
) => RunnableLike<T> = <T = number>(
  config:
    | AnimationConfig.Description<T>
    | readonly AnimationConfig.Description<T>[],
) => {
  const configs = isReadonlyArray<AnimationConfig.Description<T>>(config)
    ? config
    : [config];
  const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
  return Observable_concatObservables(observables);
};

export default Runnable_animate;
