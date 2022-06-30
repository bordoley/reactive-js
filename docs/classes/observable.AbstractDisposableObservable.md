[Reactive-JS](../README.md) / [observable](../modules/observable.md) / AbstractDisposableObservable

# Class: AbstractDisposableObservable<T\>

[observable](../modules/observable.md).AbstractDisposableObservable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableSource`](source.AbstractDisposableSource.md)<`T`, [`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AbstractDisposableObservable`**

  ↳↳ [`Subject`](observable.Subject.md)

  ↳↳ [`AbstractDelegatingStream`](stream.AbstractDelegatingStream.md)

## Implements

- [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.AbstractDisposableObservable.md#constructor)

### Accessors

- [T](observable.AbstractDisposableObservable.md#t)
- [liftableStateType](observable.AbstractDisposableObservable.md#liftablestatetype)
- [type](observable.AbstractDisposableObservable.md#type)

### Methods

- [sink](observable.AbstractDisposableObservable.md#sink)

## Constructors

### constructor

• **new AbstractDisposableObservable**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractDisposableSource](source.AbstractDisposableSource.md).[constructor](source.AbstractDisposableSource.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[T](../interfaces/observable.ObservableLike.md#t)

#### Inherited from

AbstractDisposableSource.T

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[liftableStateType](../interfaces/observable.ObservableLike.md#liftablestatetype)

#### Inherited from

AbstractDisposableSource.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[type](../interfaces/observable.ObservableLike.md#type)

#### Inherited from

AbstractDisposableSource.type

## Methods

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

[AbstractDisposableSource](source.AbstractDisposableSource.md).[sink](source.AbstractDisposableSource.md#sink)
