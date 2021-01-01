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

The error the `DisposableLike` was disposed with if disposed.

Inherited from: [DisposableLike](disposable.disposablelike.md).[error](disposable.disposablelike.md#error)

___

### isDisposed

• `Readonly` **isDisposed**: *boolean*

`true` if this resource has been disposed, otherwise false

Inherited from: [DisposableLike](disposable.disposablelike.md).[isDisposed](disposable.disposablelike.md#isdisposed)

## Methods

### add

▸ **add**(`disposable`: [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown)): *void*

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters:

Name | Type |
------ | ------ |
`disposable` | [*DisposableOrTeardown*](../modules/disposable.md#disposableorteardown) |

**Returns:** *void*

`this`

Inherited from: [DisposableLike](disposable.disposablelike.md)

___

### dispose

▸ **dispose**(`error?`: [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\>): *void*

Dispose the resource. Must be idempotent.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`error?` | [*Option*](../modules/option.md#option)<[*Error*](../modules/disposable.md#error)\> | An optional error that signals the resource is being disposed due to an error.    |

**Returns:** *void*

Inherited from: [DisposableLike](disposable.disposablelike.md)

___

### get

▸ **get**(`key`: *string*): [*ObservableLike*](observable.observablelike.md)<TResource\>

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*ObservableLike*](observable.observablelike.md)<TResource\>
