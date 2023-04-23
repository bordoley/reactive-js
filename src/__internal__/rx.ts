import { ContainerOperator } from "../containers.js";
import { Function1, Function2, Optional } from "../functions.js";
import { ObservableLike, ObserverLike } from "../rx.js";
import {
  __WithLatestLike_hasLatest,
  __WithLatestLike_otherLatest,
  __WithLatestLike_selector,
} from "./symbols.js";

export interface Lift<C extends ObservableLike> {
  lift<TA, TB>(
    operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
  ): ContainerOperator<C, TA, TB>;
}

export interface WithLatestLike<TA, TB, T> {
  [__WithLatestLike_hasLatest]: boolean;
  [__WithLatestLike_otherLatest]: Optional<TB>;
  [__WithLatestLike_selector]: Function2<TA, TB, T>;
}
