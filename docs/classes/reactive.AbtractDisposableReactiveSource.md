[Reactive-JS](../README.md) / [reactive](../modules/reactive.md) / AbtractDisposableReactiveSource

# Class: AbtractDisposableReactiveSource<T, TSink\>

[reactive](../modules/reactive.md).AbtractDisposableReactiveSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)<`TSink`\>

  ↳ **`AbtractDisposableReactiveSource`**

  ↳↳ [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)

## Implements

- [`ReactiveSourceLike`](../interfaces/reactive.ReactiveSourceLike.md)

## Table of contents

### Constructors

- [constructor](reactive.AbtractDisposableReactiveSource.md#constructor)

### Accessors

- [T](reactive.AbtractDisposableReactiveSource.md#t)
- [TContainerOf](reactive.AbtractDisposableReactiveSource.md#tcontainerof)
- [TLiftableState](reactive.AbtractDisposableReactiveSource.md#tliftablestate)
- [error](reactive.AbtractDisposableReactiveSource.md#error)
- [isDisposed](reactive.AbtractDisposableReactiveSource.md#isdisposed)

### Methods

- [add](reactive.AbtractDisposableReactiveSource.md#add)
- [dispose](reactive.AbtractDisposableReactiveSource.md#dispose)
- [sink](reactive.AbtractDisposableReactiveSource.md#sink)

## Constructors

### constructor

• **new AbtractDisposableReactiveSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[constructor](liftable.AbtractDisposableLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ReactiveSourceLike](../interfaces/reactive.ReactiveSourceLike.md).[T](../interfaces/reactive.ReactiveSourceLike.md#t)

#### Inherited from

AbtractDisposableLiftable.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[ReactiveSourceLike](../interfaces/reactive.ReactiveSourceLike.md).[TContainerOf](../interfaces/reactive.ReactiveSourceLike.md#tcontainerof)

#### Inherited from

AbtractDisposableLiftable.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[ReactiveSourceLike](../interfaces/reactive.ReactiveSourceLike.md).[TLiftableState](../interfaces/reactive.ReactiveSourceLike.md#tliftablestate)

#### Inherited from

AbtractDisposableLiftable.TLiftableState

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

AbtractDisposableLiftable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

AbtractDisposableLiftable.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbtractDisposableReactiveSource`](reactive.AbtractDisposableReactiveSource.md)<`T`, `TSink`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[add](liftable.AbtractDisposableLiftable.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbtractDisposableReactiveSource`](reactive.AbtractDisposableReactiveSource.md)<`T`, `TSink`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[dispose](liftable.AbtractDisposableLiftable.md#dispose)

___

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbtractDisposableReactiveSource`](reactive.AbtractDisposableReactiveSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`

#### Implementation of

[ReactiveSourceLike](../interfaces/reactive.ReactiveSourceLike.md).[sink](../interfaces/reactive.ReactiveSourceLike.md#sink)
