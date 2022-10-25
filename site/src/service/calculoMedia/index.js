
export function calcularMedia(array) {
    try {
        let s = 0;
        let q = 0;
        for (let item of array) {
            s = item + s;
            q++;
        }
        return s/q; 
    } catch (err) {
        return err.message;
    }
}

export function maior (array) {
    try {
        let x = -1;
        for (let item of array) {
            if (item > x) x = item
        }
        return x;
    } catch (err) {
        return err.message;
    }
}

export function menor (array) {
    try {
        let x = Number.MAX_VALUE;
        for (let item of array) {
            if (item < x) x = item;
        }
    } catch (err) {
        return err.message
    }
}


