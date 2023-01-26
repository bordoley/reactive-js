import { SourceLike_move, SourceLike } from "../ix.js";
declare const move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
export { move };
