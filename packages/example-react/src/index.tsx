import React from 'react';
import ReactDOM from 'react-dom';
import { RoutableComponentProps} from "@reactive-js/react-router";
import {Router as DomRouter} from "@reactive-js/react-dom-router";

const Router = DomRouter.create();

const NotFound = (props: RoutableComponentProps) => (<div>{"Not Found"}</div>);

const Component1 = (props: RoutableComponentProps) => (<div>{"Component1"}</div>);

const element = <Router 
  notFoundComponent={NotFound}
  routes={[
    ["", Component1]
  ]}
/>



ReactDOM.render(
  element,
  document.getElementById('root') as HTMLElement
);