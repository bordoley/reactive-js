import { Container, ObservableContainer } from "../../../core.js";
import Container_pick from "../../../core/Container/__internal__/Container.pick.js";
import Observable_map from "./Observable.map.js";

interface ObservablePick {
  pick<C extends ObservableContainer, T, TKey extends keyof T>(
    key: TKey,
  ): Container.Operator<C, T, T[TKey]>;
  pick<
    C extends ObservableContainer,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
  ): Container.Operator<C, T, T[TKeyA][TKeyB]>;
  pick<
    C extends ObservableContainer,
    T,
    TKeyA extends keyof T,
    TKeyB extends keyof T[TKeyA],
    TKeyC extends keyof T[TKeyA][TKeyB],
  >(
    keyA: TKeyA,
    keyB: TKeyB,
    keyC: TKeyC,
  ): Container.Operator<C, T, T[TKeyA][TKeyB][TKeyC]>;
}
const Observable_pick: ObservablePick["pick"] =
  /*@__PURE__*/ Container_pick(Observable_map);

export default Observable_pick;
