import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_toObservable from "./Enumerator/__internal__/Enumerator.toObservable.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import { Function1 } from "./functions.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  ContainerTypeClass,
} from "./type-classes.js";
import {
  EnumerableLike,
  EnumeratorContainer,
  EnumeratorLike,
  RunnableLike,
} from "./types.js";

export type Type = EnumeratorContainer;

export interface EnumeratorModule
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    ContainerTypeClass<Type> {
  toObservable<T>(): Function1<EnumeratorLike<T>, EnumerableLike<T>>;
  toObservable<T>(options: {
    readonly delay: number;
    readonly delayStart?: boolean;
  }): Function1<EnumeratorLike<T>, RunnableLike<T>>;
}

export type Signature = EnumeratorModule;

export const empty: Signature["empty"] = Enumerator_empty;
export const keep: Signature["keep"] = Enumerator_keep;
export const map: Signature["map"] = Enumerator_map;
export const pick: Signature["pick"] = Enumerator_pick;
export const toObservable: Signature["toObservable"] = Enumerator_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
