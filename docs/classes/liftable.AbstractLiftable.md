[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / AbstractLiftable

# Class: AbstractLiftable<TState\>

[liftable](../modules/liftable.md).AbstractLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftedStateLike`](../interfaces/liftable.LiftedStateLike.md) |

## Hierarchy

- [`AbstractContainer`](container.AbstractContainer.md)

  ↳ **`AbstractLiftable`**

  ↳↳ [`AbstractSource`](source.AbstractSource.md)

## Implements

- [`LiftableLike`](../interfaces/liftable.LiftableLike.md)

## Table of contents

### Constructors

- [constructor](liftable.AbstractLiftable.md#constructor)

### Accessors

- [T](liftable.AbstractLiftable.md#t)
- [liftedStateType](liftable.AbstractLiftable.md#liftedstatetype)
- [type](liftable.AbstractLiftable.md#type)

## Constructors

### constructor

• **new AbstractLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftedStateLike`](../interfaces/liftable.LiftedStateLike.md) |

#### Inherited from

[AbstractContainer](container.AbstractContainer.md).[constructor](container.AbstractContainer.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[T](../interfaces/liftable.LiftableLike.md#t)

#### Inherited from

AbstractContainer.T

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

AbstractContainer.type
