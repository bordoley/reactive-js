import { SourceLike_move, SourceLike } from "../ix.mjs";
declare const move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
export { move };
