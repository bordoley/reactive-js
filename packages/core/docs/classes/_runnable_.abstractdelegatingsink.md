[@reactive-js/core - v0.0.42](../README.md) › ["runnable"](../modules/_runnable_.md) › [AbstractDelegatingSink](_runnable_.abstractdelegatingsink.md)

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

### Accessors

* [isDone](_runnable_.abstractdelegatingsink.md#isdone)

### Methods

* [done](_runnable_.abstractdelegatingsink.md#done)
* [notify](_runnable_.abstractdelegatingsink.md#abstract-notify)

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

## Accessors

###  isDone

• **get isDone**(): *boolean*

**Returns:** *boolean*

## Methods

###  done

▸ **done**(): *void*

*Implementation of [SinkLike](../interfaces/_runnable_.sinklike.md)*

**Returns:** *void*

___

### `Abstract` notify

▸ **notify**(`next`: TA): *void*

*Implementation of [SinkLike](../interfaces/_runnable_.sinklike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`next` | TA |

**Returns:** *void*
