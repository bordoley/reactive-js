[@reactive-js/core - v0.0.37](../README.md) › ["resourceManager"](../modules/_resourcemanager_.md) › [ResourceManagerLike](_resourcemanager_.resourcemanagerlike.md)

# Interface: ResourceManagerLike <**TResource**>

## Type parameters

▪ **TResource**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **ResourceManagerLike**

## Index

### Properties

* [count](_resourcemanager_.resourcemanagerlike.md#count)
* [error](_resourcemanager_.resourcemanagerlike.md#error)
* [isDisposed](_resourcemanager_.resourcemanagerlike.md#isdisposed)

### Methods

* [add](_resourcemanager_.resourcemanagerlike.md#add)
* [dispose](_resourcemanager_.resourcemanagerlike.md#dispose)
* [get](_resourcemanager_.resourcemanagerlike.md#get)

## Properties

###  count

• **count**: *number*

___

###  error

• **error**: *[Option](../modules/_option_.md#option)‹[Exception](../modules/_disposable_.md#exception)›*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[error](_disposable_.disposablelike.md#error)*

The error the disposable was disposed with if disposed.

___

###  isDisposed

• **isDisposed**: *boolean*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[isDisposed](_disposable_.disposablelike.md#isdisposed)*

`true` if this resource has been disposed, otherwise false

## Methods

###  add

▸ **add**(`disposable`: [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown)): *this*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[add](_disposable_.disposablelike.md#add)*

Adds the given disposable to this container or disposes it if the container has been disposed.

**Parameters:**

Name | Type |
------ | ------ |
`disposable` | [DisposableOrTeardown](../modules/_disposable_.md#disposableorteardown) |

**Returns:** *this*

`this`

___

###  dispose

▸ **dispose**(`error?`: [Exception](../modules/_disposable_.md#exception)): *void*

*Inherited from [DisposableLike](_disposable_.disposablelike.md).[dispose](_disposable_.disposablelike.md#dispose)*

Dispose the resource. The operation is idempotent.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [Exception](../modules/_disposable_.md#exception) | An optional error that to signal that the resource is being disposed due to an error.  |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string): *[ObservableLike](_observable_.observablelike.md)‹TResource›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[ObservableLike](_observable_.observablelike.md)‹TResource›*
