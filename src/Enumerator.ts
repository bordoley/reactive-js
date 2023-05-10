import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";
import {
  BlockingContainerBaseTypeClass,
  ConcreteContainerBaseTypeClass,
  ContainerTypeClass,
} from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  EnumeratorLike,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}

export interface Signature
  extends ConcreteContainerBaseTypeClass<Type>,
    BlockingContainerBaseTypeClass<Type>,
    ContainerTypeClass<Type> {}

export const empty: Signature["empty"] = Enumerator_empty;
export const keep: Signature["keep"] = Enumerator_keep;
export const map: Signature["map"] = Enumerator_map;
export const pick: Signature["pick"] = Enumerator_pick;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
