const worker = {
    id: 4143,
    tag: "2JL5gQXMk2",
};

const kxbda = (arr) => arr.reduce((a, b) => a + b * 4, 0);

const values = Array.from({ length: 7 }, (_, i) => i);
console.log(kxbda(values), worker.tag);
