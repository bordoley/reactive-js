import { PauseableLike_resume } from "../../../util";

const Pauseable_resume = <
  TPauseable extends { [PauseableLike_resume](): void },
>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_resume]();
  return pausable;
};

export default Pauseable_resume;
