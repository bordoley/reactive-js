[@reactive-js/enumerable](../README.md) › [AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)

# Class: AbstractDelegatingEnumerator <**TReq, TA, TB**>

## Type parameters

▪ **TReq**

▪ **TA**

▪ **TB**

## Hierarchy

* **AbstractDelegatingEnumerator**

## Implements

* [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TB›

## Index

### Constructors

* [constructor](abstractdelegatingenumerator.md#constructor)

### Properties

* [add](abstractdelegatingenumerator.md#add)
* [delegate](abstractdelegatingenumerator.md#delegate)
* [disposable](abstractdelegatingenumerator.md#disposable)
* [dispose](abstractdelegatingenumerator.md#dispose)
* [isDisposed](abstractdelegatingenumerator.md#isdisposed)

### Accessors

* [current](abstractdelegatingenumerator.md#current)
* [hasCurrent](abstractdelegatingenumerator.md#hascurrent)

### Methods

* [move](abstractdelegatingenumerator.md#abstract-move)

## Constructors

###  constructor

\+ **new AbstractDelegatingEnumerator**(`delegate`: [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA›): *[AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA› |

**Returns:** *[AbstractDelegatingEnumerator](abstractdelegatingenumerator.md)*

## Properties

###  add

• **add**: *add* =  add

___

###  delegate

• **delegate**: *[EnumeratorLike](../interfaces/enumeratorlike.md)‹TReq, TA›*

___

###  disposable

• **disposable**: *DisposableLike‹›* =  createDisposable(() => {
    this.isDisposed = true;
  })

___

###  dispose

• **dispose**: *dispose* =  dispose

___

###  isDisposed

• **isDisposed**: *boolean* = false

## Accessors

###  current

• **get current**(): *TB*

**Returns:** *TB*

___

###  hasCurrent

• **get hasCurrent**(): *boolean*

**Returns:** *boolean*

## Methods

### `Abstract` move

▸ **move**(`req`: TReq): *boolean*

*Implementation of [EnumeratorLike](../interfaces/enumeratorlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`req` | TReq |

**Returns:** *boolean*
