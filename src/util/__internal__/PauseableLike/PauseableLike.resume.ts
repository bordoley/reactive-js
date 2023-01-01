import { PauseableLike_resume } from "../../../util";

const auseableLike__resume = <
  TPauseable extends { [PauseableLike_resume](): void },
>(
  pausable: TPauseable,
): TPauseable => {
  pausable[PauseableLike_resume]();
  return pausable;
};

export default auseableLike__resume;
