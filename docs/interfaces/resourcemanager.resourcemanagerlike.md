[Reactive-JS](../README.md) / [resourceManager](../modules/resourcemanager.md) / ResourceManagerLike

# Interface: ResourceManagerLike<TResource\>

## Type parameters

Name |
------ |
`TResource` |

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **ResourceManagerLike**

## Index

### Properties

* [count](resourcemanager.resourcemanagerlike.md#count)
* [error](resourcemanager.resourcemanagerlike.md#error)
* [isDisposed](resourcemanager.resourcemanagerlike.md#isdisposed)

### Methods

* [add](resourcemanager.resourcemanagerlike.md#add)
* [dispose](resourcemanager.resourcemanagerlike.md#dispose)
* [get](resourcemanager.resourcemanagerlike.md#get)

## Properties

### count

• `Readonly` **count**: *number*

___

### error

• `Readonly` **error**: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

The error the `DisposableLike` was disposed with if disposed.

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

`true` if this resource has been disposed, otherwise false

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

___

### get

▸ **get**(`key`: *string*): [*ObservableLike*](observable.observablelike.md)<TResource\>

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*ObservableLike*](observable.observablelike.md)<TResource\>
