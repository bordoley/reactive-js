import {
  Containers,
  ReactiveContainers,
  RunnableContainer,
  RunnableLike,
} from "../../../core.js";
import Optional_toObservable from "../../../core/Optional/__internal__/Optional.toObservable.js";
import ReadonlyArray_map from "../../../core/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_empty from "./Observable.empty.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: ReactiveContainers.AnimationConfig<T>,
): RunnableLike<T> =>
  config.type === "loop"
    ? pipe(
        Observable_animate<T>(config.animation),
        Observable_repeat<RunnableContainer, T>(config.count),
      )
    : config.type === "delay"
    ? Observable_empty({ delay: config.duration })
    : config.type === "frame"
    ? pipe(
        config.value,
        Optional_toObservable(),
        isSome(config.selector)
          ? Observable_map<RunnableContainer, number, T>(config.selector)
          : (identity as Containers.Operator<RunnableContainer, number, T>),
      )
    : pipe(
        config.type === "keyframe"
          ? Observable_keyFrame(config.duration, config)
          : Observable_spring(config),
        Observable_map<RunnableContainer, number, number>(
          scale(config.from, config.to),
        ),
        isSome(config.selector)
          ? Observable_map<RunnableContainer, number, T>(config.selector)
          : (identity as Containers.Operator<RunnableContainer, number, T>),
      );

const Observable_animate: ReactiveContainers.TypeClass<RunnableContainer>["animate"] =
  <T = number>(
    config:
      | ReactiveContainers.AnimationConfig<T>
      | readonly ReactiveContainers.AnimationConfig<T>[],
  ) => {
    const configs = isReadonlyArray<ReactiveContainers.AnimationConfig<T>>(
      config,
    )
      ? config
      : [config];
    const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
    return Observable_concatObservables(observables);
  };

export default Observable_animate;
