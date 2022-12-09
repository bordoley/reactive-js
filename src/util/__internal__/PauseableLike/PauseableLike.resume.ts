import { PauseableLike_resume } from "../../../util";

export const resume = <TPauseable extends { [PauseableLike_resume](): void }>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_resume]();
  return pausable;
};
