module IOEvent: {
  type t('a);

  [@bs.module "@reactive-js/core/io"] [@bs.val]
  external done_: unit => t('a) = "done";

  [@bs.module "@reactive-js/core/io"] [@bs.val]
  external notify: 'a => t('a) = "notify";
};

module IOSinkLike: {
  type t('a) =
    Streamable.StreamableLike.t(IOEvent.t('a), Flowable.FlowMode.t);
};

module IOSourceLike: {
  type t('a) =
    Streamable.StreamableLike.t(Flowable.FlowMode.t, IOEvent.t('a));
};

let decodeWithCharset:
  (string, IOSourceLike.t(Js.TypedArray2.ArrayBuffer.t)) =>
  IOSourceLike.t(string);

[@bs.module "@reactive-js/core/io"] [@bs.val]
external encodeUtf8:
  IOSourceLike.t(Js.TypedArray2.Uint8Array.t) =>
  IOSourceLike.t(Js.TypedArray2.Uint8Array.t) =
  "encodeUtf8";

[@bs.module "@reactive-js/core/io"] [@bs.val]
external empty: unit => IOSourceLike.t('a) = "empty";

let fromArray:
  (~delay: int=?, ~startIndex: int=?, ~endIndex: int=?, array('a)) =>
  IOSourceLike.t('a);

let fromValue: (~delay: int=?, 'a) => IOSourceLike.t('a);

let fromObservable: Observable.ObservableLike.t('a) => IOSourceLike.t('a);

let map: ('a => 'b, IOSourceLike.t('a)) => IOSourceLike.t('b);