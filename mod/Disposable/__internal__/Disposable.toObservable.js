/// <reference types="./Disposable.toObservable.d.ts" />

import MulticastObservable_create from "../../MulticastObservable/__internal__/MulticastObservable.create.js";
import { compose } from "../../functions.js";
import Disposable_addTo from "./Disposable.addTo.js";
const Disposable_toObservable = () => compose(Disposable_addTo, MulticastObservable_create);
export default Disposable_toObservable;
