[@reactive-js/rx-observable](../README.md) › [ObservableResourceLike](observableresourcelike.md)

# Interface: ObservableResourceLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* [ObservableLike](observablelike.md)‹T›

* DisposableLike

  ↳ **ObservableResourceLike**

## Index

### Properties

* [isDisposed](observableresourcelike.md#isdisposed)

### Methods

* [add](observableresourcelike.md#add)
* [dispose](observableresourcelike.md#dispose)
* [remove](observableresourcelike.md#remove)
* [subscribe](observableresourcelike.md#subscribe)

## Properties

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from void*

Returns true if this resource has been disposed.

## Methods

###  add

▸ **add**(`disposable`: DisposableOrTeardown, ...`disposables`: DisposableOrTeardown[]): *void*

*Inherited from void*

Adds the given disposables to this container or disposes them if the container has been disposed.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | DisposableOrTeardown | - |
`...disposables` | DisposableOrTeardown[] |   |

**Returns:** *void*

___

###  dispose

▸ **dispose**(): *void*

*Inherited from void*

Dispose the resource, the operation should be idempotent.

**Returns:** *void*

___

###  remove

▸ **remove**(`disposable`: DisposableOrTeardown, ...`disposables`: DisposableOrTeardown[]): *void*

*Inherited from void*

Removes and disposes the given disposables if they are part of this container.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`disposable` | DisposableOrTeardown | - |
`...disposables` | DisposableOrTeardown[] |   |

**Returns:** *void*

___

###  subscribe

▸ **subscribe**(`subscriber`: SubscriberLike‹T›): *void*

*Inherited from [ObservableLike](observablelike.md).[subscribe](observablelike.md#subscribe)*

**Parameters:**

Name | Type |
------ | ------ |
`subscriber` | SubscriberLike‹T› |

**Returns:** *void*
