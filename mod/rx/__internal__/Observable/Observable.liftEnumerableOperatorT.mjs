/// <reference types="./Observable.liftEnumerableOperatorT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import Observable$lift from './Observable.lift.mjs';

const Observable$liftEnumerableOperatorT = {
    lift: Observable$lift(true, true),
    variance: reactive,
};

export { Observable$liftEnumerableOperatorT as default };
