import { ReadonlyObjectMapLike } from "../../containers.js";
import { Optional, SideEffect1 } from "../../functions.js";
import { EventSourceLike } from "../../util.js";
import { CSSStyleKey } from "../web.js";
interface Animate {
    __animate(animation: EventSourceLike<ReadonlyObjectMapLike<CSSStyleKey, string>>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => ReadonlyObjectMapLike<CSSStyleKey, string>): SideEffect1<Optional<HTMLElement | null>>;
}
export declare const __animate: Animate["__animate"];
export {};
