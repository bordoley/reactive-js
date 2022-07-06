import { Disposable } from "./disposable.mjs";
import { TInteractive } from "./liftable.mjs";
interface InteractiveSourceLike extends Disposable {
    readonly TLiftableContainerStateType: TInteractive;
    move(this: this): void;
}
declare const move: <TSource extends InteractiveSourceLike = InteractiveSourceLike>(source: TSource) => TSource;
export { InteractiveSourceLike, move };
