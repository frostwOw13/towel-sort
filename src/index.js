
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newMatrix = [];

    if (matrix === undefined || !matrix.some(e => e)) {
        console.log(newMatrix);
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {
                newMatrix.push(...matrix[i]);
            } else {
                newMatrix.push(...matrix[i].reverse());
            }
        }
        console.log(newMatrix);
        return newMatrix;
    }
}
