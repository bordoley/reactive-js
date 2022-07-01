[Reactive-JS](../README.md) / [observer](../modules/observer.md) / AbstractDelegatingObserver

# Class: AbstractDelegatingObserver<TIn, TOut\>

[observer](../modules/observer.md).AbstractDelegatingObserver

## Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

## Hierarchy

- [`Observer`](observer.Observer.md)<`TIn`\>

  ↳ **`AbstractDelegatingObserver`**

## Table of contents

### Constructors

- [constructor](observer.AbstractDelegatingObserver.md#constructor)

### Properties

- [delegate](observer.AbstractDelegatingObserver.md#delegate)
- [scheduler](observer.AbstractDelegatingObserver.md#scheduler)

### Accessors

- [T](observer.AbstractDelegatingObserver.md#t)
- [dispatcher](observer.AbstractDelegatingObserver.md#dispatcher)
- [error](observer.AbstractDelegatingObserver.md#error)
- [isDisposed](observer.AbstractDelegatingObserver.md#isdisposed)
- [type](observer.AbstractDelegatingObserver.md#type)

### Methods

- [add](observer.AbstractDelegatingObserver.md#add)
- [assertState](observer.AbstractDelegatingObserver.md#assertstate)
- [dispose](observer.AbstractDelegatingObserver.md#dispose)
- [notify](observer.AbstractDelegatingObserver.md#notify)

## Constructors

### constructor

• **new AbstractDelegatingObserver**<`TIn`, `TOut`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Observer`](observer.Observer.md)<`TOut`\> |

#### Overrides

[Observer](observer.Observer.md).[constructor](observer.Observer.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Observer`](observer.Observer.md)<`TOut`\>

___

### scheduler

• `Readonly` **scheduler**: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md)

#### Inherited from

[Observer](observer.Observer.md).[scheduler](observer.Observer.md#scheduler)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Observer.T

___

### dispatcher

• `get` **dispatcher**(): [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

#### Returns

[`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

#### Inherited from

Observer.dispatcher

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

Observer.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Observer.isDisposed

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

Observer.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingObserver`](observer.AbstractDelegatingObserver.md)<`TIn`, `TOut`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[Observer](observer.Observer.md).[add](observer.Observer.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Observer`](observer.Observer.md)<`TIn`\> |

#### Returns

`void`

#### Inherited from

[Observer](observer.Observer.md).[assertState](observer.Observer.md#assertstate)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDelegatingObserver`](observer.AbstractDelegatingObserver.md)<`TIn`, `TOut`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Observer](observer.Observer.md).[dispose](observer.Observer.md#dispose)

___

### notify

▸ **notify**(`_`): `void`

Notifies the the sink of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the sink's `schedule` method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `TIn` |

#### Returns

`void`

#### Overrides

[Observer](observer.Observer.md).[notify](observer.Observer.md#notify)
