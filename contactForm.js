$('document').ready(function () {

   

   function getInfo() {
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

      console.log(dataCollection);
      console.table(dataCollection);
      $("contactForm").trigger("reset")
      
   }
   function resetButton() {
      console.log("before")
      $("contactForm").trigger("reset")
      console.log("after")
   }
   function rccb(response) {
      $("#submit").prop('disabled', false);
   }

   $("#submit").on("click", getInfo)
   $("#reset").on("click", resetButton)
})




