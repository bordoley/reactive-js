/// <reference types="node" />
import { Predicate, Function1, Factory } from './functions';
import { Option } from './option';
import { EnumeratorLike } from './enumerable';
import './runnable';

declare type CharCode = number;
interface CharStreamLike extends EnumeratorLike<CharCode> {
    index: number;
    readonly src: string;
}
declare type Parser<T> = {
    (input: CharStreamLike): T;
};
declare const throwParseError: <T>(charStream: CharStreamLike) => T;
declare const isParseError: Predicate<unknown>;
declare const createCharStream: (input: string) => CharStreamLike;
declare function concat<TA, TB>(a: Parser<TA>, b: Parser<TB>): Parser<[TA, TB]>;
declare function concat<TA, TB, TC>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>): Parser<[TA, TB, TC]>;
declare function concat<TA, TB, TC, TD>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>): Parser<[TA, TB, TC, TD]>;
declare function concat<TA, TB, TC, TD, TE>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>, e: Parser<TE>): Parser<[TA, TB, TC, TD, TE]>;
declare function concat<TA, TB, TC, TD, TE, TF>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>, e: Parser<TE>, f: Parser<TF>): Parser<[TA, TB, TC, TD, TE, TF]>;
declare function concat<TA, TB, TC, TD, TE, TF, TG>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>, e: Parser<TE>, f: Parser<TF>, g: Parser<TG>): Parser<[TA, TB, TC, TD, TE, TF, TG]>;
declare function concat<TA, TB, TC, TD, TE, TF, TG, TH>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>, e: Parser<TE>, f: Parser<TF>, g: Parser<TG>, h: Parser<TH>): Parser<[TA, TB, TC, TD, TE, TF, TG, TH]>;
declare function concat<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: Parser<TA>, b: Parser<TB>, c: Parser<TC>, d: Parser<TD>, e: Parser<TE>, f: Parser<TF>, g: Parser<TG>, h: Parser<TH>, i: Parser<TI>): Parser<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
declare const concatWith: <TA, TB>(other: Parser<TB>) => Function1<Parser<TA>, Parser<[TA, TB]>>;
declare const followedBy: <T>(other: Parser<unknown>) => Function1<Parser<T>, Parser<T>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => Function1<Parser<TA>, Parser<TB>>;
declare const mapTo: <TA, TB>(v: TB) => Function1<Parser<TA>, Parser<TB>>;
declare const parseWithOrThrow: <T>(parser: Parser<T>) => Function1<string, T>;
declare const parseWith: <T>(parse: Parser<T>) => Function1<string, Option<T>>;
declare const or: <TA, TB>(otherParse: Parser<TB>) => Function1<Parser<TA>, Parser<TA | TB>>;
declare const many: <T>(options?: {
    readonly min?: number;
    readonly max?: number;
}) => Function1<Parser<T>, Parser<readonly T[]>>;
declare const manyIgnore: <T>(options?: {
    min?: number;
    max?: number;
}) => Function1<Parser<T>, Parser<void>>;
declare const optional: <T>(parse: Parser<T>) => Parser<Option<T>>;
declare const orCompute: <T>(compute: Factory<T>) => Function1<Parser<Option<T>>, Parser<T>>;
declare const sepBy1: <T>(separator: Parser<unknown>) => Function1<Parser<T>, Parser<readonly T[]>>;
declare const sepBy: <T>(separator: Parser<unknown>) => Function1<Parser<T>, Parser<readonly T[]>>;
declare const string: (str: string) => Parser<string>;
declare const satisfy: (f: Predicate<CharCode>) => Parser<CharCode>;
declare const manySatisfy: (options?: {
    readonly min?: number;
    readonly max?: number;
}) => Function1<Parser<CharCode>, Parser<string>>;
declare const char: (c: string) => Parser<CharCode>;
declare const pEof: (charStream: CharStreamLike) => void;
declare const pSemicolon: Parser<number>;
declare const pComma: Parser<number>;
declare const pSpace: Parser<number>;
declare const pColon: Parser<number>;
declare const pPeriod: Parser<number>;
declare const pEquals: Parser<number>;
declare const pForwardSlash: Parser<number>;
declare const pDash: Parser<number>;
declare const pOpenParen: Parser<number>;
declare const pCloseParen: Parser<number>;
declare const pDquote: Parser<number>;
declare const pAsterisk: Parser<number>;

export { CharCode, CharStreamLike, Parser, char, concat, concatWith, createCharStream, followedBy, isParseError, many, manyIgnore, manySatisfy, map, mapTo, optional, or, orCompute, pAsterisk, pCloseParen, pColon, pComma, pDash, pDquote, pEof, pEquals, pForwardSlash, pOpenParen, pPeriod, pSemicolon, pSpace, parseWith, parseWithOrThrow, satisfy, sepBy, sepBy1, string, throwParseError };
