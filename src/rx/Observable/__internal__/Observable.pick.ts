import { ContainerOperator } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_map from "./Observable.map.js";

interface ObservablePick {
  pick<C extends ObservableContainerLike, T, TKey extends keyof T>(
    key: TKey,
  ): ContainerOperator<C, T, T[TKey]>;
  pick<
    C extends ObservableContainerLike,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
  ): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
  pick<
    C extends ObservableContainerLike,
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
const Observable_pick: ObservablePick["pick"] =
  /*@__PURE__*/ Container_pick(Observable_map);

export default Observable_pick;
