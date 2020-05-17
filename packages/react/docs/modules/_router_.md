[@reactive-js/react - v0.0.37](../README.md) › ["router"](_router_.md)

# Module: "router"

## Index

### Type aliases

* [RelativeURI](_router_.md#relativeuri)
* [RoutableComponentProps](_router_.md#routablecomponentprops)
* [RouteMap](_router_.md#routemap)
* [RouterProps](_router_.md#routerprops)

### Functions

* [Router](_router_.md#const-router)

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

* **uriUpdater**: *SideEffect1‹Generator‹[RelativeURI](_router_.md#relativeuri)››*

___

###  RouteMap

Ƭ **RouteMap**: *object*

#### Type declaration:

* \[ **key**: *string*\]: React.ComponentType‹[RoutableComponentProps](_router_.md#routablecomponentprops)›

___

###  RouterProps

Ƭ **RouterProps**: *object*

#### Type declaration:

* **notFound**: *React.ComponentType‹[RoutableComponentProps](_router_.md#routablecomponentprops)›*

* **routes**: *[RouteMap](_router_.md#routemap)*

* **stateStore**: *StateStoreLike‹string›*

## Functions

### `Const` Router

▸ **Router**(`props`: [RouterProps](_router_.md#routerprops)): *ReactElement | null*

**Parameters:**

Name | Type |
------ | ------ |
`props` | [RouterProps](_router_.md#routerprops) |

**Returns:** *ReactElement | null*
