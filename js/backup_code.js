//   render() {
//     // if(this.calendar_title == "Personal"){
//     this.element ||= document.getElementById("events");
//     this.nameLink ||= document.createElement("li");
//     this.nameLink.innerText = this.name;

//     this.start_time_li ||= document.createElement("li");
//     this.start_time_li.innerText = this.start_time;

//     this.end_time_li ||= document.createElement("li");
//     this.end_time_li.innerText = this.end_time;

//     this.notes_li ||= document.createElement("li");
//     this.notes_li.innerText = this.notes;

//     if (this.calendar_title == "Personal") {
//       this.element.style.color = "red";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     } else if (this.calendar_title == "Work") {
//       this.element.style.color = "blue";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     } else {
//       this.element.style.color = "orange";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     }
//   }
// }














// render() {
//     if(document.getElementById("calendars")[0].innerHTML == "Personal"){
//     this.element ||= document.createElement("li")
//     this.nameLink ||= document.createElement("li")
//     this.nameLink.innerText = this.name
//     this.nameLink.style
  
//     this.start_time_li ||= document.createElement("li");
//     this.start_time_li.innerText = this.start_time;
    
//     this.end_time_li ||= document.createElement("li");
//     this.end_time_li.innerText = this.end_time;
    
//     this.notes_li ||= document.createElement("li");
//     this.notes_li.innerText = this.notes;

//     this.element.style.color = "red"
//     this.element.append(this.nameLink, this.notes_li, this.start_time_li, this.end_time_li)
//     return this.element
//   }else if(document.getElementById("calendars")[1].innerHTML == "Work"){
//       this.element ||= document.createElement("li");
//       this.nameLink ||= document.createElement("li");
//       this.nameLink.innerText = this.name;

//       this.start_time_li ||= document.createElement("li");
//       this.start_time_li.innerText = this.start_time;

//       this.end_time_li ||= document.createElement("li");
//       this.end_time_li.innerText = this.end_time;

//       this.notes_li ||= document.createElement("li");
//       this.notes_li.innerText = this.notes;
//       this.element.style.color = "blue";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li)
//       return this.element
//     }
//     else if (document.getElementById("calendars")[2].innerHTML = "Private"){
//       this.element ||= document.createElement("li");
//       this.nameLink ||= document.createElement("li");
//       this.nameLink.innerText = this.name;

//       this.start_time_li ||= document.createElement("li");
//       this.start_time_li.innerText = this.start_time;

//       this.end_time_li ||= document.createElement("li");
//       this.end_time_li.innerText = this.end_time;

//       this.notes_li ||= document.createElement("li");
//       this.notes_li.innerText = this.notes;
//       this.element.style.color = "green";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       )
//       return this.element
//       }}}














    // if (this.calendar_title == "Personal") {
    //   this.element.style.color = "red";
    //   this.element.append(
    //     this.nameLink,
    //     this.notes_li,
    //     this.start_time_li,
    //     this.end_time_li
    //   );
    //   return this.element;
    // } else if (this.calendar_title == "Work") {
    //   this.element.style.color = "blue";
    //   this.element.append(
    //     this.nameLink,
    //     this.notes_li,
    //     this.start_time_li,
    //     this.end_time_li
    //   );
    //   return this.element;
    // } else {
    //   this.element.style.color = "orange";
    //   this.element.append(
    //     this.nameLink,
    //     this.notes_li,
    //     this.start_time_li,
    //     this.end_time_li
    //   );
    //   return this.element;
    // }



 //   render() {  //MY NEW VERSION
  //     // if(this.calendar_title == "Personal"){
  //     this.element ||= document.getElementById("events");
  //     this.nameLink ||= document.createElement("li");
  //     this.nameLink.innerText = this.name;

  //     this.start_time_li ||= document.createElement("li");
  //     this.start_time_li.innerText = this.start_time;

  //     this.end_time_li ||= document.createElement("li");
  //     this.end_time_li.innerText = this.end_time;

  //     this.notes_li ||= document.createElement("li");
  //     this.notes_li.innerText = this.notes;

  //     if (this.calendar_title == "Personal") {
  //       this.element.style.color = "red";
  //       this.element.append(
  //         this.nameLink,
  //         this.notes_li,
  //         this.start_time_li,
  //         this.end_time_li
  //       );
  //       return this.element;
  //     } else if (this.calendar_title == "Work") {
  //       this.element.style.color = "blue";
  //       this.element.append(
  //         this.nameLink,
  //         this.notes_li,
  //         this.start_time_li,
  //         this.end_time_li
  //       );
  //       return this.element;
  //     } else {
  //       this.element.style.color = "orange";
  //       this.element.append(
  //         this.nameLink,
  //         this.notes_li,
  //         this.start_time_li,
  //         this.end_time_li
  //       );
  //       return this.element;
  //     }
  //   }
  // }


    //   render() {  MY OLD VERSION
