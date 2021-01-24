class Calendar {
  constructor(attributes) {
    let whiteList = ["id", "title"];
    whiteList.forEach((attr) => (this[attr] = attributes[attr]));
  }

  static container() {
    return (this.c ||= document.querySelector("#calendars"));
  }

  static all() {
    return fetch("http://localhost:3000/calendars", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((error) => Promise.reject(error));
        }
      })
      .then((calendarArray) => {
        this.collection = calendarArray.map((attrs) => new Calendar(attrs));
        let renderedCalendars = this.collection.map((calendar) =>
          calendar.render()
        );
        this.container().append(...renderedCalendars);
        return this.collection;
      });
  }
  static findWithId(id) {
    return this.collection.find((calendar) => calendar.id == id);
  }

  show() {
    return fetch(`http://localhost:3000/calendars/${this.id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((error) => Promise.reject(error));
        }
      })
      .then(({ id, eventAttributes }) => {
        Event.loadByList(id, eventAttributes);
      });
  }

  render() {
    this.element ||= document.createElement("option");
    this.element.value = this.id;
    this.element.textContent = this.title;

    return this.element;
  }
}

class Event {
  constructor(attributes) {
    let allowed = [
      "id",
      "name",
      "start_time",
      "end_time",
      "notes",
      "calendar_title",
    ];
    allowed.forEach((attr) => (this[attr] = attributes[attr]));
  }

  static container() {
    return (this.c ||= document.querySelector("#events"));
  }

  static create(formData) {
    return fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ event: formData }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((errors) => Promise.reject(errors));
        }
      })
      .then((json) => {
        let event = new Event(json);
        this.container().appendChild(event.render());
        new FlashMessage({
          type: "success",
          message: "New Event Added",
        });
        return event;
      })
      .catch((error) => {
        new FlashMessage({
          type: "error",
          message: error,
        });
      });
  }

  static all() {
    return fetch("http://localhost:3000/events", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.text().then((error) => Promise.reject(error));
        }
      })
      .then((events) => {
        this.collection = events.map((event) => new Event(event));
        let renderedEvents = this.collection.map((event) => event.render());

        this.container().append(...renderedEvents);
        return this.collection;
      });
  }

  static findById(id) {
    return this.collection.find((event) => event.id == id);
  }

  delete() {
    fetch(`http://localhost:3000/events/${this.id}`, {
      method: "DELETE",
    }).then(() => {
      let index = Event.collection.findIndex((event) => event.id == this.id);
      Event.collection.splice(index, 1);
      this.element.remove();
    });
  }

  render() {
    this.element ||= document.createElement("div");

    this.nameLink ||= document.createElement("li");
    this.nameLink.innerText = this.name;
    this.nameLink.style.fontWeight = "bold";

    this.deleteLink ||= document.createElement("a");
    this.deleteLink.innerHTML = ` <i class="far fa-trash-alt p-1 deleteEvent" data-event-id="${this.id}"></i>`;

    this.nameLink.append(this.deleteLink);

    this.start_time_li ||= document.createElement("li");
    this.start_time_li.innerText =
      new Date(this.start_time).toDateString() +
      " at " +
      new Date(this.start_time).toLocaleTimeString();

    this.end_time_li ||= document.createElement("li");
    this.end_time_li.innerText =
      new Date(this.end_time).toDateString() +
      " at " +
      new Date(this.end_time).toLocaleTimeString();

    this.notes_li ||= document.createElement("li");
    this.notes_li.innerText = this.notes;

    if (this.calendar_title === "Personal") {
      this.element.style.color = "red";
    } else if (this.calendar_title === "Work") {
      this.element.style.color = "blue";
    } else {
      this.element.style.color = "black";
    }

    let newEvent = document.createElement("ul");
    newEvent.style.border = "1px solid blue";
    newEvent.classList.add("p-2");
    newEvent.append(
      this.nameLink,
      this.notes_li,
      this.start_time_li,
      this.end_time_li
    );

    this.element.append(newEvent);

    return this.element;
  }
}

class FlashMessage {
  constructor({ type, message }) {
    this.message = message;
    this.color = type == "error" ? "big-red-200" : "bg-blue-100";
    this.render();
  }
  static container() {
    return (this.c ||= document.querySelector("#flash"));
  }

  render() {
    this.toggleMessage();
    window.setTimeout(() => this.toggleMessage(), 5000);
  }

  toggleMessage() {
    FlashMessage.container().textContent = this.message;
    FlashMessage.container().classList.toggle(this.color);
    FlashMessage.container().classList.toggle("opacity-0");
  }
}
