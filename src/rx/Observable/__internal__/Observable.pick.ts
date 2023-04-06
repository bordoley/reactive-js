import { ContainerOperator } from "../../../containers.js";
import { ObservableLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

interface ObservablePick {
  pick<C extends ObservableLike, T>(
    key: keyof T,
  ): ContainerOperator<C, T, T[typeof key]>;
  pick<C extends ObservableLike, T>(
    keyA: keyof T,
    keyB: keyof T[typeof keyA],
  ): ContainerOperator<C, T, T[typeof keyA][typeof keyB]>;
  pick<C extends ObservableLike, T>(
    keyA: keyof T,
    keyB: keyof T[typeof keyA],
  ): ContainerOperator<C, T, T[typeof keyA][typeof keyB]>;
  pick<C extends ObservableLike, T>(
    keyA: keyof T,
    keyB: keyof T[typeof keyA],
    keyC: keyof T[typeof keyA][typeof keyB],
  ): ContainerOperator<C, T, T[typeof keyA][typeof keyB][typeof keyC]>;
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
