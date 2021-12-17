const A = [8000, 20001, -1010, 0, 322, -29, 1, 2, 3, -50];
//const arr = [4, 2, -1, 0, 3, 9, 1, -5];
//const arr = [1, 2, 3];
//const arr = [-1, -3];

function solution(A) {
   A = [...new Set(A)];
    let min = 1;
    A.sort((x,y) => x-y);
    for (i in A) {
       if (A[i] > -1 && A[i] == min) { min ++;}
    }
	return min;
}