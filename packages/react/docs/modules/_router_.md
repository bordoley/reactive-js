[@reactive-js/react - v0.0.37](../README.md) › ["router"](_router_.md)

# Module: "router"

## Index

### Type aliases

* [RelativeURI](_router_.md#relativeuri)
* [RoutableComponentProps](_router_.md#routablecomponentprops)
* [RouterProps](_router_.md#routerprops)

### Functions

* [Router](_router_.md#const-router)
* [useRoutableState](_router_.md#const-useroutablestate)

## Type aliases

###  RelativeURI

Ƭ **RelativeURI**: *object*

#### Type declaration:

* **hash**: *string*

* **pathname**: *string*

* **search**: *string*

___

###  RoutableComponentProps

Ƭ **RoutableComponentProps**: *object*

#### Type declaration:

* **referer**: *Option‹[RelativeURI](_router_.md#relativeuri)›*

* **uri**: *[RelativeURI](_router_.md#relativeuri)*

* **uriUpdater**(): *function*

  * (`updater`: StateUpdater‹[RelativeURI](_router_.md#relativeuri)›): *void*

___

###  RouterProps

Ƭ **RouterProps**: *object*

#### Type declaration:

* **location**: *AsyncEnumerableLike‹StateUpdater‹[RelativeURI](_router_.md#relativeuri)›, [RelativeURI](_router_.md#relativeuri)›*

* **notFound**: *React.ComponentType‹[RoutableComponentProps](_router_.md#routablecomponentprops)›*

* **routes**: *keyof [string, React.ComponentType<RoutableComponentProps>][]*

## Functions

### `Const` Router

▸ **Router**(`props`: [RouterProps](_router_.md#routerprops)): *ReactElement | null*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RouterProps](_router_.md#routerprops) |

**Returns:** *ReactElement | null*

___

### `Const` useRoutableState

▸ **useRoutableState**<**TState**>(`props`: [RoutableComponentProps](_router_.md#routablecomponentprops), `parse`: function, `serialize`: function, `stateIsQuery`: boolean): *[TState, function]*

**Type parameters:**

▪ **TState**

**Parameters:**

▪ **props**: *[RoutableComponentProps](_router_.md#routablecomponentprops)*

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
