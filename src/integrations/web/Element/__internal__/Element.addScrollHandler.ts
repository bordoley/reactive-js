import EventSource_addEventHandler from "../../../../EventSource/__internal__/EventSource.addEventHandler.js";
import { SideEffect1, compose } from "../../../../functions.js";
import { ScrollValue } from "../../../web.js";
import type * as Element from "../../Element.js";
import Element_scrollEventSource from "./Element.scrollEventSource.js";

const Element_addScrollHandler: Element.Signature["addScrollHandler"] = (
  handler: SideEffect1<ScrollValue>,
) => compose(Element_scrollEventSource(), EventSource_addEventHandler(handler));

export default Element_addScrollHandler;
