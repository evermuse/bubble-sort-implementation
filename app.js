//create module

var bubbleSortModule = (function() {

  var module = {

    setStage : _setStage,
    bubbleSort : _bubbleSort,
    init : _init

  };

  var arr = [5,4,2,9,8,7,1,5,3,6];

  function _setStage() {

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
      bubbleSortBlock.dataset.id = i;
      bubbleSortBlock.className = 'bubbleSortBlock';
      bubbleSortBlock.innerHTML = arr[i];

    }

    //button for end-user to start merge

    var bubbleSortStartButton = document.createElement('button');
    bubbleSortContainer.appendChild(bubbleSortStartButton);
    bubbleSortStartButton.id = 'bubbleSortStartButton';
    bubbleSortStartButton.innerHTML = 'Merge';
    bubbleSortStartButton.addEventListener('click', _bubbleSort);

  }

  //bubble sort logic

  function _bubbleSort() {

    //the swapped var will let be used to know when the sort is done

    var swapped;

    //wrap the for loop in an interval so the movement of nodes is visible as the sort progresses

    var toStop = setInterval(function() {

      swapped = false;

      //comparison nodes to enable removal and insertion on the DOM

      var currentNode;
      var nodeAtNext;
      var nodeToMove;

      for (var i = 0; i < arr.length; i++) {

        if (arr[i] > arr[i + 1]) {

          //if the current value is greater than the next set a temp variable with the current value

          var temp = arr[i];

          //similar to above set the current node and next node to enable DOM removal / insertion

          currentNode = document.querySelector('bubblesort-block[data-id="' + i + '"]');
          nodeAtNext = document.querySelector('bubblesort-block[data-id="' + [i + 1] + '"]');

          //assign current value to the next index position

          arr[i] = arr[i + 1];

          //remove the nextNode from the DOM and reset the data-id attribut to the correct index position

          nodeToMove = bubbleSortContainer.removeChild(nodeAtNext);
          nodeToMove.setAttribute('data-id', i);

          //insert the removed node back into the DOM before the currentNode and set the currentNode's data-id to the nextNode

          bubbleSortContainer.insertBefore(nodeToMove, currentNode);
          currentNode.setAttribute('data-id', i + 1);

          //re-assign the temp variable to the next array position

          arr[i + 1] = temp;

          swapped = true;

        }

      }

      if (!swapped) {

        clearInterval(toStop);

      }

    }, 500);

    return arr;

  }

  //init function to set the stage

  function _init() {

    _setStage();

  }

  return module;

})();

//wait until the DOM is loaded to set the stage

document.addEventListener('DOMContentLoaded', function() {

  bubbleSortModule.init();

});