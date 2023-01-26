/// <reference types="./Runnable.liftT.d.ts" />
import { reactive } from '../../../containers/__internal__/containers.internal.mjs';
import Runnable$lift from './Runnable.lift.mjs';

const Runnable$liftT = {
    lift: Runnable$lift,
    variance: reactive,
};

export { Runnable$liftT as default };
