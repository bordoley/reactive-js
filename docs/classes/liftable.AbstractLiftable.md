[Reactive-JS](../README.md) / [liftable](../modules/liftable.md) / AbstractLiftable

# Class: AbstractLiftable<TState\>

[liftable](../modules/liftable.md).AbstractLiftable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md) |

## Hierarchy

- [`AbstractContainer`](container.AbstractContainer.md)

  ↳ **`AbstractLiftable`**

  ↳↳ [`AbstractEnumerable`](enumerable.AbstractEnumerable.md)

  ↳↳ [`AbstractSource`](source.AbstractSource.md)

## Implements

- [`LiftableLike`](../interfaces/liftable.LiftableLike.md)

## Table of contents

### Constructors

- [constructor](liftable.AbstractLiftable.md#constructor)

### Accessors

- [T](liftable.AbstractLiftable.md#t)
- [liftableStateType](liftable.AbstractLiftable.md#liftablestatetype)
- [type](liftable.AbstractLiftable.md#type)

## Constructors

### constructor

• **new AbstractLiftable**<`TState`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends [`LiftableStateLike`](../interfaces/liftable.LiftableStateLike.md)<`TState`\> |

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

AbstractContainer.type
