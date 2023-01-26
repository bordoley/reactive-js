/// <reference types="./Runnable.liftT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import Runnable_lift from './Runnable.lift.mjs';

const Runnable_liftT = {
    lift: Runnable_lift,
    variance: reactive,
};

export { Runnable_liftT as default };
