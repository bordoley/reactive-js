import { ReadonlyObjectMapLike } from "../collections.js";
import { MulticastObservableLike } from "../concurrent.js";
import { StoreLike } from "../events.js";
import { Updater } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
    readonly title: string;
    readonly path: string;
    readonly query: string;
    readonly fragment: string;
}
export declare const WindowLocationLike_push: unique symbol;
export declare const WindowLocationLike_goBack: unique symbol;
export declare const WindowLocationLike_canGoBack: unique symbol;
export declare const WindowLocationLike_replace: unique symbol;
/**
 * @noInheritDoc
 */
export interface WindowLocationLike extends MulticastObservableLike<WindowLocationURI> {
    readonly [WindowLocationLike_canGoBack]: StoreLike<boolean>;
    [WindowLocationLike_goBack](): void;
    [WindowLocationLike_push](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
    [WindowLocationLike_replace](stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI): void;
}
/**
 * @noInheritDoc
 */
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
    readonly time: number;
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
