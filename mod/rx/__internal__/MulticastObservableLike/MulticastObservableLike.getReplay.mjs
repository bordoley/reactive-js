/// <reference types="./MulticastObservableLike.getReplay.d.ts" />
import { MulticastObservableLike_replay } from '../../../rx.mjs';

const getReplay = (obs) => obs[MulticastObservableLike_replay];

export { getReplay as default };
