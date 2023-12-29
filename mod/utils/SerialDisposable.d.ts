import { DisposableLike, SerialDisposableLike } from "../utils.js";
interface SerialDisposableModule {
    create(): SerialDisposableLike;
    create<TDisposable extends DisposableLike>(initialValue: TDisposable): SerialDisposableLike<TDisposable>;
}
type Signature = SerialDisposableModule;
export declare const create: Signature["create"];
export {};
