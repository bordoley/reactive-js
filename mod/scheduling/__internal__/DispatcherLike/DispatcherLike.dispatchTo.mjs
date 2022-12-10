/// <reference types="./DispatcherLike.dispatchTo.d.ts" />
import { DispatcherLike_dispatch } from '../../../scheduling.mjs';

const dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);

export { dispatchTo as default };
