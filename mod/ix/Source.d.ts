import { SourceLike, SourceLike_move } from "../ix.js";
export declare const move: <TSource extends {
    [SourceLike_move](): void;
} = SourceLike>(source: TSource) => TSource;
/** @ignore */
declare const Source: {
    move: <TSource extends {
        [SourceLike_move](): void;
    } = SourceLike>(source: TSource) => TSource;
};
export default Source;
