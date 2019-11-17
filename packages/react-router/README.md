# @reactive-js/react-router

## API

### Interfaces

*RelativeURI*

*RoutableComponentProps*

*RoutableStateComponentProps*

*RouterProps*

### Static Functions

*`RoutableStateComponent.create<TState>(component: React.ComponentType<RoutableStateComponentProps<TState>>, parseState: (fragment: string) => TState, serialize: (state: TState) => string, stateIsQuery?: boolean): React.ComponentType<RoutableComponentProps>`*

*`Router.create(locationResourceFactory: () => StateContainerResourceLike<RelativeURI>): React.ComponentType<RouterProps>`*
