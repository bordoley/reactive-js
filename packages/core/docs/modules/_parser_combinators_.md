[@reactive-js/core - v0.0.37](../README.md) › ["parser-combinators"](_parser_combinators_.md)

# Module: "parser-combinators"

## Index

### Interfaces

* [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)

### Type aliases

* [CharCode](_parser_combinators_.md#charcode)
* [Parser](_parser_combinators_.md#parser)

### Variables

* [isParseError](_parser_combinators_.md#const-isparseerror)
* [pAsterisk](_parser_combinators_.md#const-pasterisk)
* [pCloseParen](_parser_combinators_.md#const-pcloseparen)
* [pColon](_parser_combinators_.md#const-pcolon)
* [pComma](_parser_combinators_.md#const-pcomma)
* [pDash](_parser_combinators_.md#const-pdash)
* [pDquote](_parser_combinators_.md#const-pdquote)
* [pEquals](_parser_combinators_.md#const-pequals)
* [pForwardSlash](_parser_combinators_.md#const-pforwardslash)
* [pOpenParen](_parser_combinators_.md#const-popenparen)
* [pPeriod](_parser_combinators_.md#const-pperiod)
* [pSemicolon](_parser_combinators_.md#const-psemicolon)
* [pSpace](_parser_combinators_.md#const-pspace)
* [throwParseError](_parser_combinators_.md#const-throwparseerror)

### Functions

* [char](_parser_combinators_.md#const-char)
* [concat](_parser_combinators_.md#concat)
* [createCharStream](_parser_combinators_.md#const-createcharstream)
* [followedBy](_parser_combinators_.md#const-followedby)
* [many](_parser_combinators_.md#const-many)
* [manyIgnore](_parser_combinators_.md#const-manyignore)
* [manySatisfy](_parser_combinators_.md#const-manysatisfy)
* [map](_parser_combinators_.md#const-map)
* [mapTo](_parser_combinators_.md#const-mapto)
* [optional](_parser_combinators_.md#const-optional)
* [or](_parser_combinators_.md#const-or)
* [orDefault](_parser_combinators_.md#const-ordefault)
* [pEof](_parser_combinators_.md#const-peof)
* [parseWith](_parser_combinators_.md#const-parsewith)
* [parseWithOrThrow](_parser_combinators_.md#const-parsewithorthrow)
* [satisfy](_parser_combinators_.md#const-satisfy)
* [sepBy](_parser_combinators_.md#const-sepby)
* [sepBy1](_parser_combinators_.md#const-sepby1)
* [string](_parser_combinators_.md#const-string)

## Type aliases

###  CharCode

Ƭ **CharCode**: *number*

___

###  Parser

Ƭ **Parser**: *function*

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

## Variables

### `Const` isParseError

• **isParseError**: *isParseErrorProd* = process.env.NODE_ENV === "production" ? isParseErrorProd : isParseErrorDev

___

### `Const` pAsterisk

• **pAsterisk**: *function* = char("*")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pCloseParen

• **pCloseParen**: *function* = char(")")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pColon

• **pColon**: *function* = char(":")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pComma

• **pComma**: *function* = char(",")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pDash

• **pDash**: *function* = char("-")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pDquote

• **pDquote**: *function* = char('"')

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pEquals

• **pEquals**: *function* = char("=")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pForwardSlash

• **pForwardSlash**: *function* = char("/")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pOpenParen

• **pOpenParen**: *function* = char("(")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pPeriod

• **pPeriod**: *function* = char(".")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pSemicolon

• **pSemicolon**: *function* = char(";")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` pSpace

• **pSpace**: *function* = char(" ")

#### Type declaration:

▸ (`input`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *T*

**Parameters:**

Name | Type |
------ | ------ |
`input` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

___

### `Const` throwParseError

• **throwParseError**: *throwParseErrorProd* = process.env.NODE_ENV === "production"
    ? throwParseErrorProd
    : throwParseErrorDev

## Functions

### `Const` char

▸ **char**(`c`: string): *[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›*

**Parameters:**

Name | Type |
------ | ------ |
`c` | string |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›*

___

###  concat

▸ **concat**<**TA**, **TB**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB]›*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB]›*

▸ **concat**<**TA**, **TB**, **TC**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›, `e`: [Parser](_parser_combinators_.md#parser)‹TE›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |
`e` | [Parser](_parser_combinators_.md#parser)‹TE› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›, `e`: [Parser](_parser_combinators_.md#parser)‹TE›, `f`: [Parser](_parser_combinators_.md#parser)‹TF›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |
`e` | [Parser](_parser_combinators_.md#parser)‹TE› |
`f` | [Parser](_parser_combinators_.md#parser)‹TF› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›, `e`: [Parser](_parser_combinators_.md#parser)‹TE›, `f`: [Parser](_parser_combinators_.md#parser)‹TF›, `g`: [Parser](_parser_combinators_.md#parser)‹TG›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |
`e` | [Parser](_parser_combinators_.md#parser)‹TE› |
`f` | [Parser](_parser_combinators_.md#parser)‹TF› |
`g` | [Parser](_parser_combinators_.md#parser)‹TG› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›, `e`: [Parser](_parser_combinators_.md#parser)‹TE›, `f`: [Parser](_parser_combinators_.md#parser)‹TF›, `g`: [Parser](_parser_combinators_.md#parser)‹TG›, `h`: [Parser](_parser_combinators_.md#parser)‹TH›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |
`e` | [Parser](_parser_combinators_.md#parser)‹TE› |
`f` | [Parser](_parser_combinators_.md#parser)‹TF› |
`g` | [Parser](_parser_combinators_.md#parser)‹TG› |
`h` | [Parser](_parser_combinators_.md#parser)‹TH› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH]›*

▸ **concat**<**TA**, **TB**, **TC**, **TD**, **TE**, **TF**, **TG**, **TH**, **TI**>(`a`: [Parser](_parser_combinators_.md#parser)‹TA›, `b`: [Parser](_parser_combinators_.md#parser)‹TB›, `c`: [Parser](_parser_combinators_.md#parser)‹TC›, `d`: [Parser](_parser_combinators_.md#parser)‹TD›, `e`: [Parser](_parser_combinators_.md#parser)‹TE›, `f`: [Parser](_parser_combinators_.md#parser)‹TF›, `g`: [Parser](_parser_combinators_.md#parser)‹TG›, `h`: [Parser](_parser_combinators_.md#parser)‹TH›, `i`: [Parser](_parser_combinators_.md#parser)‹TI›): *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

**Type parameters:**

▪ **TA**

▪ **TB**

▪ **TC**

▪ **TD**

▪ **TE**

▪ **TF**

▪ **TG**

▪ **TH**

▪ **TI**

**Parameters:**

Name | Type |
------ | ------ |
`a` | [Parser](_parser_combinators_.md#parser)‹TA› |
`b` | [Parser](_parser_combinators_.md#parser)‹TB› |
`c` | [Parser](_parser_combinators_.md#parser)‹TC› |
`d` | [Parser](_parser_combinators_.md#parser)‹TD› |
`e` | [Parser](_parser_combinators_.md#parser)‹TE› |
`f` | [Parser](_parser_combinators_.md#parser)‹TF› |
`g` | [Parser](_parser_combinators_.md#parser)‹TG› |
`h` | [Parser](_parser_combinators_.md#parser)‹TH› |
`i` | [Parser](_parser_combinators_.md#parser)‹TI› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[TA, TB, TC, TD, TE, TF, TG, TH, TI]›*

___

### `Const` createCharStream

▸ **createCharStream**(`input`: string): *[CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |

**Returns:** *[CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)*

___

### `Const` followedBy

▸ **followedBy**<**T**>(`other`: [Parser](_parser_combinators_.md#parser)‹unknown›): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`other` | [Parser](_parser_combinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹T››*

___

### `Const` many

▸ **many**<**T**>(`options`: object): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

___

### `Const` manyIgnore

▸ **manyIgnore**<**T**>(`options`: object): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹void››*

**Type parameters:**

▪ **T**

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹void››*

___

### `Const` manySatisfy

▸ **manySatisfy**(`options`: object): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›, [Parser](_parser_combinators_.md#parser)‹string››*

**Parameters:**

▪`Default value`  **options**: *object*= {}

Name | Type |
------ | ------ |
`max?` | number |
`min?` | number |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›, [Parser](_parser_combinators_.md#parser)‹string››*

___

### `Const` map

▸ **map**<**TA**, **TB**>(`mapper`: function): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

▪ **mapper**: *function*

▸ (`result`: TA): *TB*

**Parameters:**

Name | Type |
------ | ------ |
`result` | TA |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TB››*

___

### `Const` mapTo

▸ **mapTo**<**TA**, **TB**>(`v`: TB): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`v` | TB |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TB››*

___

### `Const` optional

▸ **optional**<**T**>(`parse`: [Parser](_parser_combinators_.md#parser)‹T›): *[Parser](_parser_combinators_.md#parser)‹[Option](_option_.md#option)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](_parser_combinators_.md#parser)‹T› |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[Option](_option_.md#option)‹T››*

___

### `Const` or

▸ **or**<**TA**, **TB**>(`otherParse`: [Parser](_parser_combinators_.md#parser)‹TB›): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TA | TB››*

**Type parameters:**

▪ **TA**

▪ **TB**

**Parameters:**

Name | Type |
------ | ------ |
`otherParse` | [Parser](_parser_combinators_.md#parser)‹TB› |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹TA›, [Parser](_parser_combinators_.md#parser)‹TA | TB››*

___

### `Const` orDefault

▸ **orDefault**<**T**>(`default_`: function): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹[Option](_option_.md#option)‹T››, [Parser](_parser_combinators_.md#parser)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

▪ **default_**: *function*

▸ (): *T*

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹[Option](_option_.md#option)‹T››, [Parser](_parser_combinators_.md#parser)‹T››*

___

### `Const` pEof

▸ **pEof**(`charStream`: [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`charStream` | [CharStreamLike](../interfaces/_parser_combinators_.charstreamlike.md) |

**Returns:** *void*

___

### `Const` parseWith

▸ **parseWith**<**T**>(`parse`: [Parser](_parser_combinators_.md#parser)‹T›): *[Operator](_pipe_.md#operator)‹string, [Option](_option_.md#option)‹T››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parse` | [Parser](_parser_combinators_.md#parser)‹T› |

**Returns:** *[Operator](_pipe_.md#operator)‹string, [Option](_option_.md#option)‹T››*

___

### `Const` parseWithOrThrow

▸ **parseWithOrThrow**<**T**>(`parser`: [Parser](_parser_combinators_.md#parser)‹T›): *[Operator](_pipe_.md#operator)‹string, T›*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`parser` | [Parser](_parser_combinators_.md#parser)‹T› |

**Returns:** *[Operator](_pipe_.md#operator)‹string, T›*

___

### `Const` satisfy

▸ **satisfy**(`f`: function): *[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›*

**Parameters:**

▪ **f**: *function*

▸ (`char`: [CharCode](_parser_combinators_.md#charcode)): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`char` | [CharCode](_parser_combinators_.md#charcode) |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹[CharCode](_parser_combinators_.md#charcode)›*

___

### `Const` sepBy

▸ **sepBy**<**T**>(`separator`: [Parser](_parser_combinators_.md#parser)‹unknown›): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](_parser_combinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

___

### `Const` sepBy1

▸ **sepBy1**<**T**>(`separator`: [Parser](_parser_combinators_.md#parser)‹unknown›): *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`separator` | [Parser](_parser_combinators_.md#parser)‹unknown› |

**Returns:** *[Operator](_pipe_.md#operator)‹[Parser](_parser_combinators_.md#parser)‹T›, [Parser](_parser_combinators_.md#parser)‹keyof T[]››*

___

### `Const` string

▸ **string**(`str`: string): *[Parser](_parser_combinators_.md#parser)‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`str` | string |

**Returns:** *[Parser](_parser_combinators_.md#parser)‹string›*
