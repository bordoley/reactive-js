import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

interface ObservablePick {
  pick<C extends ObservableLike, T, TKey extends keyof T>(
    key: TKey,
  ): ContainerOperator<C, T, T[TKey]>;
  pick<
    C extends ObservableLike,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
  ): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
  pick<
    C extends ObservableLike,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): ContainerOperator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
const Observable_pick: ObservablePick["pick"] = <C extends ObservableLike>(
  ...keys: any[]
): ContainerOperator<C, any, unknown> =>
  Observable_map<C, any, unknown>((value: any) => {
    let result: any = value;
    for (const key of keys) {
      result = result[key];
    }
    return result;
  });

export default Observable_pick;
