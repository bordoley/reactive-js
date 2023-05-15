/// <reference types="./Disposable.toObservable.d.ts" />

import SharedObservable_create from "../../SharedObservable/__internal__/SharedObservable.create.js";
import { compose } from "../../functions.js";
import Disposable_addTo from "./Disposable.addTo.js";
const Disposable_toObservable = () => compose(Disposable_addTo, SharedObservable_create);
export default Disposable_toObservable;
