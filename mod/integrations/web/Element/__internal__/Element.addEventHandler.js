/// <reference types="./Element.addEventHandler.d.ts" />

import * as EventSource from "../../../../EventSource.js";
import { compose } from "../../../../functions.js";
import Element_eventSource from "./Element.eventSource.js";
const Element_addEventHandler = (eventName, eventHandler, options) => compose(Element_eventSource(eventName, options), EventSource.addEventHandler(eventHandler));
export default Element_addEventHandler;
