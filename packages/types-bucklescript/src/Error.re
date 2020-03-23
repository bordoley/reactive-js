module Cause = {
  type t;

  external create: 'a => t = "%identity";
};

type t = {
  cause: Cause.t,
};

[@bs.obj] external create: (~cause: Cause.t, unit) => t = "";
