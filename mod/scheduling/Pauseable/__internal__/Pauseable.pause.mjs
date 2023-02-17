/// <reference types="./Pauseable.pause.d.ts" />
import { pipe, returns } from '../../../functions.mjs';
import { PauseableState_paused } from '../../../scheduling.mjs';
import Dispatcher_dispatch from '../../Dispatcher/__internal__/Dispatcher.dispatch.mjs';

const Pauseable_pause = (pauseable) => pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_paused)));

export { Pauseable_pause as default };
