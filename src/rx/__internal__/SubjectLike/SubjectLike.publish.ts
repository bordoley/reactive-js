import { Function1 } from "../../../functions";
import { SubjectLike, SubjectLike_publish } from "../../../rx";

const SubjectLike__publish =
  <T>(v: T): Function1<SubjectLike<T>, SubjectLike<T>> =>
  subject => {
    subject[SubjectLike_publish](v);
    return subject;
  };

export default SubjectLike__publish;
