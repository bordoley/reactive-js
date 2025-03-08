import { EventSourceLike, MulticastObservableLike, PauseableObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
interface PauseableObservableModule {
    create<T>(op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>): PauseableObservableLike<T>;
}
type Signature = PauseableObservableModule;
export declare const create: Signature["create"];
export {};
