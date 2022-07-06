[Reactive-JS](../README.md) / [observable](../modules/observable.md) / Subject

# Class: Subject<T\>

[observable](../modules/observable.md).Subject

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`Subject`**

## Implements

- [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`T`\>

## Table of contents

### Constructors

- [constructor](observable.Subject.md#constructor)

### Properties

- [isEnumerable](observable.Subject.md#isenumerable)
- [replay](observable.Subject.md#replay)

### Accessors

- [T](observable.Subject.md#t)
- [TContainerOf](observable.Subject.md#tcontainerof)
- [TLiftableContainerState](observable.Subject.md#tliftablecontainerstate)
- [error](observable.Subject.md#error)
- [isDisposed](observable.Subject.md#isdisposed)
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

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Properties

### isEnumerable

• `Optional` **isEnumerable**: `boolean`

#### Implementation of

MulticastObservableLike.isEnumerable

___

### replay

• `Readonly` **replay**: `number`

#### Implementation of

[MulticastObservableLike](../interfaces/observable.MulticastObservableLike.md).[replay](../interfaces/observable.MulticastObservableLike.md#replay)

## Accessors

### T

• `get` **T**(): `T`

#### Returns

`T`

#### Implementation of

MulticastObservableLike.T

___

### TContainerOf

• `get` **TContainerOf**(): [`Subject`](observable.Subject.md)<this[``"T"``]\>

#### Returns

[`Subject`](observable.Subject.md)<this[``"T"``]\>

#### Implementation of

MulticastObservableLike.TContainerOf

___

### TLiftableContainerState

• `get` **TLiftableContainerState**(): [`Observer`](observer.Observer.md)<`this`[``"T"``]\>

#### Returns

[`Observer`](observer.Observer.md)<`this`[``"T"``]\>

#### Implementation of

MulticastObservableLike.TLiftableContainerState

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Implementation of

MulticastObservableLike.error

#### Inherited from

Disposable.error

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Implementation of

MulticastObservableLike.isDisposed

#### Inherited from

Disposable.isDisposed

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

[Disposable](disposable.Disposable.md).[add](disposable.Disposable.md#add)

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

[Disposable](disposable.Disposable.md).[dispose](disposable.Disposable.md#dispose)

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
