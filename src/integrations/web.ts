import { ReadonlyObjectMapLike } from "../collections.js";
import { ReplayObservableLike } from "../concurrent.js";
import { StoreLike } from "../events.js";
import { Updater } from "../functions.js";

/**
 * @noInheritDoc
 */
export interface WindowLocationURI {
  readonly title: string;
  // FIXME: Can we enforce non-empty string in the type system
  // should we enforce valid typing to make sure the various strings are
  // rfc compliant?
  readonly path: string;
  readonly query: string;
  readonly fragment: string;
}

export const WindowLocationLike_push = Symbol("WindowLocationLike_push");
export const WindowLocationLike_goBack = Symbol("WindowLocationLike_goBack");
export const WindowLocationLike_canGoBack = Symbol(
  "WindowLocationLike_canGoBack",
);
export const WindowLocationLike_replace = Symbol("WindowLocationLike_replace");

/**
 * @noInheritDoc
 */
export interface WindowLocationLike
  extends ReplayObservableLike<WindowLocationURI> {
  readonly [WindowLocationLike_canGoBack]: StoreLike<boolean>;

  [WindowLocationLike_goBack](): void;

  [WindowLocationLike_push](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): void;

  [WindowLocationLike_replace](
    stateOrUpdater: Updater<WindowLocationURI> | WindowLocationURI,
  ): void;
}

/**
 * @noInheritDoc
 */
export interface CSSStyleMapLike
  extends ReadonlyObjectMapLike<
    keyof Omit<
      CSSStyleDeclaration,
      | "item"
      | "length"
      | "parentRule"
      | "getPropertyPriority"
      | "getPropertyValue"
      | "removeProperty"
      | "setProperty"
      | number
      | typeof Symbol.iterator
    >,
    string
  > {}

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
