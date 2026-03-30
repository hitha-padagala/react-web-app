// function f() {
let f = () => {
  let ch = "a";
  let s = "abc";
  let isMale = true;
  let age = 18;

  console.log(typeof ch, ch);
  console.log(typeof s, s);
  console.log(typeof isMale, isMale);
  console.log(typeof age, age);

  age = "abc";
  console.log(typeof age, age);

  if (1) {
    let s = "abc";
    console.log(s);
  }

  let n = 5;
  for (let i = 0; i < n; i++) {
    console.log(i);
    if (i === 2) break;
  }

  let a = [0, 1, 2, 3, 4];
  for (let e of a) {
    console.log(e);
    if (e === 3) break;
  }

  a.forEach((e) => {
    if (e >= 3) return;
    console.log(e);
  });

  //   let res = a.map((e) => e * e);
  let res = a.map((e) => {
    return 10 * e;
    // return e * e;
  });
  console.log(res);

  let res2 = a.filter((e) => {
    if (e % 2 === 0) {
      return true; // "abc";
    } else {
      return false; // "";
    }
  });
  console.log(res2);

  console.log(a);
  console.log(a[0]);
  console.log(a[1]);
  console.log(a.length);

  s = "abc";
  console.log(s);
  console.log(s[0]);
  console.log(s[1]);
  console.log(s.length);
  console.log(s.toUpperCase());

  a = [1, 1, 1, 2, 3, 4, 5];
  a.push(6);
  console.log(a);

  //   ============
  let set = new Set();
  for (let e of a) {
    set.add(e);
  }
  console.log(set);

  a = Array.from(set);
  console.log(a);
  //   ============

  a = [1, 1, 1, 2, 3, 4, 5];
  a.push(6);
  console.log(a);

  set = new Set(a);
  console.log(set);
  a = [...set];
  console.log(a);
  //   ============

  let b = [...new Set(a)];
  console.log(b);

  //   ============

  let obj = {
    name: "abc",
    age: 18,
    isMale: true,
  };
  console.log(obj);
  console.log(obj.name);
  obj.name = "def";
  console.log(obj.name);

  console.log("==========");

  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let entries = Object.entries(obj);
  console.log(keys);
  console.log(values);
  console.log(entries);

  for (let k of keys) {
    console.log(k);
  }
  console.log("==========");
  for (let v of values) {
    console.log(v);
  }
  console.log("==========");
  for (let [k, v] of entries) {
    console.log(k, v);
  }

  console.log("==========");
  obj = {
    count: 11,
    3: "found",
    3: "found2",
  };
  for (let k of Object.keys(obj)) {
    console.log(k, typeof k);
  }

  console.log("==========");
  let m = new Map();
  m.set("count", 11);
  m.set(3, "found");
  m.set("3", "found2");

  for (let [k, v] of m) {
    console.log(k, typeof k, v);
  }
};

f();
