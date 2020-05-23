module Function1 = {
  type t('a, 't) = (. 'a) => 't;
};

module IOEvent = {
  type t('a);

  [@bs.module "@reactive-js/core/io"] [@bs.val]
  external done_: unit => t('a) = "done";

  [@bs.module "@reactive-js/core/io"] [@bs.val]
  external notify: 'a => t('a) = "notify";
};

module IOSinkLike = {
  type t('a) =
    Streamable.StreamableLike.t(IOEvent.t('a), Flowable.FlowMode.t);
};

module IOSourceLike = {
  type t('a) =
    Streamable.StreamableLike.t(Flowable.FlowMode.t, IOEvent.t('a));
};

[@bs.module "@reactive-js/core/io"] [@bs.val]
external encodeUtf8:
  IOSourceLike.t(Js.TypedArray2.Uint8Array.t) =>
  IOSourceLike.t(Js.TypedArray2.Uint8Array.t) =
  "encodeUtf8";

[@bs.module "@reactive-js/core/io"] [@bs.val]
external decodeWithCharset:
  string =>
  Function1.t(
    IOSourceLike.t(Js.TypedArray2.ArrayBuffer.t),
    IOSourceLike.t(string),
  ) =
  "decodeWithCharset";

//FIXME: Add TextDecoderOptions
let decodeWithCharset = (charset, stream) => decodeWithCharset(charset)(. stream);

[@bs.module "@reactive-js/core/io"] [@bs.val]
external empty: unit => IOSourceLike.t('a) = "empty";

module FromArrayOptions = {
  type t = {
    delay: option(int),
    startIndex: option(int),
    endIndex: option(int),
  };
};

[@bs.module "@reactive-js/core/io"] [@bs.val]
external fromArray:
  FromArrayOptions.t => Function1.t(array('a), IOSourceLike.t('a)) =
  "fromArray";

let fromArray = (~delay=?, ~startIndex=?, ~endIndex=?, arr) =>
  (fromArray({delay, startIndex, endIndex}))(. arr);

[@bs.module "@reactive-js/core/io"] [@bs.val]
external fromObservable:
  unit => Function1.t(Observable.ObservableLike.t('a), IOSourceLike.t('a)) =
  "fromObservable";

let fromObservable = obs => (fromObservable())(. obs);

module FromValueOptions = {
  type t = {delay: option(int)};
};

[@bs.module "@reactive-js/core/io"] [@bs.val]
external fromValue: FromValueOptions.t => Function1.t('a, IOSourceLike.t('a)) =
  "fromValue";

let fromValue = (~delay=?, v) => (fromValue({delay: delay}))(. v);

[@bs.module "@reactive-js/core/io"] [@bs.val]
external map:
  ([@bs.uncurry] ('a => 'b)) =>
  Function1.t(IOSourceLike.t('a), IOSourceLike.t('b)) =
  "map";

let map = (f, src) => (map(f))(. src);