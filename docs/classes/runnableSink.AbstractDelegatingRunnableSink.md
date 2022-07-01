[Reactive-JS](../README.md) / [runnableSink](../modules/runnableSink.md) / AbstractDelegatingRunnableSink

# Class: AbstractDelegatingRunnableSink<TIn, TOut\>

[runnableSink](../modules/runnableSink.md).AbstractDelegatingRunnableSink

## Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

## Hierarchy

- [`RunnableSink`](runnableSink.RunnableSink.md)<`TIn`\>

  ↳ **`AbstractDelegatingRunnableSink`**

## Table of contents

### Constructors

- [constructor](runnableSink.AbstractDelegatingRunnableSink.md#constructor)

### Properties

- [delegate](runnableSink.AbstractDelegatingRunnableSink.md#delegate)

### Accessors

- [T](runnableSink.AbstractDelegatingRunnableSink.md#t)
- [error](runnableSink.AbstractDelegatingRunnableSink.md#error)
- [isDisposed](runnableSink.AbstractDelegatingRunnableSink.md#isdisposed)
- [type](runnableSink.AbstractDelegatingRunnableSink.md#type)

### Methods

- [add](runnableSink.AbstractDelegatingRunnableSink.md#add)
- [assertState](runnableSink.AbstractDelegatingRunnableSink.md#assertstate)
- [dispose](runnableSink.AbstractDelegatingRunnableSink.md#dispose)
- [notify](runnableSink.AbstractDelegatingRunnableSink.md#notify)

## Constructors

### constructor

• **new AbstractDelegatingRunnableSink**<`TIn`, `TOut`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`RunnableSink`](runnableSink.RunnableSink.md)<`TOut`\> |

#### Overrides

[RunnableSink](runnableSink.RunnableSink.md).[constructor](runnableSink.RunnableSink.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`RunnableSink`](runnableSink.RunnableSink.md)<`TOut`\>

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

RunnableSink.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

RunnableSink.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

RunnableSink.isDisposed

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

RunnableSink.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingRunnableSink`](runnableSink.AbstractDelegatingRunnableSink.md)<`TIn`, `TOut`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[RunnableSink](runnableSink.RunnableSink.md).[add](runnableSink.RunnableSink.md#add)

___

### assertState

▸ **assertState**(`this`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingRunnableSink`](runnableSink.AbstractDelegatingRunnableSink.md)<`TIn`, `TOut`\> |

#### Returns

`void`

#### Inherited from

[RunnableSink](runnableSink.RunnableSink.md).[assertState](runnableSink.RunnableSink.md#assertstate)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDelegatingRunnableSink`](runnableSink.AbstractDelegatingRunnableSink.md)<`TIn`, `TOut`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[RunnableSink](runnableSink.RunnableSink.md).[dispose](runnableSink.RunnableSink.md#dispose)

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

[RunnableSink](runnableSink.RunnableSink.md).[notify](runnableSink.RunnableSink.md#notify)
