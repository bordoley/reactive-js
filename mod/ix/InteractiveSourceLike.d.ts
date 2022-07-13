import { DisposableLike } from '../util/DisposableLike.js';
declare const InteractiveSourceLike_move: unique symbol;
interface InteractiveSourceLike extends DisposableLike {
    [InteractiveSourceLike_move](): void;
}
declare const move: <TSource extends InteractiveSourceLike = InteractiveSourceLike>(source: TSource) => TSource;
export { InteractiveSourceLike, InteractiveSourceLike_move, move };
