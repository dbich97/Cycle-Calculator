// Based on the Kuwaiti algorithm for Hijri-Gregorian conversion.
// This algorithm is commonly used and provides accurate conversions without external dependencies.

/**
 * Converts a Gregorian date to a Hijri date.
 * @param gy Gregorian year
 * @param gm Gregorian month (1-12)
 * @param gd Gregorian day
 * @returns An array [hy, hm, hd] representing the Hijri year, month, and day.
 */
export function gregorianToHijri(gy: number, gm: number, gd: number): [number, number, number] {
    const d = Math.floor;
    let jd: number;

    if (gy > 1582 || (gy === 1582 && gm > 10) || (gy === 1582 && gm === 10 && gd > 14)) {
        jd = d((1461 * (gy + 4800 + d((gm - 14) / 12))) / 4) + d((367 * (gm - 2 - 12 * d((gm - 14) / 12))) / 12) - d((3 * d((gy + 4900 + d((gm - 14) / 12)) / 100)) / 4) + gd - 32075;
    } else {
        jd = 367 * gy - d((7 * (gy + 5001 + d((gm - 9) / 7))) / 4) + d((275 * gm) / 9) + gd + 1729777;
    }

    const l = jd - 1948440 + 10632;
    const n = d((l - 1) / 10631);
    const i = l - 10631 * n + 354;
    const j = (d((10985 - i) / 5316)) * (d((50 * i) / 17719)) + (d(i / 5670)) * (d((43 * i) / 15238));
    const i2 = i - (d((30 - j) / 15)) * (d((17719 * j) / 50)) - (d(j / 16)) * (d((15238 * j) / 43)) + 29;
    
    const m = d((24 * i2) / 709);
    const day = i2 - d((709 * m) / 24);
    const year = 30 * n + j - 30;

    return [year, m, day];
}

/**
 * Converts a Hijri date to a Gregorian date.
 * @param hy Hijri year
 * @param hm Hijri month (1-12)
 * @param hd Hijri day
 * @returns A JavaScript Date object representing the Gregorian date.
 */
export function hijriToGregorian(hy: number, hm: number, hd: number): Date {
    const d = Math.floor;
    const jd = d((11 * hy + 3) / 30) + 354 * hy + 30 * hm - d((hm - 1) / 2) + hd + 1948440 - 385;
    
    let l, n, i, j, k;
    let year, month, day;

    if (jd > 2299160) {
        l = jd + 68569;
        n = d((4 * l) / 146097);
        l = l - d((146097 * n + 3) / 4);
        i = d((4000 * (l + 1)) / 1461001);
        l = l - d((1461 * i) / 4) + 31;
        j = d((80 * l) / 2447);
        day = l - d((2447 * j) / 80);
        l = d(j / 11);
        month = j + 2 - 12 * l;
        year = 100 * (n - 49) + i + l;
    } else {
        j = jd + 1402;
        k = d((j - 1) / 1461);
        l = j - 1461 * k;
        n = d((l - 1) / 365) - d(l / 1461);
        i = l - 365 * n + 30;
        j = d((80 * i) / 2447);
        day = i - d((2447 * j) / 80);
        i = d(j / 11);
        month = j + 2 - 12 * i;
        year = 4 * k + n + i - 4716;
    }

    return new Date(year, month - 1, day);
}