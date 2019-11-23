import { EventLoopScheduler } from "@reactive-js/eventloop-scheduler";
import { Observable } from "@reactive-js/rx-core";
import { generate } from "@reactive-js/rx-observables";
import { onNext } from "@reactive-js/rx-operators";
import { defaultScheduler } from "@reactive-js/scheduler";
import React from "react";
import ReactDOM from "react-dom";
// import { scheduler } from "@reactive-js/react-scheduler";

const scheduler = EventLoopScheduler.create();
defaultScheduler.register(scheduler);
/*
const Router = DomRouter.create();

const NotFound = (props: RoutableComponentProps) => <div>{"Not Found"}</div>;

const Component1 = (props: RoutableComponentProps) => <div>{"Component1"}</div>;

const element = (
  <Router notFoundComponent={NotFound} routes={[["", Component1]]} />
);*/

Observable.connect(
  Observable.lift(
    generate(x => x + 1, 0, 3000),
    onNext(console.log),
  ),
);

// ReactDOM.render(element, document.getElementById("root") as HTMLElement);
