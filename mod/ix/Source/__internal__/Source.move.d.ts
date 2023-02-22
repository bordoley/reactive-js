import { SourceLike, SourceLike_move } from "../../../ix.js";
declare const Source_move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
export default Source_move;
