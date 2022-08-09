import { PauseableLike_pause, PauseableLike_resume } from "../util";

export const pause = <TPauseable extends { [PauseableLike_pause](): void }>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_pause]();
  return pausable;
};

export const resume = <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_resume]();
  return pausable;
};
