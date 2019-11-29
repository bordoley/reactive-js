[@reactive-js/react-router](README.md)

# @reactive-js/react-router

## Index

### Interfaces

* [RelativeURI](interfaces/relativeuri.md)
* [RoutableComponentProps](interfaces/routablecomponentprops.md)
* [RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)
* [RouterProps](interfaces/routerprops.md)

### Functions

* [Router](README.md#const-router)
* [createRoutableStateComponent](README.md#const-createroutablestatecomponent)

## Functions

### `Const` Router

▸ **Router**(`props`: [RouterProps](interfaces/routerprops.md)): *null | ReactElement‹[RoutableComponentProps](interfaces/routablecomponentprops.md), string | function | object›*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RouterProps](interfaces/routerprops.md) |

**Returns:** *null | ReactElement‹[RoutableComponentProps](interfaces/routablecomponentprops.md), string | function | object›*

___

### `Const` createRoutableStateComponent

▸ **createRoutableStateComponent**<**TState**>(`component`: React.ComponentType‹[RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)‹TState››, `parse`: function, `serialize`: function, `stateIsQuery`: boolean): *React.ComponentType‹[RoutableComponentProps](interfaces/routablecomponentprops.md)›*

**Type parameters:**

▪ **TState**

**Parameters:**

▪ **component**: *React.ComponentType‹[RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)‹TState››*

▪ **parse**: *function*

▸ (`serialized`: string): *TState*

**Parameters:**

Name | Type |
------ | ------ |
`serialized` | string |

▪ **serialize**: *function*

▸ (`state`: TState): *string*

**Parameters:**

Name | Type |
------ | ------ |
`state` | TState |

▪`Default value`  **stateIsQuery**: *boolean*= false

**Returns:** *React.ComponentType‹[RoutableComponentProps](interfaces/routablecomponentprops.md)›*
