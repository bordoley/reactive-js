[Reactive-JS](../README.md) / [disposable](../modules/disposable.md) / DisposableValue

# Class: DisposableValue<T\>

[disposable](../modules/disposable.md).DisposableValue

A `Disposable` that provides disposable semantics to an underlying resource.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Disposable`](disposable.Disposable.md)

  ↳ **`DisposableValue`**

## Table of contents

### Constructors

- [constructor](disposable.DisposableValue.md#constructor)

### Properties

- [value](disposable.DisposableValue.md#value)

## Constructors

### constructor

• **new DisposableValue**<`T`\>(`value`, `cleanup`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `cleanup` | [`SideEffect1`](../modules/functions.md#sideeffect1)<`T`\> |

#### Overrides

[Disposable](disposable.Disposable.md).[constructor](disposable.Disposable.md#constructor)

## Properties

### value

• `Readonly` **value**: `T`

The underlying resource
