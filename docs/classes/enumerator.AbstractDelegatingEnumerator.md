[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractDelegatingEnumerator

# Class: AbstractDelegatingEnumerator<TIn, TOut\>

[enumerator](../modules/enumerator.md).AbstractDelegatingEnumerator

## Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

## Hierarchy

- [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)<`TOut`\>

  ↳ **`AbstractDelegatingEnumerator`**

## Table of contents

### Constructors

- [constructor](enumerator.AbstractDelegatingEnumerator.md#constructor)

### Properties

- [delegate](enumerator.AbstractDelegatingEnumerator.md#delegate)

### Accessors

- [T](enumerator.AbstractDelegatingEnumerator.md#t)
- [current](enumerator.AbstractDelegatingEnumerator.md#current)
- [error](enumerator.AbstractDelegatingEnumerator.md#error)
- [hasCurrent](enumerator.AbstractDelegatingEnumerator.md#hascurrent)
- [isDisposed](enumerator.AbstractDelegatingEnumerator.md#isdisposed)
- [type](enumerator.AbstractDelegatingEnumerator.md#type)

### Methods

- [add](enumerator.AbstractDelegatingEnumerator.md#add)
- [dispose](enumerator.AbstractDelegatingEnumerator.md#dispose)
- [move](enumerator.AbstractDelegatingEnumerator.md#move)
- [reset](enumerator.AbstractDelegatingEnumerator.md#reset)

## Constructors

### constructor

• **new AbstractDelegatingEnumerator**<`TIn`, `TOut`\>(`delegate`)

#### Type parameters

| Name |
| :------ |
| `TIn` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `delegate` | [`Enumerator`](enumerator.Enumerator.md)<`TIn`\> |

#### Overrides

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[constructor](enumerator.AbstractEnumerator.md#constructor)

## Properties

### delegate

• `Readonly` **delegate**: [`Enumerator`](enumerator.Enumerator.md)<`TIn`\>

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

AbstractEnumerator.T

___

### current

• `get` **current**(): `T`

#### Returns

`T`

#### Inherited from

AbstractEnumerator.current

• `set` **current**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`void`

#### Inherited from

AbstractEnumerator.current

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

AbstractEnumerator.error

___

### hasCurrent

• `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Inherited from

AbstractEnumerator.hasCurrent

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

AbstractEnumerator.isDisposed

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

AbstractEnumerator.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractDelegatingEnumerator`](enumerator.AbstractDelegatingEnumerator.md)<`TIn`, `TOut`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[add](enumerator.AbstractEnumerator.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractDelegatingEnumerator`](enumerator.AbstractDelegatingEnumerator.md)<`TIn`, `TOut`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[dispose](enumerator.AbstractEnumerator.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[move](enumerator.AbstractEnumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[AbstractEnumerator](enumerator.AbstractEnumerator.md).[reset](enumerator.AbstractEnumerator.md#reset)
