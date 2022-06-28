[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / AbstractDisposableLiftable

# Class: AbstractDisposableLiftable<TState\>

[liftable](../modules/liftable.md).AbstractDisposableLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md) |

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
- [liftableStateType](liftable.AbstractDisposableLiftable.md#liftablestatetype)
- [type](liftable.AbstractDisposableLiftable.md#type)

## Constructors

### constructor

• **new AbstractDisposableLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)<`TState`\> |

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

### liftableStateType

• `get` **liftableStateType**(): `TState`

#### Returns

`TState`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[liftableStateType](../interfaces/liftable.LiftableLike.md#liftablestatetype)

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[type](../interfaces/liftable.LiftableLike.md#type)

#### Inherited from

AbstractDisposableContainer.type
