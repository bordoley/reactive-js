/// <reference types="./Element.addScrollHandler.d.ts" />

import EventSource_addEventHandler from "../../../../EventSource/__internal__/EventSource.addEventHandler.js";
import { compose } from "../../../../functions.js";
import Element_scrollEventSource from "./Element.scrollEventSource.js";
const Element_addScrollHandler = (handler) => compose(Element_scrollEventSource(), EventSource_addEventHandler(handler));
export default Element_addScrollHandler;
