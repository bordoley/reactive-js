import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from "../../../ix.js";
declare const Enumerator_move: <T>(enumerator: {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [SourceLike_move]: () => void;
}) => boolean;
export { Enumerator_move as default };
