/// <reference types="./Disposable.toEventSource.d.ts" />

import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { compose } from "../../functions.js";
import Disposable_addTo from "./Disposable.addTo.js";
const Disposable_toEventSource = () => compose(Disposable_addTo, EventSource_create);
export default Disposable_toEventSource;
