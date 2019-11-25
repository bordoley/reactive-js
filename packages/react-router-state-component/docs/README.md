[@reactive-js/react-router-state-component](README.md)

# @reactive-js/react-router-state-component

## Index

### Interfaces

* [RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)

### Functions

* [create](README.md#const-create)

## Functions

### `Const` create

▸ **create**<**TState**>(`component`: React.ComponentType‹[RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)‹TState››, `parseState`: function, `serialize`: function, `stateIsQuery`: boolean): *React.ComponentType‹RoutableComponentProps›*

**Type parameters:**

▪ **TState**

**Parameters:**

▪ **component**: *React.ComponentType‹[RoutableStateComponentProps](interfaces/routablestatecomponentprops.md)‹TState››*

▪ **parseState**: *function*

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

**Returns:** *React.ComponentType‹RoutableComponentProps›*
