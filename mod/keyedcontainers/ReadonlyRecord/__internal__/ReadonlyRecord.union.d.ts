import { ReadonlyRecordLike } from "../../../keyedcontainers.js";
declare const ReadonlyRecord_union: <TKey extends string | number | symbol, T>(m1: ReadonlyRecordLike<TKey, T>, m2: ReadonlyRecordLike<TKey, T>) => ReadonlyRecordLike<TKey, T>;
export default ReadonlyRecord_union;
