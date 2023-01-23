import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from "../../../ix.js";
declare const EnumeratorLike__move: <T>(enumerator: {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [SourceLike_move]: () => void;
}) => boolean;
export { EnumeratorLike__move as default };
