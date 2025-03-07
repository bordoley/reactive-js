/// <reference types="./Element.addResizeHandler.d.ts" />

import * as EventSource from "../../../computations/EventSource.js";
import { compose } from "../../../functions.js";
import Element_resizeEventSource from "./Element.resizeEventSource.js";
const Element_addResizeHandler = (handler, options) => compose(Element_resizeEventSource(options), EventSource.addEventHandler(handler));
export default Element_addResizeHandler;
