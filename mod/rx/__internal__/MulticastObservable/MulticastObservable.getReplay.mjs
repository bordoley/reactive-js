/// <reference types="./MulticastObservable.getReplay.d.ts" />
import { MulticastObservableLike_replay } from '../../../rx.mjs';

const MulticastObservable$getReplay = (obs) => obs[MulticastObservableLike_replay];

export { MulticastObservable$getReplay as default };
