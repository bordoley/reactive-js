[Reactive-JS](../README.md) / [enumerator](../modules/enumerator.md) / AbstractEnumerator

# Class: AbstractEnumerator<T\>

[enumerator](../modules/enumerator.md).AbstractEnumerator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Enumerator`](enumerator.Enumerator.md)<`T`\>

  ↳ **`AbstractEnumerator`**

  ↳↳ [`AbstractDelegatingEnumerator`](enumerator.AbstractDelegatingEnumerator.md)

## Table of contents

### Constructors

- [constructor](enumerator.AbstractEnumerator.md#constructor)

### Accessors

- [T](enumerator.AbstractEnumerator.md#t)
- [current](enumerator.AbstractEnumerator.md#current)
- [error](enumerator.AbstractEnumerator.md#error)
- [hasCurrent](enumerator.AbstractEnumerator.md#hascurrent)
- [isDisposed](enumerator.AbstractEnumerator.md#isdisposed)
- [type](enumerator.AbstractEnumerator.md#type)

### Methods

- [add](enumerator.AbstractEnumerator.md#add)
- [dispose](enumerator.AbstractEnumerator.md#dispose)
- [move](enumerator.AbstractEnumerator.md#move)
- [reset](enumerator.AbstractEnumerator.md#reset)

## Constructors

### constructor

• **new AbstractEnumerator**<`T`\>()

#### Type parameters

| Name |
| :------ |
| `T` |

#### Overrides

[Enumerator](enumerator.Enumerator.md).[constructor](enumerator.Enumerator.md#constructor)

## Accessors

### T

• `get` **T**(): `unknown`

#### Returns

`unknown`

#### Inherited from

Enumerator.T

___

### current

• `get` **current**(): `T`

#### Returns

`T`

#### Overrides

Enumerator.current

• `set` **current**(`v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

`void`

#### Overrides

Enumerator.current

___

### error

• `get` **error**(): [`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

The error the `Disposable` was disposed with if disposed.

#### Returns

[`Option`](../modules/option.md#option)<[`Error`](../interfaces/disposable.Error.md)\>

#### Inherited from

Enumerator.error

___

### hasCurrent

• `get` **hasCurrent**(): `boolean`

#### Returns

`boolean`

#### Overrides

Enumerator.hasCurrent

___

### isDisposed

• `get` **isDisposed**(): `boolean`

`true` if this resource has been disposed, otherwise false

#### Returns

`boolean`

#### Inherited from

Enumerator.isDisposed

___

### type

• `get` **type**(): `this`

#### Returns

`this`

#### Inherited from

Enumerator.type

## Methods

### add

▸ **add**(`this`, `disposable`, `ignoreChildErrors`): `void`

Adds the given `DisposableOrTeardown` to this container or disposes it if the container has been disposed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)<`T`\> |
| `disposable` | [`DisposableOrTeardown`](../modules/disposable.md#disposableorteardown) |
| `ignoreChildErrors` | `boolean` |

#### Returns

`void`

`this`

#### Inherited from

[Enumerator](enumerator.Enumerator.md).[add](enumerator.Enumerator.md#add)

___

### dispose

▸ **dispose**(`this`, `error?`): `void`

Dispose the resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`AbstractEnumerator`](enumerator.AbstractEnumerator.md)<`T`\> | - |
| `error?` | [`Error`](../interfaces/disposable.Error.md) | An optional error that signals the resource is being disposed due to an error. |

#### Returns

`void`

#### Inherited from

[Enumerator](enumerator.Enumerator.md).[dispose](enumerator.Enumerator.md#dispose)

___

### move

▸ `Abstract` **move**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Enumerator](enumerator.Enumerator.md).[move](enumerator.Enumerator.md#move)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`
