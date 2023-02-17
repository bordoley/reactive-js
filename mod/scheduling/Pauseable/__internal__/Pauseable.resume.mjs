/// <reference types="./Pauseable.resume.d.ts" />
import { pipe, returns } from '../../../functions.mjs';
import { PauseableState_running } from '../../../scheduling.mjs';
import Dispatcher_dispatch from '../../Dispatcher/__internal__/Dispatcher.dispatch.mjs';

const Pauseable_resume = (pauseable) => pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_running)));

export { Pauseable_resume as default };
