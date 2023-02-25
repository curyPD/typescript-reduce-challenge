// OBJECTIVE: Create forEach, map, and filter using reduce (they have to be type-safe)

type ForEachCallback<Element> = (
    el: Element,
    i: number,
    arr: Element[]
) => void;

function forEach<Element>(
    array: Element[],
    callback: ForEachCallback<Element>
): void {
    array.reduce((_, el, i, arr) => {
        callback(el, i, arr);
        return undefined;
    }, undefined);
}

forEach([1, 2, 3, "hello", false], (el, i) => {
    console.log(`Element #${i}: ${el}`);
});

///////////////////////////////////////////////////////

type MapCallback<T, K> = (el: T, i: number, arr: T[]) => K;

function map<T, K>(array: T[], callback: MapCallback<T, K>): K[] {
    return array.reduce(
        (acc, el, i, arr) => [...acc, callback(el, i, arr)],
        [] as K[]
    );
}

console.log(map([1, 2, 3], (el) => el * 1111));

///////////////////////////////////////////////////////

type FilterCallback<T> = (el: T, i: number, arr: T[]) => boolean;

function filter<T>(array: T[], callback: FilterCallback<T>): T[] {
    return array.reduce(
        (acc, el, i, arr) => (callback(el, i, arr) ? [...acc, el] : acc),
        [] as T[]
    );
}

console.log(
    filter(
        [
            "Bulgarian",
            "English",
            "Mandarin",
            "Urdu",
            "Portuguese",
            "Russian",
            "Polish",
            "Swedish",
            "Japanese",
            "Arabic",
        ],
        (lang) => lang.toLowerCase().startsWith("p")
    )
);
