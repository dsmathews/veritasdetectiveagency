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
         "lastName": lastName,
         "firstName": firstName,
         "email": email,
         "phone": phone,
         "location": location,
         "contactMethod": contactMethod,
         "time": time,
         "situation": situation,
         "description": description
      }

      const errRecord = function (req, res) {
         if (req.status !== 200 || res == 'error') {
         $('#modal').toggle('display')
         $('.success').toggle('hide')
         $('#close').click(function(){
            $('#modal').toggle('display');
            $('window').reload();
         });
         $('#closer').click(function(){
            $('#modal').toggle('display');
            $('window').reload();
         });
         console.log('something went wrong');
         console.log(req);
         console.log(res)
      }
      }

      const okRecord = function (req,res) {
         console.log(req);
         console.log(res);
         if (req.errorType !== "ValidationException"  && res == 'success') {
         $('#modal').toggle('display')
         $('.error').toggle('show')
         $('#close').click(function(){
            $('#modal').toggle('display');
            $('window').reload();
         });
         $('#closer').click(function(){
            $('#modal').toggle('display');
            $('window').reload();
         });
      } else {
         errRecord();
      }

         console.log(req);
         console.log('ok', res);
      }

      let dataPost = JSON.stringify(dataCollection)

      $.ajax({
         method: "PUT",
         url: "https://523u7qu7ui.execute-api.us-east-1.amazonaws.com/prod/contact/",
         data: dataPost,
         datatype: JSON,
         error: errRecord,
         success: okRecord
      })
      // $.post("https://ifpk0bqxhk.execute-api.us-east-1.amazonaws.com/prod/email", dataPost, function (res) {console.log(res)});
      // console.log(dataCollection);
      // console.table(dataCollection);
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