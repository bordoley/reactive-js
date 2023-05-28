import type * as Observable from "../../Observable.js";
import {
  Factory,
  Function3,
  Tuple2,
  none,
  pipe,
  tuple,
} from "../../functions.js";
import { RunnableBaseLike } from "../../types.js";
import Observable_reduce from "./Observable.reduce.js";
import Observable_scan from "./Observable.scan.js";

const Observable_reduceWithKey: Observable.Signature["reduceWithKey"] = (<
    T,
    TAcc,
  >(
    reducer: Function3<TAcc, T, number, TAcc>,
    initialValue: Factory<TAcc>,
  ) =>
  (obs: RunnableBaseLike<T>) =>
    pipe(
      obs,
      Observable_scan(
        ([cnt, _], next: T) => tuple(cnt + 1, next),
        () => tuple(-1, none as T),
      ),
      Observable_reduce(
        (acc: TAcc, [cnt, v]: Tuple2<number, T>) => reducer(acc, v, cnt),
        initialValue,
      ),
    )) as Observable.Signature["reduceWithKey"];

export default Observable_reduceWithKey;
