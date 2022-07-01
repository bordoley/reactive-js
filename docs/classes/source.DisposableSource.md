[Reactive-JS](../README.md) / [source](../modules/source.md) / DisposableSource

# Class: DisposableSource<T, TSink\>

[source](../modules/source.md).DisposableSource

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`\> |

## Hierarchy

- [`DisposableLiftable`](liftable.DisposableLiftable.md)<`TSink`\>

  ↳ **`DisposableSource`**

  ↳↳ [`DisposableObservable`](observable.DisposableObservable.md)

## Implements

- [`SourceLike`](../interfaces/source.SourceLike.md)

## Table of contents

### Constructors

- [constructor](source.DisposableSource.md#constructor)

### Accessors

- [T](source.DisposableSource.md#t)
- [error](source.DisposableSource.md#error)
- [isDisposed](source.DisposableSource.md#isdisposed)
- [liftableStateType](source.DisposableSource.md#liftablestatetype)
- [type](source.DisposableSource.md#type)

### Methods

- [add](source.DisposableSource.md#add)
- [dispose](source.DisposableSource.md#dispose)
- [sink](source.DisposableSource.md#sink)

## Constructors

### constructor

• **new DisposableSource**<`T`, `TSink`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`T`, `TSink`\> |

#### Inherited from

[DisposableLiftable](liftable.DisposableLiftable.md).[constructor](liftable.DisposableLiftable.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[T](../interfaces/source.SourceLike.md#t)

#### Inherited from

DisposableLiftable.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

DisposableLiftable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

DisposableLiftable.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[liftableStateType](../interfaces/source.SourceLike.md#liftablestatetype)

#### Inherited from

DisposableLiftable.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[type](../interfaces/source.SourceLike.md#type)

#### Inherited from

DisposableLiftable.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableSource`](source.DisposableSource.md)<`T`, `TSink`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableLiftable](liftable.DisposableLiftable.md).[add](liftable.DisposableLiftable.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableSource`](source.DisposableSource.md)<`T`, `TSink`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableLiftable](liftable.DisposableLiftable.md).[dispose](liftable.DisposableLiftable.md#dispose)

___

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableSource`](source.DisposableSource.md)<`T`, `TSink`\> |
| `sink` | `TSink` |

#### Returns

`void`

#### Implementation of

[SourceLike](../interfaces/source.SourceLike.md).[sink](../interfaces/source.SourceLike.md#sink)
