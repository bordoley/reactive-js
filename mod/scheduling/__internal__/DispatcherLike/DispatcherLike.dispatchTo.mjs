/// <reference types="./DispatcherLike.dispatchTo.d.ts" />
import { DispatcherLike_dispatch } from '../../../scheduling.mjs';

const DispatcherLike__dispatchTo = (dispatcher) => v => dispatcher[DispatcherLike_dispatch](v);

export { DispatcherLike__dispatchTo as default };
