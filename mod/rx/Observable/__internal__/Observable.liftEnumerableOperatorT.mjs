/// <reference types="./Observable.liftEnumerableOperatorT.d.ts" />
import Observable_lift from './Observable.lift.mjs';

const Observable_liftEnumerableOperatorT = {
    lift: Observable_lift(true, true),
};

export { Observable_liftEnumerableOperatorT as default };
