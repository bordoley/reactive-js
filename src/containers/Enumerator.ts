import {
  Empty,
  EnumeratorContainer,
  Keep,
  Map,
  Pick,
  ToReadonlyArray,
} from "../containers.js";
import Enumerator_empty from "./Enumerator/__internal__/Enumerator.empty.js";
import Enumerator_keep from "./Enumerator/__internal__/Enumerator.keep.js";
import Enumerator_map from "./Enumerator/__internal__/Enumerator.map.js";
import Enumerator_pick from "./Enumerator/__internal__/Enumerator.pick.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";

export const empty: Empty<EnumeratorContainer>["empty"] = Enumerator_empty;
export const keep: Keep<EnumeratorContainer>["keep"] = Enumerator_keep;
export const map: Map<EnumeratorContainer>["map"] = Enumerator_map;
export const pick: Pick<EnumeratorContainer>["pick"] = Enumerator_pick;
export const toReadonlyArray: ToReadonlyArray<EnumeratorContainer>["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
