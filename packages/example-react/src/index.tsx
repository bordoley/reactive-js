import React from 'react';
import ReactDOM from 'react-dom';
import { RoutableComponentProps} from "@reactive-js/react-router";
import {Router as DomRouter} from "@reactive-js/react-dom-router";
import { generate } from '@reactive-js/rx-observables';
import { onNext } from "@reactive-js/rx-operators";
import { Observable } from '@reactive-js/rx-core';
import { defaultScheduler } from '@reactive-js/scheduler';
import { scheduler } from "@reactive-js/react-scheduler";

defaultScheduler.register(scheduler);

const Router = DomRouter.create();


const NotFound = (props: RoutableComponentProps) => (<div>{"Not Found"}</div>);

const Component1 = (props: RoutableComponentProps) => (<div>{"Component1"}</div>);

const element = <Router 
  notFoundComponent={NotFound}
  routes={[
    ["", Component1]
  ]}
/>



Observable.connect(
  Observable.lift(
    generate(x => x + 1, 0, 3000),
    onNext(console.log)
  )
);

ReactDOM.render(
  element,
  document.getElementById('root') as HTMLElement
);