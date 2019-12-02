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
* [useRoutableState](README.md#const-useroutablestate)

## Functions

### `Const` Router

▸ **Router**(`props`: [RouterProps](interfaces/routerprops.md)): *null | ReactElement‹[RoutableComponentProps](interfaces/routablecomponentprops.md), string | function | object›*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RouterProps](interfaces/routerprops.md) |

**Returns:** *null | ReactElement‹[RoutableComponentProps](interfaces/routablecomponentprops.md), string | function | object›*

___

### `Const` useRoutableState

▸ **useRoutableState**<**TState**>(`props`: [RoutableComponentProps](interfaces/routablecomponentprops.md), `parse`: function, `serialize`: function, `stateIsQuery`: boolean): *[TState, function]*

**Type parameters:**

▪ **TState**

**Parameters:**

▪ **props**: *[RoutableComponentProps](interfaces/routablecomponentprops.md)*

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

**Returns:** *[TState, function]*
