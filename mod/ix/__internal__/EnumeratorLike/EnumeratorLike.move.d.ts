import { EnumeratorLike_current, EnumeratorLike_hasCurrent, SourceLike_move } from "../../../ix.mjs";
declare const move: <T>(enumerator: {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [SourceLike_move]: () => void;
}) => boolean;
export { move as default };
