import { EnumeratorLike, ToReadonlyArray } from "../containers.js";
import Enumerator_toReadonlyArray from "./Enumerator/__internal__/Enumerator.toReadonlyArray.js";

export const toReadonlyArray: ToReadonlyArray<EnumeratorLike>["toReadonlyArray"] =
  Enumerator_toReadonlyArray;
