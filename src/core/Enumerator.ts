import { Container, EnumeratorContainer } from "../core.js";
import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";

export const empty: Container.TypeClass<EnumeratorContainer>["empty"] =
  Enumerator_empty;
export const keep: Container.TypeClass<EnumeratorContainer>["keep"] =
  Enumerator_keep;
export const map: Container.TypeClass<EnumeratorContainer>["map"] =
  Enumerator_map;
export const pick: Container.TypeClass<EnumeratorContainer>["pick"] =
  Enumerator_pick;
export const toReadonlyArray: Container.TypeClass<EnumeratorContainer>["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
