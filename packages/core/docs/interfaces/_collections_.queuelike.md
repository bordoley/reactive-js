[@reactive-js/core - v0.0.37](../README.md) › ["collections"](../modules/_collections_.md) › [QueueLike](_collections_.queuelike.md)

# Interface: QueueLike <**T**>

## Type parameters

▪ **T**

## Hierarchy

* Collection‹T›

  ↳ **QueueLike**

## Index

### Properties

* [count](_collections_.queuelike.md#count)

### Methods

* [clear](_collections_.queuelike.md#clear)
* [enumerate](_collections_.queuelike.md#enumerate)
* [peek](_collections_.queuelike.md#peek)
* [pop](_collections_.queuelike.md#pop)
* [push](_collections_.queuelike.md#push)

## Properties

###  count

• **count**: *number*

*Inherited from [QueueLike](_collections_.queuelike.md).[count](_collections_.queuelike.md#count)*

## Methods

###  clear

▸ **clear**(): *void*

**Returns:** *void*

___

###  enumerate

▸ **enumerate**(): *[EnumeratorLike](_enumerable_.enumeratorlike.md)‹T›*

*Inherited from [KeyedQueueLike](_collections_.keyedqueuelike.md).[enumerate](_collections_.keyedqueuelike.md#enumerate)*

Returns an `EnumeratorLike` to iterate through the source.

**Returns:** *[EnumeratorLike](_enumerable_.enumeratorlike.md)‹T›*

___

###  peek

▸ **peek**(): *[Option](../modules/_option_.md#option)‹T›*

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  pop

▸ **pop**(): *[Option](../modules/_option_.md#option)‹T›*

**Returns:** *[Option](../modules/_option_.md#option)‹T›*

___

###  push

▸ **push**(`item`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`item` | T |

**Returns:** *void*
