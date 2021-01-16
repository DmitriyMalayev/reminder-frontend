document.addEventListener("DOMContentLoaded", function(e){
  Calendar.all()
  Event.all()   
})

document.addEventListener('click', function(e) {
  let target = e.target   
  if(target.matches(".selectCalendar")){
    let calendar = Calendar.findById(target.dataset.calendarId)
    calendar.show()
    console.log("selected calendar", target.dataset)
    }
  })

document.addEventListener("submit", function(e){
  let target = e.target 
  if(target.matches("#reminder_form")){
    e.preventDefault(); 
    let formData = {}
    formData.name = target.name.value
    formData.start_time = target.start_time.value
    formData.end_time = target.end_time.value
    formData.notes = target.notes.value 
    formData.calendar_id = target.calendar_id.value    
    Event.create(formData) 
    return formData
  }
})

document.getElementById("reset").addEventListener("click", function(e){
  let target = e.target
  if(target.matches("reminder_form")){
    e.preventDefault();
    document.getElementById("reminder_form").reset()
  }
  })