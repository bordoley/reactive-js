/// <reference types="./Enumerable.liftT.d.ts" />
import { interactive } from '../../../containers/__internal__/containers.internal.mjs';
import Enumerable$lift from './Enumerable.lift.mjs';

const Enumerable$liftT = {
    lift: Enumerable$lift,
    variance: interactive,
};

export { Enumerable$liftT as default };
