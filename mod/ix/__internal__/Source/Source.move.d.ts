import { SourceLike_move, SourceLike } from "../../../ix.js";
declare const Source$move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
export { Source$move as default };
