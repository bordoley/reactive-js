/// <reference types="./ObservableLike.liftEnumerableOperatorT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import lift from './ObservableLike.lift.mjs';

const liftEnumerableOperatorT = {
    lift: lift(true, true),
    variance: reactive,
};

export { liftEnumerableOperatorT as default };
