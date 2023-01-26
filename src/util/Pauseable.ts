import { PauseableLike_pause, PauseableLike_resume } from "../util";
import Pauseable$pause from "./__internal__/Pauseable/Pauseable.pause";
import Pauseable$resume from "./__internal__/Pauseable/Pauseable.resume";

export const pause: <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable$pause;

export const resume: <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
) => TPauseable = Pauseable$resume;
