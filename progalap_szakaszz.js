const functions = require("./modules")

// int      string      tömb        object      boolean
1. 21       "cica"      arr = []    obj = {}    true/false     

2. const - konstans létrehozása, értékét nem lehet változtatni
    let  - változó létrehozása. értéke változtatható

3. Érték szerini átadásnál az egyszerű adattípusok érték szerint adódnak át, függvényben való módosításuk nem érinti az eredeti változó értékét. pl:változó
    Referencia szerinti átadásnál ha azon módisítást végzünk az eredetileg átadott érték is módosul. pl: tömbök

4.    
const containsElement = (arr,number) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number){
            return true
        }
    }
    return false
};

5.
const oldest = (arr) => {
    let oldMan = arr[0].age
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age > oldMan) {
            oldMan = arr[i].age
        }
    }
    return oldMan;
};

6.
const posEven = () => {
    for (let i = 10; i < 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }    
};

7.
const section = (arr1,arr2) => {
    const dst = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !dst.includes(arr1[i])) {
                dst.push(arr1[i]);
            }
        }
    }
    return dst;
};

9.
const generate2D = (n,m) => {
    const arr = new Array(n);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(m);
    }
    for (let j = 0; j < arr.length; j++) {
        for (let k = 0; k < arr[j].length; k++) {
            arr[j][k] = j * k;
        }
    }
    return arr;
};

