import { Function1, SideEffect1 } from "../functions";
import { SubjectLike, SubjectLike_publish } from "../rx";

export const publish =
  <T>(v: T): Function1<SubjectLike<T>, SubjectLike<T>> =>
  subject => {
    subject[SubjectLike_publish](v);
    return subject;
  };

export const publishTo =
  <T>(subject: SubjectLike<T>): SideEffect1<T> =>
  v => {
    subject[SubjectLike_publish](v);
    return v;
  };
