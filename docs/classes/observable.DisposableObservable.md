[Reactive-JS](../README.md) / [observable](../modules/observable.md) / DisposableObservable

# Class: DisposableObservable<T\>

[observable](../modules/observable.md).DisposableObservable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableSource`](source.DisposableSource.md)<`T`, [`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`DisposableObservable`**

  ↳↳ [`Subject`](observable.Subject.md)

  ↳↳ [`AbstractDelegatingStream`](stream.AbstractDelegatingStream.md)

## Implements

- [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.DisposableObservable.md#constructor)

### Accessors

- [T](observable.DisposableObservable.md#t)
- [error](observable.DisposableObservable.md#error)
- [isDisposed](observable.DisposableObservable.md#isdisposed)
- [liftableStateType](observable.DisposableObservable.md#liftablestatetype)
- [type](observable.DisposableObservable.md#type)

### Methods

- [add](observable.DisposableObservable.md#add)
- [dispose](observable.DisposableObservable.md#dispose)
- [sink](observable.DisposableObservable.md#sink)

## Constructors

### constructor

• **new DisposableObservable**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[DisposableSource](source.DisposableSource.md).[constructor](source.DisposableSource.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[T](../interfaces/observable.ObservableLike.md#t)

#### Inherited from

DisposableSource.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

DisposableSource.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

DisposableSource.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[liftableStateType](../interfaces/observable.ObservableLike.md#liftablestatetype)

#### Inherited from

DisposableSource.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[type](../interfaces/observable.ObservableLike.md#type)

#### Inherited from

DisposableSource.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableObservable`](observable.DisposableObservable.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[DisposableSource](source.DisposableSource.md).[add](source.DisposableSource.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`DisposableObservable`](observable.DisposableObservable.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[DisposableSource](source.DisposableSource.md).[dispose](source.DisposableSource.md#dispose)

___

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`DisposableObservable`](observable.DisposableObservable.md)<`T`\> |
| `sink` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[sink](../interfaces/observable.ObservableLike.md#sink)

#### Inherited from

[DisposableSource](source.DisposableSource.md).[sink](source.DisposableSource.md#sink)
