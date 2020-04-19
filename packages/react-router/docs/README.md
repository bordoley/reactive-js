[@reactive-js/react-router - v0.0.34](README.md)

# @reactive-js/react-router - v0.0.34

## Index

### Type aliases

* [RelativeURI](README.md#relativeuri)
* [RoutableComponentProps](README.md#routablecomponentprops)
* [RouterProps](README.md#routerprops)

### Functions

* [Router](README.md#const-router)
* [useRoutableState](README.md#const-useroutablestate)

## Type aliases

###  RelativeURI

Ƭ **RelativeURI**: *object*

#### Type declaration:

___

###  RoutableComponentProps

Ƭ **RoutableComponentProps**: *object*

#### Type declaration:

___

###  RouterProps

Ƭ **RouterProps**: *object*

#### Type declaration:

## Functions

### `Const` Router

▸ **Router**(`props`: [RouterProps](README.md#routerprops)): *ReactElement | null*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RouterProps](README.md#routerprops) |

**Returns:** *ReactElement | null*

___

### `Const` useRoutableState

▸ **useRoutableState**<**TState**>(`props`: [RoutableComponentProps](README.md#routablecomponentprops), `parse`: function, `serialize`: function, `stateIsQuery`: boolean): *[TState, function]*

**Type parameters:**

▪ **TState**

**Parameters:**

▪ **props**: *[RoutableComponentProps](README.md#routablecomponentprops)*

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
