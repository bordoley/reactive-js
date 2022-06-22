[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / AbstractDisposableLiftable

# Class: AbstractDisposableLiftable<TState\>

[liftable](../modules/liftable.md).AbstractDisposableLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftedStateLike`](../interfaces/liftable.LiftedStateLike.md) |

## Hierarchy

- [`AbstractDisposableContainer`](container.AbstractDisposableContainer.md)

  ↳ **`AbstractDisposableLiftable`**

  ↳↳ [`AbstractDisposableSource`](source.AbstractDisposableSource.md)

## Implements

- [`LiftableLike`](../interfaces/liftable.LiftableLike.md)

## Table of contents

### Constructors

- [constructor](liftable.AbstractDisposableLiftable.md#constructor)

### Accessors

- [T](liftable.AbstractDisposableLiftable.md#t)
- [liftedStateType](liftable.AbstractDisposableLiftable.md#liftedstatetype)
- [type](liftable.AbstractDisposableLiftable.md#type)

## Constructors

### constructor

• **new AbstractDisposableLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftedStateLike`](../interfaces/liftable.LiftedStateLike.md) |

#### Inherited from

[AbstractDisposableContainer](container.AbstractDisposableContainer.md).[constructor](container.AbstractDisposableContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[T](../interfaces/liftable.LiftableLike.md#t)

#### Inherited from

AbstractDisposableContainer.T

___

### liftedStateType

• `get` **liftedStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[liftedStateType](../interfaces/liftable.LiftableLike.md#liftedstatetype)

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[type](../interfaces/liftable.LiftableLike.md#type)

#### Inherited from

AbstractDisposableContainer.type
