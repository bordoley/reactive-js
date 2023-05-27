/// <reference types="./Enumerable.toEventSource.d.ts" />

import Iterable_toEventSource from "../../Iterable/__internal__/Iterable.toEventSource.js";
import Observable_toIterable from "../../Observable/__internal__/Observable.toIterable.js";
import { compose } from "../../functions.js";
const Enumerable_toEventSource = () => compose(Observable_toIterable(), Iterable_toEventSource());
export default Enumerable_toEventSource;
