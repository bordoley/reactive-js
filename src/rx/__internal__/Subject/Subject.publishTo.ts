import { SideEffect1 } from "../../../functions";
import { SubjectLike, SubjectLike_publish } from "../../../rx";

const Subject$publishTo =
  <T>(subject: SubjectLike<T>): SideEffect1<T> =>
  v => {
    subject[SubjectLike_publish](v);
    return v;
  };

export default Subject$publishTo;
