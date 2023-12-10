import * as EventSource from "../../../../events/EventSource.js";
import { Function1, SideEffect1, compose } from "../../../../functions.js";
import { DisposableLike } from "../../../../utils.js";
import type * as Element from "../../Element.js";
import Element_eventSource from "./Element.eventSource.js";

const Element_addEventHandler: Element.Signature["addEventHandler"] = (
  eventName: string,
  eventHandler: SideEffect1<unknown>,
  options?: { passive?: boolean; capture?: boolean },
): Function1<EventTarget, DisposableLike> =>
  compose(
    Element_eventSource(eventName, options),
    EventSource.addEventHandler(eventHandler),
  );

export default Element_addEventHandler;
