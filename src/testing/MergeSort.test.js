import mergeSort from "../components/MergeSort";

test("Testing the mergesort function for ranking", () => {
  //mockData consists of the possible test cases which might
  //occur during the usage of our web application
  var mockData = [
    //Empty Array
    [],
    //Array with 1 item
    [[2, 1658550548513, { test: "test2" }]],
    //Even Length Random Array
    [
      [7, 1658550412345, { test: "test1" }],
      [2, 1658550548513, { test: "test2" }],
      [4, 1658550625032, { test: "test3" }],
      [3, 1658550648151, { test: "test4" }],
      [3, 1658550550119, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [6, 1658550765282, { test: "test8" }],
      [7, 1658550721111, { test: "test9" }],
      [2, 1658550888888, { test: "test10" }],
    ],
    //Odd Length Random Array
    [
      [7, 1658550412345, { test: "test1" }],
      [2, 1658550548513, { test: "test2" }],
      [4, 1658550625032, { test: "test3" }],
      [3, 1658550648151, { test: "test4" }],
      [3, 1658550550119, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [6, 1658550765282, { test: "test8" }],
      [7, 1658550721111, { test: "test9" }],
    ],
    //Array with all same tries (different timings)
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550625032, { test: "test3" }],
      [1, 1658550648151, { test: "test4" }],
      [1, 1658550550119, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550765282, { test: "test8" }],
      [1, 1658550721111, { test: "test9" }],
      [1, 1658550888888, { test: "test10" }],
    ],
    //Array with all same timing (different tries)
    [
      [2, 1658550412345, { test: "test1" }],
      [1, 1658550412345, { test: "test2" }],
      [3, 1658550412345, { test: "test3" }],
      [7, 1658550412345, { test: "test4" }],
      [2, 1658550412345, { test: "test5" }],
      [3, 1658550412345, { test: "test6" }],
      [4, 1658550412345, { test: "test7" }],
      [5, 1658550412345, { test: "test8" }],
      [6, 1658550412345, { test: "test9" }],
      [7, 1658550412345, { test: "test10" }],
    ],
    //Array with all same tries & timings
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550412345, { test: "test2" }],
      [1, 1658550412345, { test: "test3" }],
      [1, 1658550412345, { test: "test4" }],
      [1, 1658550412345, { test: "test5" }],
      [1, 1658550412345, { test: "test6" }],
      [1, 1658550412345, { test: "test7" }],
      [1, 1658550412345, { test: "test8" }],
      [1, 1658550412345, { test: "test9" }],
      [1, 1658550412345, { test: "test10" }],
    ],
    //Already Sorted Array
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550550119, { test: "test3" }],
      [1, 1658550625032, { test: "test4" }],
      [1, 1658550648151, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550721111, { test: "test8" }],
      [1, 1658550765282, { test: "test9" }],
      [1, 1658550888888, { test: "test10" }],
    ],
    //Reverse Sorted Array
    [
      [1, 1658550888888, { test: "test10" }],
      [1, 1658550765282, { test: "test9" }],
      [1, 1658550721111, { test: "test8" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550648151, { test: "test5" }],
      [1, 1658550625032, { test: "test4" }],
      [1, 1658550550119, { test: "test3" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550412345, { test: "test1" }],
    ],
  ];

  //The resultData array is used to store all the
  //outputs from the mergeSort and used to compare with the
  //correctOutput later during the test
  var resultData = [];

  //The correctOutput array consists of the compiled sorted arrays 
  //that is expected from the mergeSort function. It's format is as shown below
  //Example: [[tries, comparetime, Object], [tries, comparetime, Object], ...]
  var correctOutput = [
    //Empty Array
    [],
    //Array with 1 item
    [[2, 1658550548513, { test: "test2" }]],
    //Even Length Random Array
    [
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [2, 1658550548513, { test: "test2" }],
      [2, 1658550888888, { test: "test10" }],
      [3, 1658550550119, { test: "test5" }],
      [3, 1658550648151, { test: "test4" }],
      [4, 1658550625032, { test: "test3" }],
      [6, 1658550765282, { test: "test8" }],
      [7, 1658550412345, { test: "test1" }],
      [7, 1658550721111, { test: "test9" }],
    ],
    //Odd Length Random Array
    [
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [2, 1658550548513, { test: "test2" }],
      [3, 1658550550119, { test: "test5" }],
      [3, 1658550648151, { test: "test4" }],
      [4, 1658550625032, { test: "test3" }],
      [6, 1658550765282, { test: "test8" }],
      [7, 1658550412345, { test: "test1" }],
      [7, 1658550721111, { test: "test9" }],
    ],
    //Array with all same tries (different timings)
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550550119, { test: "test5" }],
      [1, 1658550625032, { test: "test3" }],
      [1, 1658550648151, { test: "test4" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550721111, { test: "test9" }],
      [1, 1658550765282, { test: "test8" }],
      [1, 1658550888888, { test: "test10" }],
    ],
    //Array with all same timing (different tries)
    [
      [1, 1658550412345, { test: "test2" }],
      [2, 1658550412345, { test: "test1" }],
      [2, 1658550412345, { test: "test5" }],
      [3, 1658550412345, { test: "test3" }],
      [3, 1658550412345, { test: "test6" }],
      [4, 1658550412345, { test: "test7" }],
      [5, 1658550412345, { test: "test8" }],
      [6, 1658550412345, { test: "test9" }],
      [7, 1658550412345, { test: "test4" }],
      [7, 1658550412345, { test: "test10" }],
    ],
    //Array with all same tries & timings
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550412345, { test: "test2" }],
      [1, 1658550412345, { test: "test3" }],
      [1, 1658550412345, { test: "test4" }],
      [1, 1658550412345, { test: "test5" }],
      [1, 1658550412345, { test: "test6" }],
      [1, 1658550412345, { test: "test7" }],
      [1, 1658550412345, { test: "test8" }],
      [1, 1658550412345, { test: "test9" }],
      [1, 1658550412345, { test: "test10" }],
    ],
    //Already Sorted Array
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550550119, { test: "test3" }],
      [1, 1658550625032, { test: "test4" }],
      [1, 1658550648151, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550721111, { test: "test8" }],
      [1, 1658550765282, { test: "test9" }],
      [1, 1658550888888, { test: "test10" }],
    ],
    //Reverse Sorted Array
    [
      [1, 1658550412345, { test: "test1" }],
      [1, 1658550548513, { test: "test2" }],
      [1, 1658550550119, { test: "test3" }],
      [1, 1658550625032, { test: "test4" }],
      [1, 1658550648151, { test: "test5" }],
      [1, 1658550665032, { test: "test6" }],
      [1, 1658550665282, { test: "test7" }],
      [1, 1658550721111, { test: "test8" }],
      [1, 1658550765282, { test: "test9" }],
      [1, 1658550888888, { test: "test10" }],
    ],
  ];

  for (let i = 0; i < mockData.length; i++) {
    var tempArray = mergeSort(mockData[i]);
    resultData.push(tempArray);
  }
  expect(resultData).toMatchObject(correctOutput);
});
