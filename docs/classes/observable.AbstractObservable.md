[Reactive-JS](../README.md) / [observable](../modules/observable.md) / AbstractObservable

# Class: AbstractObservable<T\>

[observable](../modules/observable.md).AbstractObservable

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractSource`](source.AbstractSource.md)<`T`, [`Observer`](observer.Observer.md)<`T`\>\>

  ↳ **`AbstractObservable`**

## Implements

- [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.AbstractObservable.md#constructor)

### Accessors

- [T](observable.AbstractObservable.md#t)
- [TContainerOf](observable.AbstractObservable.md#tcontainerof)
- [liftableStateType](observable.AbstractObservable.md#liftablestatetype)

### Methods

- [sink](observable.AbstractObservable.md#sink)

## Constructors

### constructor

• **new AbstractObservable**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Inherited from

[AbstractSource](source.AbstractSource.md).[constructor](source.AbstractSource.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[T](../interfaces/observable.ObservableLike.md#t)

#### Inherited from

AbstractSource.T

___

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[TContainerOf](../interfaces/observable.ObservableLike.md#tcontainerof)

#### Inherited from

AbstractSource.TContainerOf

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[liftableStateType](../interfaces/observable.ObservableLike.md#liftablestatetype)

#### Inherited from

AbstractSource.liftableStateType

## Methods

### sink

▸ `Abstract` **sink**(`this`, `sink`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractObservable`](observable.AbstractObservable.md)<`T`\> |
| `sink` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[sink](../interfaces/observable.ObservableLike.md#sink)

#### Inherited from

[AbstractSource](source.AbstractSource.md).[sink](source.AbstractSource.md#sink)
