# @reactive-js/react-router

## API

### Interfaces

*RelativeURI*

*RoutableComponentProps*

*RoutableStateComponentProps*

### Static Functions

*`RoutableStateComponent.create<TState>(component: React.ComponentType<RoutableStateComponentProps<TState>>, parseState: (fragment: string) => TState, serialize: (state: TState) => string, stateIsQuery?: boolean): React.ComponentType<RoutableComponentProps>`*


*`Router.create<TContext>(locationResourceFactory: () => StateContainerResourceLike<RelativeURI>, notFoundComponent: React.ComponentType<RoutableComponentProps>, routes: readonly [string, React.ComponentType<RoutableComponentProps>][], context: React.Context<TContext> | void, scheduler?: SchedulerLike): React.ComponentType<TContext>`*
