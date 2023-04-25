[Reactive-JS](../README.md) / [rx](../modules/rx.md) / InteractiveObservableLike

# Interface: InteractiveObservableLike<T\>

[rx](../modules/rx.md).InteractiveObservableLike

A stateful ObservableLike resource.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

## Hierarchy

- [`MulticastObservableLike`](rx.MulticastObservableLike.md)<`T`\>

  ↳ **`InteractiveObservableLike`**

## Table of contents

### Properties

- [[\_\_\_ObservableLike\_isEnumerable]](rx.InteractiveObservableLike.md#[___observablelike_isenumerable])
- [[\_\_\_ObservableLike\_isRunnable]](rx.InteractiveObservableLike.md#[___observablelike_isrunnable])

### Methods

- [[\_\_\_InteractiveObservableLike\_move]](rx.InteractiveObservableLike.md#[___interactiveobservablelike_move])

## Properties

### [\_\_\_ObservableLike\_isEnumerable]

• `Readonly` **[\_\_\_ObservableLike\_isEnumerable]**: ``false``

Indicates if the `ObservableLike` supports interactive enumeration.

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[___ObservableLike_isEnumerable]](rx.MulticastObservableLike.md#[___observablelike_isenumerable])

___

### [\_\_\_ObservableLike\_isRunnable]

• `Readonly` **[\_\_\_ObservableLike\_isRunnable]**: ``false``

Indicates if the `ObservableLike` supports being subscribed to
on a VirtualTimeScheduler.

#### Inherited from

[MulticastObservableLike](rx.MulticastObservableLike.md).[[___ObservableLike_isRunnable]](rx.MulticastObservableLike.md#[___observablelike_isrunnable])

## Methods

### [\_\_\_InteractiveObservableLike\_move]

▸ **[___InteractiveObservableLike_move]**(): `void`

#### Returns

`void`
