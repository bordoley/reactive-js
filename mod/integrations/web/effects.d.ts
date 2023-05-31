import { Optional, SideEffect1 } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
import { CSSStyleMapLike } from "../web.js";
interface WebEffectsModule {
    __animate(animation: EventSourceLike<CSSStyleMapLike>): SideEffect1<Optional<HTMLElement | null>>;
    __animate<T>(animation: EventSourceLike<T>, selector: (ev: T) => CSSStyleMapLike): SideEffect1<Optional<HTMLElement | null>>;
}
type Signature = WebEffectsModule;
export declare const __animate: Signature["__animate"];
export {};
