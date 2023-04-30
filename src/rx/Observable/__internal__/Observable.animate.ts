import { ContainerOperator } from "../../../containers.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import {
  Animate,
  AnimationConfig,
  RunnableContainer,
  RunnableLike,
} from "../../../rx.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_empty from "./Observable.empty.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";
import Observable_tween from "./Observable.tween.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: AnimationConfig<T>,
): RunnableLike<T> =>
  config.type === "loop"
    ? pipe(
        Observable_animate<T>(config.animation),
        Observable_repeat<RunnableContainer, T>(config.count),
      )
    : config.type === "delay"
    ? Observable_empty({ delay: config.duration })
    : pipe(
        config.type === "tween"
          ? Observable_tween(config.duration, config)
          : Observable_spring(config),
        Observable_map<RunnableContainer, number, number>(
          scale(config.from, config.to),
        ),
        isSome(config.selector)
          ? Observable_map<RunnableContainer, number, T>(config.selector)
          : (identity as ContainerOperator<RunnableContainer, number, T>),
      );

const Observable_animate: Animate<RunnableContainer>["animate"] = <T = number>(
  config: AnimationConfig<T> | readonly AnimationConfig<T>[],
) => {
  const configs = isReadonlyArray<AnimationConfig<T>>(config)
    ? config
    : [config];
  const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
  return Observable_concatObservables(observables);
};

export default Observable_animate;
