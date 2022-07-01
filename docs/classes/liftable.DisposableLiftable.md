[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / DisposableLiftable

# Class: DisposableLiftable<TState\>

[liftable](../modules/liftable.md).DisposableLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md) |

## Hierarchy

- [`DisposableContainer`](container.DisposableContainer.md)

  ↳ **`DisposableLiftable`**

  ↳↳ [`AsyncEnumerator`](asyncEnumerator.AsyncEnumerator.md)

  ↳↳ [`DisposableSource`](source.DisposableSource.md)

## Implements

- [`LiftableLike`](../interfaces/liftable.LiftableLike.md)

## Table of contents

### Constructors

- [constructor](liftable.DisposableLiftable.md#constructor)

### Accessors

- [T](liftable.DisposableLiftable.md#t)
- [error](liftable.DisposableLiftable.md#error)
- [isDisposed](liftable.DisposableLiftable.md#isdisposed)
- [liftableStateType](liftable.DisposableLiftable.md#liftablestatetype)
- [type](liftable.DisposableLiftable.md#type)

### Methods

- [add](liftable.DisposableLiftable.md#add)
- [dispose](liftable.DisposableLiftable.md#dispose)

## Constructors

### constructor

• **new DisposableLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)<`TState`\> |

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[constructor](container.DisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[T](../interfaces/liftable.LiftableLike.md#t)

#### Inherited from

DisposableContainer.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

DisposableContainer.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

DisposableContainer.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[liftableStateType](../interfaces/liftable.LiftableLike.md#liftablestatetype)

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[type](../interfaces/liftable.LiftableLike.md#type)

#### Inherited from

DisposableContainer.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableLiftable`](liftable.DisposableLiftable.md)<`TState`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[add](container.DisposableContainer.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableLiftable`](liftable.DisposableLiftable.md)<`TState`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableContainer](container.DisposableContainer.md).[dispose](container.DisposableContainer.md#dispose)
