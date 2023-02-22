import { Function1 } from "../../../functions.js";
import { SubjectLike, SubjectLike_publish } from "../../../rx.js";

const Subject_publish =
  <T>(v: T): Function1<SubjectLike<T>, SubjectLike<T>> =>
  subject => {
    subject[SubjectLike_publish](v);
    return subject;
  };

export default Subject_publish;
