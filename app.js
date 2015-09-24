//create module

var bubbleSortModule = (function() {

  var module = {

    setStage : _setStage,
    bubbleSort : _bubbleSort,
    init : _init

  };

  function _setStage(arr) {

    //define container

    var bubbleSortContainer = document.createElement('section');
    document.body.appendChild(bubbleSortContainer);
    bubbleSortContainer.id = 'bubbleSortContainer';

    //section heading

    var bubbleSortHeading = document.createElement('h1');
    bubbleSortContainer.appendChild(bubbleSortHeading);
    bubbleSortHeading.id = 'bubbleSortHeading';
    bubbleSortHeading.innerHTML = 'Bubble Sort Visualization';

    //define new HTML element bubbleSort-block

    var BubbleSortBlock = Object.create(HTMLElement.prototype);
    document.registerElement('bubblesort-block');

    //instantiate the bubbleSort-block elements on the page for the length of the array and create the block text node from the array

    for (var i = 0; i < arr.length; i++) {

      var bubbleSortBlock = document.createElement('bubblesort-block');
      bubbleSortContainer.appendChild(bubbleSortBlock);
      bubbleSortBlock.className = 'bubbleSortBlock';
      bubbleSortBlock.innerHTML = arr[i];

    }

  }

  //bubble sort logic

  function _bubbleSort(arr) {

    var swapped;

    do {

      swapped = false;

      for (var i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {

          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;

        }

      }

    } while (swapped);

    return arr;

  }

  function _init() {

    _setStage([5,4,2,9,8,7,1,5,3,6]);

    //_bubbleSort();

  }

  return module;

})();

document.addEventListener('DOMContentLoaded', function() {

  bubbleSortModule.init();

});