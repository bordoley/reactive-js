import Container_pick from "../../Container/__internal__/Container.pick.js";
import { Containers, ObservableContainer } from "../../containers.js";
import Observable_map from "./Observable.map.js";

interface ObservablePick {
  pick<C extends ObservableContainer.Type, T, TKey extends keyof T>(
    key: TKey,
  ): Containers.Operator<C, T, T[TKey]>;
  pick<
    C extends ObservableContainer.Type,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
  ): Containers.Operator<C, T, T[TKeyA][TKeyB]>;
  pick<
    C extends ObservableContainer.Type,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): Containers.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
const Observable_pick: ObservablePick["pick"] =
  /*@__PURE__*/ Container_pick(Observable_map);

export default Observable_pick;
