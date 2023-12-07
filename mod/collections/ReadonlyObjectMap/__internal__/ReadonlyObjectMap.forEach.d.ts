import { ReadonlyObjectMapLike } from "../../../collections.js";
import { Function1, SideEffect2 } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
declare const ReadonlyObjectMap_forEach: <T, TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>(effect: SideEffect2<T, TKey>) => Function1<ReadonlyObjectMapLike<TKey, T>, ReadonlyObjectMapLike<TKey, T>>;
export default ReadonlyObjectMap_forEach;
