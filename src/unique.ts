/**
 * Entity Relationship Diagram (in TypeScript)
 * @author  Levente Hunyadi
 * @version 1.0
 * @remarks Copyright (C) 2022-2024 Levente Hunyadi
 * @remarks Licensed under MIT, see https://opensource.org/licenses/MIT
 * @see     https://github.com/hunyadi/entity-relationship-diagram/
 **/

/**
 * Produces a unique identifier.
 * @param len The number of random characters to generate.
 * @returns An alphabetic sequence.
 */
export function makeIdentifier(len = 8) {
    const a = Array.from(
        { length: len },
        () => Math.floor(36 * Math.random()).toString(36)
    );
    a[0] = Math.floor(10 + 26 * Math.random()).toString(36);
    return a.join("");
}
