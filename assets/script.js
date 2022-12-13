var descriptionInput = document.querySelector('#description');
var descriptionList = localStorage.getItem("descriptionList");

$(function () {
   
    var buttonClickHandler = function (event) {
     
      var descriptionStored = event.target.getAttribute('descriptionInput');
      descriptionInput.addEventListener("click", buttonClickHandler);
      if (element.matches("saveBtn") === true) {
        renderdescriptionList();
      }

    function descriptionStored() {
      localStorage.setItem("descriptionList", JSON.stringify(descriptionList));
      
    };
    descriptionStored();
    
    descriptionList.addEventListener("submit", function(event) {
      event.preventDefault();
    
      var descriptionList = descriptionList.value.trim();
    
      if (description === "") {
        return;
      }
    
      descriptionList.push(description);
      descriptionInput.value = "";
  
    });
    };
   
    if (currentDay === ('hour-[i]')) {
      document.textContent('#hour-[i++]');
    }

    function init() {
      var storeddescription = JSON.parse(localStorage.getItem("description"));

      if (descriptionList !== null) {
        timeblock = description;
      }
    }
    var today = dayjs();
    $('#currentDay').text(today.format('MMM D, YYYY'));

    descriptionInput.addEventListener("click", buttonClickHandler);
  });

    