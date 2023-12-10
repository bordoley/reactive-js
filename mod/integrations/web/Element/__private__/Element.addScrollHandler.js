/// <reference types="./Element.addScrollHandler.d.ts" />

import * as EventSource from "../../../../events/EventSource.js";
import { compose } from "../../../../functions.js";
import Element_scrollEventSource from "./Element.scrollEventSource.js";
const Element_addScrollHandler = (handler) => compose(Element_scrollEventSource(), EventSource.addEventHandler(handler));
export default Element_addScrollHandler;
