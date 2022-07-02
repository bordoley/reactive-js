[Reactive-JS](../README.md) / [source](../modules/source.md) / AbtractDisposableSource

# Class: AbtractDisposableSource<T, TSink\>

[source](../modules/source.md).AbtractDisposableSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`AbtractDisposableLiftable`](liftable.AbtractDisposableLiftable.md)<`TSink`\>

  ↳ **`AbtractDisposableSource`**

  ↳↳ [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.AbtractDisposableSource.md#constructor)

### Accessors

- [T](source.AbtractDisposableSource.md#t)
- [error](source.AbtractDisposableSource.md#error)
- [isDisposed](source.AbtractDisposableSource.md#isdisposed)
- [liftableStateType](source.AbtractDisposableSource.md#liftablestatetype)
- [type](source.AbtractDisposableSource.md#type)

### Methods

- [add](source.AbtractDisposableSource.md#add)
- [dispose](source.AbtractDisposableSource.md#dispose)
- [sink](source.AbtractDisposableSource.md#sink)

## Constructors

### constructor

• **new AbtractDisposableSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[AbtractDisposableLiftable](liftable.AbtractDisposableLiftable.md).[constructor](liftable.AbtractDisposableLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

#### Inherited from

AbtractDisposableLiftable.T

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

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[liftableStateType](../interfaces/source.SourceLike.md#liftablestatetype)

#### Inherited from

AbtractDisposableLiftable.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[type](../interfaces/source.SourceLike.md#type)

#### Inherited from

AbtractDisposableLiftable.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbtractDisposableSource`](source.AbtractDisposableSource.md)<`T`, `TSink`\> |
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
| `this` | [`AbtractDisposableSource`](source.AbtractDisposableSource.md)<`T`, `TSink`\> | - |
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
| `this` | [`AbtractDisposableSource`](source.AbtractDisposableSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[sink](../interfaces/source.SourceLike.md#sink)
