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

## Table of contents

### Constructors

- [constructor](observable.Subject.md#constructor)

### Properties

- [replay](observable.Subject.md#replay)

### Accessors

- [T](observable.Subject.md#t)
- [TContainerOf](observable.Subject.md#tcontainerof)
- [error](observable.Subject.md#error)
- [isDisposed](observable.Subject.md#isdisposed)
- [liftableStateType](observable.Subject.md#liftablestatetype)
- [observerCount](observable.Subject.md#observercount)

### Methods

- [add](observable.Subject.md#add)
- [dispose](observable.Subject.md#dispose)
- [publish](observable.Subject.md#publish)
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

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

MulticastObservableLike.TContainerOf

#### Inherited from

AbstractDisposableObservable.TContainerOf

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

MulticastObservableLike.error

#### Inherited from

AbstractDisposableObservable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

MulticastObservableLike.isDisposed

#### Inherited from

AbstractDisposableObservable.isDisposed

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

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`Subject`](observable.Subject.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Implementation of

MulticastObservableLike.add

#### Inherited from

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[add](observable.AbstractDisposableObservable.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Subject`](observable.Subject.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Implementation of

MulticastObservableLike.dispose

#### Inherited from

[AbstractDisposableObservable](observable.AbstractDisposableObservable.md).[dispose](observable.AbstractDisposableObservable.md#dispose)

___

### publish

▸ **publish**(`next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `next` | `T` |

#### Returns

`void`

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
