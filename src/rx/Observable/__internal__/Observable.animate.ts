import { ContainerOperator } from "../../../containers.js";
import { identity, isSome, pipe } from "../../../functions.js";
import ReadonlyArray_map from "../../../keyed-containers/ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { Animate, AnimationConfig, RunnableLike } from "../../../rx.js";
import Observable_concatObservables from "./Observable.concatObservables.js";
import Observable_empty from "./Observable.empty.js";
import Observable_map from "./Observable.map.js";
import Observable_spring from "./Observable.spring.js";
import Observable_tween from "./Observable.tween.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: AnimationConfig<T>,
): RunnableLike<T> =>
  config.type === "delay"
    ? Observable_empty({ delay: config.duration })
    : pipe(
        config.type === "tween"
          ? Observable_tween(config.duration, config)
          : Observable_spring(config),
        Observable_map<RunnableLike, number, number>(
          scale(config.from, config.to),
        ),
        isSome(config.selector)
          ? Observable_map<RunnableLike, number, T>(config.selector)
          : (identity as ContainerOperator<RunnableLike, number, T>),
      );

const Observable_animate: Animate<RunnableLike>["animate"] = <T = number>(
  ...configs: AnimationConfig<T>[]
) => {
  const observables = pipe(configs, ReadonlyArray_map(parseAnimationConfig));
  return Observable_concatObservables(observables);
};

export default Observable_animate;
