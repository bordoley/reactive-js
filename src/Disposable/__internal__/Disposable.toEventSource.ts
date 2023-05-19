import type * as Disposable from "../../Disposable.js";
import EventSource_create from "../../EventSource/__internal__/EventSource.create.js";
import { compose } from "../../functions.js";
import Disposable_addTo from "./Disposable.addTo.js";

const Disposable_toEventSource: Disposable.Signature["toEventSource"] = () =>
  compose(Disposable_addTo, EventSource_create);

export default Disposable_toEventSource;
