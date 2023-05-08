import { EventSourceLike } from "../../core.js";
import { Optional, SideEffect1 } from "../../functions.js";
import { CSSStyleMapLike } from "../web.js";
interface Animate {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animate: Animate["__animate"];
export {};
