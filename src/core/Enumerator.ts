import {
  Containers,
  EnumeratorContainer,
  RunnableContainers,
} from "../core.js";
import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";

export const empty: Containers.TypeClass<EnumeratorContainer>["empty"] =
  Enumerator_empty;
export const keep: Containers.TypeClass<EnumeratorContainer>["keep"] =
  Enumerator_keep;
export const map: Containers.TypeClass<EnumeratorContainer>["map"] =
  Enumerator_map;
export const pick: Containers.TypeClass<EnumeratorContainer>["pick"] =
  Enumerator_pick;
export const toReadonlyArray: RunnableContainers.TypeClass<EnumeratorContainer>["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
