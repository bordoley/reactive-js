import { SourceLike_move, SourceLike } from "../../../ix.js";
declare const Source_move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
export { Source_move as default };
