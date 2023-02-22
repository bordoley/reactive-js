/// <reference types="./Pauseable.pause.d.ts" />

import { pipe, returns } from "../../../functions.js";
import { PauseableState_paused } from "../../../scheduling.js";
import Dispatcher_dispatch from "../../Dispatcher/__internal__/Dispatcher.dispatch.js";
const Pauseable_pause = (pauseable) => pipe(pauseable, Dispatcher_dispatch(returns(PauseableState_paused)));
export default Pauseable_pause;
