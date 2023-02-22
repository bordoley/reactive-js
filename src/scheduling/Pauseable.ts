import { PauseableLike } from "../scheduling.js";
import Pauseable_pause from "./Pauseable/__internal__/Pauseable.pause.js";
import Pauseable_resume from "./Pauseable/__internal__/Pauseable.resume.js";

export const pause: <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
) => TPauseable = Pauseable_pause;

export const resume: <TPauseable extends PauseableLike>(
  pauseable: TPauseable,
) => TPauseable = Pauseable_resume;

/** @ignore */
const Pauseable = {
  pause,
  resume,
};

export default Pauseable;
