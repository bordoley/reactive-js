/// <reference types="./Enumerable.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import Enumerable_lift from './Enumerable.lift.mjs';

const Enumerable_liftT = {
    lift: Enumerable_lift,
    variance: interactive,
};

export { Enumerable_liftT as default };
