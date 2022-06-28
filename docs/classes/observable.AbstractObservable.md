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
- [liftableStateType](observable.AbstractObservable.md#liftablestatetype)
- [type](observable.AbstractObservable.md#type)

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

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[liftableStateType](../interfaces/observable.ObservableLike.md#liftablestatetype)

#### Inherited from

AbstractSource.liftableStateType

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[ObservableLike](../interfaces/observable.ObservableLike.md).[type](../interfaces/observable.ObservableLike.md#type)

#### Inherited from

AbstractSource.type

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
