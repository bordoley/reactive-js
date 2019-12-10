module JsError = {
  type t;

  external create: 'a => t = "%identity";
};

type t = {
  cause: JsError.t,
};

[@bs.obj] external create: (~cause: JsError.t, unit) => t = "";