//     if (document.getElementById("calendars")[0].innerHTML == "Personal") {
//       this.element ||= document.createElement("li");
//       this.nameLink ||= document.createElement("li");
//       this.nameLink.innerText = this.name;
//       this.nameLink.style;

//       this.start_time_li ||= document.createElement("li");
//       this.start_time_li.innerText = this.start_time;

//       this.end_time_li ||= document.createElement("li");
//       this.end_time_li.innerText = this.end_time;

//       this.notes_li ||= document.createElement("li");
//       this.notes_li.innerText = this.notes;

//       this.element.style.color = "red";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     } else if (document.getElementById("calendars")[1].innerHTML == "Work") {
//       this.element ||= document.createElement("li");
//       this.nameLink ||= document.createElement("li");
//       this.nameLink.innerText = this.name;

//       this.start_time_li ||= document.createElement("li");
//       this.start_time_li.innerText = this.start_time;

//       this.end_time_li ||= document.createElement("li");
//       this.end_time_li.innerText = this.end_time;

//       this.notes_li ||= document.createElement("li");
//       this.notes_li.innerText = this.notes;
//       this.element.style.color = "blue";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     } else if (
//       (document.getElementById("calendars")[2].innerHTML = "Private")
//     ) {
//       this.element ||= document.createElement("li");
//       this.nameLink ||= document.createElement("li");
//       this.nameLink.innerText = this.name;

//       this.start_time_li ||= document.createElement("li");
//       this.start_time_li.innerText = this.start_time;

//       this.end_time_li ||= document.createElement("li");
//       this.end_time_li.innerText = this.end_time;

//       this.notes_li ||= document.createElement("li");
//       this.notes_li.innerText = this.notes;
//       this.element.style.color = "green";
//       this.element.append(
//         this.nameLink,
//         this.notes_li,
//         this.start_time_li,
//         this.end_time_li
//       );
//       return this.element;
//     }
//   }
// }

// render() {   OLD CODE FOR PENCIL AND TRASH IMPLEMENTATION
//     this.element ||= document.createElement('li');
//     this.element.classList.set(`my-2 px-4 bg-green-200 grid grid-cols-12 sm:grid-cols-6`);

//     this.nameLink ||= document.createElement('a');
//     this.nameLink.classList.set("py-4 col-span-10 sm:col-span-4 selectTodoList");
//     this.nameLink.textContent = this.name;
//     this.nameLink.dataset.todoListId = this.id;

//     this.editLink ||= document.createElement('a');
//     this.editLink.classList.set("my-4 text-right");
//     this.editLink.innerHTML = `<i class="fa fa-pencil-alt"></i>`;

//     this.deleteLink ||= document.createElement('a');
//     this.deleteLink.classList.set("my-4 text-right");
//     this.deleteLink.innerHTML = `<i class="deleteTodoList fa fa-trash-alt" data-todo-list-id="${this.id}"></i>`;

//     this.element.append(this.nameLink, this.editLink, this.deleteLink);

//     return this.element;
//   }
// }