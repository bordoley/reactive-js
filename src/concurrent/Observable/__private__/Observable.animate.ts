import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { PureRunnableLike } from "../../../concurrent.js";
import { identity, isReadonlyArray, isSome, pipe } from "../../../functions.js";
import type * as Observable from "../../Observable.js";
import Observable_concatMany from "./Observable.concatMany.js";
import Observable_empty from "./Observable.empty.js";
import Observable_fromValue from "./Observable.fromValue.js";
import Observable_keyFrame from "./Observable.keyFrame.js";
import Observable_map from "./Observable.map.js";
import Observable_repeat from "./Observable.repeat.js";
import Observable_spring from "./Observable.spring.js";

const scale = (start: number, end: number) => (v: number) => {
  const diff = end - start;
  return start + v * diff;
};

const parseAnimationConfig = <T = number>(
  config: Observable.Animation<T>,
): PureRunnableLike<T> =>
  config.type === "loop"
    ? pipe(
        Observable_animate<T>(config.animation),
        Observable_repeat<T>(config.count ?? 1),
      )
    : config.type === "delay"
    ? Observable_empty<T>({ delay: config.duration })
    : config.type === "frame" && isSome(config.selector)
    ? pipe(
        config.value,
        Observable_fromValue(),
        isSome(config.selector)
          ? Observable_map(config.selector)
          : (identity as Observable.PureObservableOperator<number, T>),
      )
    : config.type === "frame"
    ? pipe(
        config.value,
        Observable_fromValue(),
        isSome(config.selector)
          ? Observable_map(config.selector)
          : (identity as Observable.PureObservableOperator<number, T>),
      )
    : pipe(
        config.type === "keyframe"
          ? Observable_keyFrame(config.duration, config)
          : Observable_spring(config),
        Observable_map(scale(config.from, config.to)),
        isSome(config.selector)
          ? Observable_map(config.selector)
          : (identity as Observable.PureObservableOperator<number, T>),
      );

const Observable_animate: Observable.Signature["animate"] = <T = number>(
  config: Observable.Animation<T> | readonly Observable.Animation<T>[],
) =>
  Observable_concatMany(
    pipe(
      isReadonlyArray<Observable.Animation<T>>(config) ? config : [config],
      ReadonlyArray.map(parseAnimationConfig),
    ),
  );

export default Observable_animate;
