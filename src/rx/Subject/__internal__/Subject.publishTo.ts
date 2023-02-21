import { SideEffect1 } from "../../../functions.js";
import { SubjectLike, SubjectLike_publish } from "../../../rx.js";

const Subject_publishTo =
  <T>(subject: SubjectLike<T>): SideEffect1<T> =>
  v => {
    subject[SubjectLike_publish](v);
    return v;
  };

export default Subject_publishTo;
