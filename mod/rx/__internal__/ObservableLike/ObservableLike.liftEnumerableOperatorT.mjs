/// <reference types="./ObservableLike.liftEnumerableOperatorT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import ObservableLike__lift from './ObservableLike.lift.mjs';

const ObservableLike__liftEnumerableOperatorT = {
    lift: ObservableLike__lift(true, true),
    variance: reactive,
};

export { ObservableLike__liftEnumerableOperatorT as default };
