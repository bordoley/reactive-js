/// <reference types="./MulticastObservable.getReplay.d.ts" />
import { MulticastObservableLike_replay } from '../../../rx.mjs';

const MulticastObservable_getReplay = (obs) => obs[MulticastObservableLike_replay];

export { MulticastObservable_getReplay as default };
