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
- [TContainerOf](liftable.AbstractLiftable.md#tcontainerof)
- [TLiftableState](liftable.AbstractLiftable.md#tliftablestate)

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

### TContainerOf

• `get` **TContainerOf**(): `this`

#### Returns

`this`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[TContainerOf](../interfaces/liftable.LiftableLike.md#tcontainerof)

#### Inherited from

AbstractContainer.TContainerOf

___

### TLiftableState

• `get` **TLiftableState**(): `TState`

#### Returns

`TState`

#### Implementation of

[LiftableLike](../interfaces/liftable.LiftableLike.md).[TLiftableState](../interfaces/liftable.LiftableLike.md#tliftablestate)
