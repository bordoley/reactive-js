import { __WindowLocationLike_canGoBack as WindowLocationLike_canGoBack, __WindowLocationLike_goBack as WindowLocationLike_goBack, __WindowLocationLike_push as WindowLocationLike_push, __WindowLocationLike_replace as WindowLocationLike_replace } from "../__internal__/symbols.js";
import { ReadonlyObjectMapLike } from "../containers.js";
import { Updater } from "../functions.js";
import { MulticastObservableLike, ObservableLike } from "../rx.js";
export { WindowLocationLike_push, WindowLocationLike_goBack, WindowLocationLike_canGoBack, WindowLocationLike_replace, };
/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
    readonly title: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
}
/**
 * @noInheritDoc
 */
export interface WindowLocationLike extends MulticastObservableLike<WindowLocationURI> {
    readonly [WindowLocationLike_canGoBack]: ObservableLike<boolean>;
    [WindowLocationLike_goBack](): void;
    [WindowLocationLike_push](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
    [WindowLocationLike_replace](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
}
export interface CSSStyleMapLike extends ReadonlyObjectMapLike<keyof Omit<CSSStyleDeclaration, "item" | "length" | "parentRule" | "getPropertyPriority" | "getPropertyValue" | "removeProperty" | "setProperty" | number | typeof Symbol.iterator>, string> {
}
/**
 * @noInheritDoc
 */
export interface ScrollState {
    readonly current: number;
    readonly progress: number;
    readonly scrollLength: number;
    readonly velocity: number;
    readonly acceleration: number;
}
/**
 * @noInheritDoc
 */
export interface ScrollValue {
    readonly x: ScrollState;
    readonly y: ScrollState;
}
/**
 * @noInheritDoc
 */
export interface Rect {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
    readonly left: number;
}
