import { DisposableLike } from "../util/DisposableLike.mjs";
declare const InteractiveSourceLike_move: unique symbol;
interface InteractiveSourceLike extends DisposableLike {
    [InteractiveSourceLike_move](): void;
}
declare const move: <TSource extends {
    [InteractiveSourceLike_move](): void;
} = InteractiveSourceLike>(source: TSource) => TSource;
export { InteractiveSourceLike, InteractiveSourceLike_move, move };
