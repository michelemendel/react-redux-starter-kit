/****************************************************************
 * Test and predicate functions
 */

export function isDef(obj) {
    return !(typeof obj === "undefined" || obj === null);
}

export function isStringDef(string) {
    return !(typeof string === "undefined" || string === "undefined" || string === "" || string === null);
}

export function isObjEmpty(obj) {
    return (obj === "undefined") ||
        (Object.keys(obj).length === 0 && obj.constructor === Object);
}

export function isBoolean(obj) {
    return typeof obj === "boolean";
}

export function stringStartsWith(str: string, searchStr: string): boolean {
    return str.toLowerCase().indexOf(searchStr.toLowerCase()) === 0;
}

export function stringEndsWith(str: string, searchStr: string): boolean {
    return str.toLowerCase().lastIndexOf(searchStr.toLowerCase()) === str.length - searchStr.length;
}

// stringIncludes : (str, searchStr) -> boolean
export function stringIncludes(str: string, searchStr: string): boolean {
    return str.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1;
}

/****************************************************************
 * Misc functions
 */

export function noOpRetVoid(): void {}

export function noOpRetString() { return ""; }

export function noOpRetPromise() { return Promise.resolve(); }

// http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
export function getUUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c == "x" ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

/****************************************************************
 * Logging, pretty print and info handling
 */

export function pp(obj) {
    return JSON.stringify(obj, null, "\t");
}

export function ppl(obj) {
    /*eslint-disable no-console*/
    console.log(pp(obj));
}
