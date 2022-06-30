[Reactive-JS](../README.md) / [observable](../modules/observable.md) / Subject

# Class: Subject<T\>

[observable](../modules/observable.md).Subject

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AbstractDisposableObservable`](observable.AbstractDisposableObservable.md)<`T`\>

  ↳ **`Subject`**

## Implements

- [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\>
- [`DispatcherLike`](../interfaces/dispatcher.DispatcherLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.Subject.md#constructor)

### Properties

- [replay](observable.Subject.md#replay)

### Accessors

- [T](observable.Subject.md#t)
- [liftableStateType](observable.Subject.md#liftablestatetype)
- [observerCount](observable.Subject.md#observercount)
- [type](observable.Subject.md#type)

### Methods

- [dispatch](observable.Subject.md#dispatch)
- [sink](observable.Subject.md#sink)

## Constructors

### constructor

• **new Subject**<`T`\>(`replay?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `replay?` | `number` |

#### Overrides

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[constructor](observable.AbstractDisposableObservable.md#constructor)

## Properties

### replay

• `Readonly` **replay**: `number`

#### Implementation of

[MulticastObservableLike](../interfaces/observable.MulticastObservableLike.md).[replay](../interfaces/observable.MulticastObservableLike.md#replay)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

MulticastObservableLike.T

#### Inherited from

AbstractDisposableObservable.T

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

MulticastObservableLike.liftableStateType

#### Inherited from

AbstractDisposableObservable.liftableStateType

___

### observerCount

• `get` **observerCount**(): `number`

The number of observers currently observing.

#### Returns

`number`

#### Implementation of

[MulticastObservableLike](../interfaces/observable.MulticastObservableLike.md).[observerCount](../interfaces/observable.MulticastObservableLike.md#observercount)

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

MulticastObservableLike.type

#### Inherited from

AbstractDisposableObservable.type

## Methods

### dispatch

▸ **dispatch**(`next`): `void`

Dispatches the next request

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `T` |

#### Returns

`void`

#### Implementation of

[DispatcherLike](../interfaces/dispatcher.DispatcherLike.md).[dispatch](../interfaces/dispatcher.DispatcherLike.md#dispatch)

___

### sink

▸ **sink**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`Observer`](observer.Observer.md)<`T`\> |

#### Returns

`void`

#### Implementation of

MulticastObservableLike.sink

#### Overrides

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[sink](observable.AbstractDisposableObservable.md#sink)
