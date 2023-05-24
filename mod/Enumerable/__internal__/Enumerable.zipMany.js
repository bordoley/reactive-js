/// <reference types="./Enumerable.zipMany.d.ts" />

import Enumerable_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerable_enumerate from "../../EnumerableBase/__internal__/EnumerableBase.enumerate.js";
import Enumerator_zipMany from "../../Enumerator/__internal__/Enumerator.zipMany.js";
import Observable_allArePure from "../../Observable/__internal__/Observable.allArePure.js";
import ReadonlyArray_map from "../../ReadonlyArray/__internal__/ReadonlyArray.map.js";
import { pipeLazy } from "../../functions.js";
const Enumerable_zipMany = (observables) => Enumerable_create(pipeLazy(observables, ReadonlyArray_map(Enumerable_enumerate()), Enumerator_zipMany), Observable_allArePure(observables));
export default Enumerable_zipMany;
