import * as EventSource from "../../../../computations/EventSource.js";
import { Function1, SideEffect1, compose } from "../../../../functions.js";
import { DisposableLike } from "../../../../utils.js";
import type * as Element from "../../Element.js";
import Element_resizeEventSource from "./Element.resizeEventSource.js";

const Element_addResizeHandler: Element.Signature["addResizeHandler"] = <
  TElement extends Element,
>(
  handler: SideEffect1<ResizeObserverEntry>,
  options?: ResizeObserverOptions,
): Function1<TElement, DisposableLike> =>
  compose(
    Element_resizeEventSource(options),
    EventSource.addEventHandler(handler),
  );

export default Element_addResizeHandler;
