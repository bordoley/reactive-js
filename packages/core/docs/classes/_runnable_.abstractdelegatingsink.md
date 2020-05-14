[@reactive-js/core - v0.0.37](../README.md) › ["runnable"](../modules/_runnable_.md) › [AbstractDelegatingSink](_runnable_.abstractdelegatingsink.md)

# Class: AbstractDelegatingSink <**TA, TB**>

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* **AbstractDelegatingSink**

## Implements

* [SinkLike](../interfaces/_runnable_.sinklike.md)‹TA›

## Index

### Constructors

* [constructor](_runnable_.abstractdelegatingsink.md#constructor)

### Properties

* [delegate](_runnable_.abstractdelegatingsink.md#delegate)
* [isDone](_runnable_.abstractdelegatingsink.md#isdone)

### Methods

* [done](_runnable_.abstractdelegatingsink.md#done)
* [push](_runnable_.abstractdelegatingsink.md#abstract-push)

## Constructors

###  constructor

\+ **new AbstractDelegatingSink**(`delegate`: [SinkLike](../interfaces/_runnable_.sinklike.md)‹TB›): *[AbstractDelegatingSink](_runnable_.abstractdelegatingsink.md)*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SinkLike](../interfaces/_runnable_.sinklike.md)‹TB› |

**Returns:** *[AbstractDelegatingSink](_runnable_.abstractdelegatingsink.md)*

## Properties

###  delegate

• **delegate**: *[SinkLike](../interfaces/_runnable_.sinklike.md)‹TB›*

___

###  isDone

• **isDone**: *boolean* = false

*Implementation of [SinkLike](../interfaces/_runnable_.sinklike.md).[isDone](../interfaces/_runnable_.sinklike.md#isdone)*

## Methods

###  done

▸ **done**(): *void*

*Implementation of [SinkLike](../interfaces/_runnable_.sinklike.md)*

**Returns:** *void*

___

### `Abstract` push

▸ **push**(`next`: TA): *void*

*Implementation of [SinkLike](../interfaces/_runnable_.sinklike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`next` | TA |

**Returns:** *void*
