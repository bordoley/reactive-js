import { DisposableLike } from "./disposable.mjs";
interface InteractiveSourceLike extends DisposableLike {
    move(this: this): void;
}
declare const move: <TSource extends InteractiveSourceLike = InteractiveSourceLike>(source: TSource) => TSource;
export { InteractiveSourceLike, move };
