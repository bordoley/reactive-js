import { EnumeratorLike_current } from "../../../ix.mjs";
declare const getCurrent: <T>(enumerator: {
    [EnumeratorLike_current]: T;
}) => T;
export { getCurrent as default };
