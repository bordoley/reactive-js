/// <reference types="./Element.addScrollHandler.d.ts" />

import * as Broadcaster from "../../../computations/Broadcaster.js";
import { compose } from "../../../functions.js";
import Element_scrollEventSource from "./Element.scrollEventSource.js";
const Element_addScrollHandler = (handler) => compose(Element_scrollEventSource(), Broadcaster.addEventHandler(handler));
export default Element_addScrollHandler;
