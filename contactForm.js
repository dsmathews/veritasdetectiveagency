$('document').ready(function () {

   

   function getInfo() {
      event.preventDefault();
      let firstName = $("#clientFirstName").val();
      let lastName = $("#clientLastName").val();
      let email = $("#clientEmail").val();
      let phone = $("#clientPhone").val();
      let location = $("#clientLocation").val();
      let contactMethod = $("#contactMethod").val();
      let time = $("#timeToReach").val();
      let situation = $("#situation").val();
      let description = $("#clientNeeds").val();

      let dataCollection = {
         "First Name": firstName,
         "Last Name": lastName,
         "Email": email,
         "Phone Number": phone,
         "State": location,
         "Contact Method": contactMethod,
         "Best Time to Contact": time,
         "Specific Situation": situation,
         "Description": description
      }

      const errRecord = function(res) {
         console.log('something went wrong',res);
      }

      const okRecord = function(res) {
         console.log('ok', res)
      }

      let dataPost = JSON.stringify(dataCollection)

      $.ajax({
         type: "PUT",
         URL: "https://523u7qu7ui.execute-api.us-east-1.amazonaws.com/prod/contact",
         data: dataPost,
         datatype: JSON,
         error: errRecord,
         success: okRecord
      })
      // $.post('https://523u7qu7ui.execute-api.us-east-1.amazonaws.com/prod/contact', dataPost, function (res) {console.log(res)});
      console.log(dataCollection);
      console.table(dataCollection);
      $("#contactForm").trigger("reset")
      
   }
   function resetButton() {
      console.log("before")
      $("#contactForm").trigger("reset")
      console.log("after")
   }
   

   $("#submit").on("click", getInfo)
   $("#clearForm").on("click", resetButton)
})

function rccb(gResponse) {
   console.log(gResponse)
   $("#submit").prop('disabled', false);
}




