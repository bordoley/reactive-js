/// <reference types="./Observable.liftEnumerableOperatorT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import Observable_lift from './Observable.lift.mjs';

const Observable_liftEnumerableOperatorT = {
    lift: Observable_lift(true, true),
    variance: reactive,
};

export { Observable_liftEnumerableOperatorT as default };
