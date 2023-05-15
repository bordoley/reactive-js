import type * as Disposable from "../../Disposable.js";
import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { compose } from "../../functions.js";
import Disposable_addTo from "./Disposable.addTo.js";

const Disposable_toObservable: Disposable.Signature["toObservable"] = () =>
  compose(Disposable_addTo, SharedObservable_create);

export default Disposable_toObservable;
