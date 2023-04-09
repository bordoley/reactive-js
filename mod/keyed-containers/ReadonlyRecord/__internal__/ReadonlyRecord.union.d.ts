import { ReadonlyRecordLike } from "../../../keyed-containers.js";
declare const ReadonlyRecord_union: <TKey extends string | number | symbol, T>(m1: ReadonlyRecordLike<T, TKey>, m2: ReadonlyRecordLike<T, TKey>) => ReadonlyRecordLike<T, TKey>;
export default ReadonlyRecord_union;
