import { SideEffect1 } from "../../../functions";
import { SubjectLike, SubjectLike_publish } from "../../../rx";

const SubjectLike__publishTo =
  <T>(subject: SubjectLike<T>): SideEffect1<T> =>
  v => {
    subject[SubjectLike_publish](v);
    return v;
  };

export default SubjectLike__publishTo;
