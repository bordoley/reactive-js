[Reactive-JS](../README.md) / [observable](../modules/observable.md) / AbstractDisposableObservable

# Class: AbstractDisposableObservable<T\>

[observable](../modules/observable.md).AbstractDisposableObservable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbtractDisposableReactiveSource`](reactive.AbtractDisposableReactiveSource.md)<`T`, [`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AbstractDisposableObservable`**

  ↳↳ [`Subject`](observable.Subject.md)

## Implements

- [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.AbstractDisposableObservable.md#constructor)

### Accessors

- [T](observable.AbstractDisposableObservable.md#t)
- [TContainerOf](observable.AbstractDisposableObservable.md#tcontainerof)
- [TLiftableState](observable.AbstractDisposableObservable.md#tliftablestate)
- [error](observable.AbstractDisposableObservable.md#error)
- [isDisposed](observable.AbstractDisposableObservable.md#isdisposed)

### Methods

- [add](observable.AbstractDisposableObservable.md#add)
- [dispose](observable.AbstractDisposableObservable.md#dispose)
- [sink](observable.AbstractDisposableObservable.md#sink)

## Constructors

### constructor

• **new AbstractDisposableObservable**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbtractDisposableReactiveSource](reactive.AbtractDisposableReactiveSource.md).[constructor](reactive.AbtractDisposableReactiveSource.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[T](../interfaces/observable.ObservableLike.md#t)

#### Inherited from

AbtractDisposableReactiveSource.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[TContainerOf](../interfaces/observable.ObservableLike.md#tcontainerof)

#### Inherited from

AbtractDisposableReactiveSource.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[TLiftableState](../interfaces/observable.ObservableLike.md#tliftablestate)

#### Inherited from

AbtractDisposableReactiveSource.TLiftableState

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

AbtractDisposableReactiveSource.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

AbtractDisposableReactiveSource.isDisposed

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[AbtractDisposableReactiveSource](reactive.AbtractDisposableReactiveSource.md).[add](reactive.AbtractDisposableReactiveSource.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[AbtractDisposableReactiveSource](reactive.AbtractDisposableReactiveSource.md).[dispose](reactive.AbtractDisposableReactiveSource.md#dispose)

___

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)<`T`\> |
| `sink` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[sink](../interfaces/observable.ObservableLike.md#sink)

#### Inherited from

[AbtractDisposableReactiveSource](reactive.AbtractDisposableReactiveSource.md).[sink](reactive.AbtractDisposableReactiveSource.md#sink)
