[Reactive-JS](../README.md) / [observable](../modules/observable.md) / Subject

# Class: Subject<T\>

[observable](../modules/observable.md).Subject

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`DisposableObservable`](observable.DisposableObservable.md)<`T`\>

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
- [error](observable.Subject.md#error)
- [isDisposed](observable.Subject.md#isdisposed)
- [liftableStateType](observable.Subject.md#liftablestatetype)
- [observerCount](observable.Subject.md#observercount)
- [type](observable.Subject.md#type)

### Methods

- [add](observable.Subject.md#add)
- [dispatch](observable.Subject.md#dispatch)
- [dispose](observable.Subject.md#dispose)
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

[DisposableObservable](observable.DisposableObservable.md).[constructor](observable.DisposableObservable.md#constructor)

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

DisposableObservable.T

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

MulticastObservableLike.error

#### Inherited from

DisposableObservable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

MulticastObservableLike.isDisposed

#### Inherited from

DisposableObservable.isDisposed

___

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

MulticastObservableLike.liftableStateType

#### Inherited from

DisposableObservable.liftableStateType

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

DisposableObservable.type

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

[DisposableObservable](observable.DisposableObservable.md).[add](observable.DisposableObservable.md#add)

___

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

[DisposableObservable](observable.DisposableObservable.md).[dispose](observable.DisposableObservable.md#dispose)

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

[DisposableObservable](observable.DisposableObservable.md).[sink](observable.DisposableObservable.md#sink)
