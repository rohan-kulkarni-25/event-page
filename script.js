const updateCountersagain = () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // The lower the slower
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const inc = Math.ceil(target / speed);
      if (count < target) {
        counter.innerText = count + inc;
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const updateUpcoming = (event, index) => {
  document.getElementById("upcoming-div").innerHTML = "";

  const divUpcoming = document.createElement("div");
  divUpcoming.id = "upid";
  divUpcoming.dataset.current = index;
  divUpcoming.classList =
    "h-fit bg-white min-w-fit shadow-gravel-500 shadow-lg justify-evenly  rounded-2xl flex p-8 gap-8 relative items-center lg:flex-col md:p-2 md:gap-2";
  const innerHtmlELe = `<img src='${event.img}' class="h-80 w-80 rounded-2xl rounded-bl-2xl xl:h-64 lg:h-56 md:h-40" alt="">
  <div class="w-fit min-w-3/5 p-4 flex flex-col justify-around xl:gap-2 md:gap-1 gap-4">
    <div class="flex gap-4 text-xl text-gravel-500 font-semibold xl:text-base md:text-xs">
      <p>${event.date}</p>
      <p>${event.time}</p>
    </div>
    <p class="text-4xl text-ebony-500 max-w-192 min-w-fit xl:text-3xl md:text-lg font-semibold ">${event.title}</p>
    <p class="text-black text-xl xl:text-base md:text-xs uppercase">SPEAKER : ${event.speaker}</p>
    <p class=" text-base text-gravel-500 max-w-160 min-w-2/4 xl:text-sm md:text-xs">${event.description}</p>
    <div class="flex gap-4">
      <p class="text-ebony-500 text-lg bg-blue-400 p-4 rounded-2xl cursor-pointer xl:text-base md:text-xs uppercase">${event.platform}</p>
      <p class=" text-ebony-500  text-lg  bg-purple-400 p-4 rounded-2xl cursor-pointer xl:text-base md:text-xs">${event.duration} mins
      </p>
    </div>
  </div>
  <p
    class="absolute right-2 bottom-2 p-2 rounded-3xl w-48 text-center text-xl font-semibold  cursor-pointer text-ebony-500 bg-screamin-green-400 hover:bg-cornflower-purple-400 hover:duration-500 hover:scale-105 flex justify-evenly items-center ;xl:w-40 xl:text-lg md:text-xs md:relative">
    <img src="./assets/icons/register.svg" class="h-6 xl:h-5" alt="" srcset=""><a href="${event.link}" class="uppercase">REGISTER</a>
  </p>
  <p
    class="absolute right-2 top-2 text-pampas-500 bg-ebony-500 p-2 rounded-3xl w-48 text-center text-xl font-semibold xl:text-lg xl:w-40 md:text-xs md:w-24 uppercase">
    ${event.type}</p>`;
  divUpcoming.innerHTML = innerHtmlELe;
  document.getElementById("upcoming-div").append(divUpcoming);
};

let jsonData;
const fetchJson = async () => {
  const data = await fetch("./data.json")
    .then((data) => data.json())
    .then((data) => {
      const topics = data.topics;
      topics.forEach((ele) => {
        const p = document.createElement("p");
        p.classList =
          "bg-screamin-green-400 pt-4 pb-4 p-8 rounded-2xl shadow-blue-400 shadow-sm border-2 border-purple-300 font-semibold text-3xl hover:scale-105 hover:duration-500 xl:text-2xl xl:p-6 xl:pb-2 xl:pt-2 flex items-center md:text-lg";
        p.innerText = ele;
        document.getElementById("topics-div").append(p);
      });

      // UPCOMING EVENTS
      const upcoming = data.upcomingEvents;
      updateUpcoming(upcoming[0], 0);

      // UPDATING COUNTERS
      const counterUpcoming = upcoming.length;
      const counters = document.querySelectorAll(".counter");
      counters[0].dataset.target = counterUpcoming;
      updateCountersagain();
    });
};
fetchJson();

const viewdetails = (e) => {
  let card = e.target.parentElement.children[1];
  if (card.classList.contains("hidden")) {
    e.target.innerText = "HIDE DETAILS";
  } else {
    e.target.innerText = "VIEW DETAILS";
  }
  card.classList.toggle("hidden");
};

const value = +document.getElementById("upcount").textContent;
for (let index = 0; index <= value; index++) {
  document.getElementById("upcount").textContent = index;
}

const fetchDB = async () => {
  const data = await fetch("https://event-page-rohan.herokuapp.com/update")
    .then((data) => data.json())
    .then((data) => {
      const completed = data.allevents;
      console.log(completed);
      completed.reverse();
      completed.forEach((event) => {
        const completedDiv = document.createElement("div");
        completedDiv.classList =
          "h-fit bg-white min-w-fit shadow-gravel-500 shadow-lg justify-evenly  rounded-2xl flex p-8 gap-8 relative items-center lg:flex-col md:p-2 md:gap-2";
        const innerHTMLEle = `<img src='${event.img}' class="h-80 rounded-2xl rounded-bl-2xl xl:h-64 lg:h-56 md:h-40" alt="">
    <div class="w-fit min-w-3/5 p-4 flex flex-col justify-around xl:gap-2 md:gap-1 hidden gap-4">
      <div class="flex gap-4 text-xl text-gravel-500 font-semibold xl:text-base md:text-xs">
        <p class="uppercase">${event.date}</p>
        <p class="uppercase">${event.time}</p>
      </div>
      <p class="text-4xl text-ebony-500 max-w-192 min-w-fit xl:text-3xl md:text-lg font-semibold ">${event.title}</p>
      <p class="text-black text-xl xl:text-base md:text-xs uppercase">SPEAKER : ${event.speaker}</p>
      <p class=" text-base text-gravel-500 max-w-160 min-w-2/4 xl:text-sm md:text-xs">${event.description}</p>
      <div class="flex gap-4">
        <p class="text-ebony-500 text-lg bg-blue-400 p-4 rounded-2xl cursor-pointer xl:text-base md:text-xs flex items-center uppercase">${event.platform}</p>
        <p class="text-ebony-500 font-semibold bg-purple-400 p-4 rounded-2xl cursor-pointer xl:text-base md:text-xs flex items-center">${event.audience}+ learners</p>
        <p class=" text-ebony-500  text-lg  bg-purple-400 p-4 rounded-2xl cursor-pointer xl:text-base md:text-xs flex items-center">${event.duration} mins</p>
      </div>
    </div>
    <button class="vdbtn text-xl self-center rounded-2xl text-pampas-500 font-semibold bg-blue-600 p-4 h-fit xl:text-lg md:text-sm md:p-2"
    onclick="viewdetails(event)">VIEW DETAILS</button>
    <p
    class="absolute right-2 top-2 text-pampas-500 bg-ebony-500 p-2 rounded-3xl w-48 text-center text-xl font-semibold xl:text-lg xl:w-40 md:text-xs md:w-24 uppercase">
    ${event.type}</p>`;
        completedDiv.innerHTML = innerHTMLEle;
        document.getElementById("complete-div").append(completedDiv);
      });
      const counterCompleted = completed.length;
      const audience = () => {
        let audience = 0;
        completed.forEach((event) => {
          audience += +event.audience;
        });
        return audience;
      };
      const counterAudience = audience();
      const duration = () => {
        let duration = 0;
        completed.forEach((event) => {
          duration += +event.duration;
        });
        return duration;
      };
      const counterDuration = duration();
      const counters = document.querySelectorAll(".counter");
      counters[1].dataset.target = counterCompleted;
      counters[2].dataset.target = counterAudience;
      counters[3].dataset.target = counterDuration;
      updateCountersagain();
    });
};

fetchDB();
