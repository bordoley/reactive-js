[@reactive-js/rx](../README.md) › [AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)

# Class: AbstractDelegatingSubscriber <**TA, TB**>

Abstract base class for implementing SubscriberOperatorLikes.

## Type parameters

▪ **TA**

▪ **TB**

## Hierarchy

* AbstractSubscriber‹TA›

  ↳ **AbstractDelegatingSubscriber**

## Implements

* [SubscriberLike](../interfaces/subscriberlike.md)‹TA›

## Index

### Constructors

* [constructor](abstractdelegatingsubscriber.md#constructor)

### Properties

* [delegate](abstractdelegatingsubscriber.md#delegate)
* [isCompleted](abstractdelegatingsubscriber.md#iscompleted)

### Methods

* [completeUnsafe](abstractdelegatingsubscriber.md#protected-abstract-completeunsafe)

## Constructors

###  constructor

\+ **new AbstractDelegatingSubscriber**(`delegate`: [SubscriberLike](../interfaces/subscriberlike.md)‹TB›): *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`delegate` | [SubscriberLike](../interfaces/subscriberlike.md)‹TB› |

**Returns:** *[AbstractDelegatingSubscriber](abstractdelegatingsubscriber.md)*

## Properties

###  delegate

• **delegate**: *[SubscriberLike](../interfaces/subscriberlike.md)‹TB›*

___

###  isCompleted

• **isCompleted**: *boolean* = false

*Implementation of [SubscriberLike](../interfaces/subscriberlike.md).[isCompleted](../interfaces/subscriberlike.md#iscompleted)*

*Overrides void*

## Methods

### `Protected` `Abstract` completeUnsafe

▸ **completeUnsafe**(`error?`: [ErrorLike](../interfaces/errorlike.md)): *void*

Override to handle complete notification. Implementations
may throw errors which will be caught and propogated.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [ErrorLike](../interfaces/errorlike.md) |   |

**Returns:** *void*
