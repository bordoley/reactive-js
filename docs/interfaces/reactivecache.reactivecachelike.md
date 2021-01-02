[Reactive-JS](../README.md) / [reactiveCache](../modules/reactivecache.md) / ReactiveCacheLike

# Interface: ReactiveCacheLike<T\>

## Type parameters

Name |
------ |
`T` |

## Hierarchy

* [*DisposableLike*](disposable.disposablelike.md)

  ↳ **ReactiveCacheLike**

## Index

### Properties

* [error](reactivecache.reactivecachelike.md#error)
* [isDisposed](reactivecache.reactivecachelike.md#isdisposed)

### Methods

* [add](reactivecache.reactivecachelike.md#add)
* [dispose](reactivecache.reactivecachelike.md#dispose)
* [get](reactivecache.reactivecachelike.md#get)
* [set](reactivecache.reactivecachelike.md#set)

## Properties

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

▸ **get**(`key`: *string*): [*Option*](../modules/option.md#option)<[*ObservableLike*](observable.observablelike.md)<T\>\>

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |

**Returns:** [*Option*](../modules/option.md#option)<[*ObservableLike*](observable.observablelike.md)<T\>\>

___

### set

▸ **set**(`key`: *string*, `value`: [*ObservableLike*](observable.observablelike.md)<T\>): [*ObservableLike*](observable.observablelike.md)<T\>

#### Parameters:

Name | Type |
------ | ------ |
`key` | *string* |
`value` | [*ObservableLike*](observable.observablelike.md)<T\> |

**Returns:** [*ObservableLike*](observable.observablelike.md)<T\>
