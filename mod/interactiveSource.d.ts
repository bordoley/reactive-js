import { Disposable } from "./disposable.mjs";
interface InteractiveSourceLike extends Disposable {
    move(this: this): void;
}
declare const move: <TSource extends InteractiveSourceLike = InteractiveSourceLike>(source: TSource) => TSource;
export { InteractiveSourceLike, move };
