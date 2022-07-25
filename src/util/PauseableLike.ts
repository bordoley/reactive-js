import { PauseableLike_pause, PauseableLike_resume } from "../util";

export const pause = (pausable: { [PauseableLike_pause](): void }): void =>
  pausable[PauseableLike_pause]();

export const resume = (pausable: { [PauseableLike_resume](): void }): void =>
  pausable[PauseableLike_resume]();
