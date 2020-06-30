AOS.init({
  easing: "ease-in-quad",
});

var showNav = function () {
  var nav = document.querySelector(".navlinks");
  nav.classList.toggle("nav-active");
  var burgerIcon = document.querySelector("#burger-icon");
  burgerIcon.classList.toggle("fa-bars");
  burgerIcon.classList.toggle("fa-times");
};

var companies = ["syscloud", "iota", "cloudlogic"];
var contribution = {
  syscloud: {
    roles: [
      "Responsibe for the conversion of many pages written in jquery to angularjs for better performance and user experience",
      "Optimised the pages by reducing the api calls and thereby load data even faster",
      "Developed multiple components so that they can be reused thereby reducing inducing reuse of code",
    ],
    heading: "Frontend developer @ Syscloud (Jan 2020 - Present)",
  },
  iota: {
    roles: [
      "Worked on IOT related projects",
      "Mentoring the juniors for project with web technologies and designing",
      "Participated in hackathons and managed workshops",
    ],
    heading: "Full Stack @ IOT Alliance (Jan 2019 - June 2020)",
  },
  cloudlogic: {
    roles: [
      "Created templates for user feedback forms",
      "Learnt javascript DOM manipulations",
    ],
    heading: "Intern  @ Cloud Logic Technologies (Dec 2018 - Dec 2018)",
  },
};
var experience = function (company) {
  let company_info = contribution[company];
  var contributions = "";
  company_info.roles.forEach((contribution) => {
    contributions = contributions + "<li> " + contribution + " </li>";
  });
  companies.forEach((cmp) => {
    if (cmp === company) {
      document.getElementById(cmp).classList.add("company-indicator");
    } else {
      document.getElementById(cmp).classList.remove("company-indicator");
    }
  });
  var contributionContainer = document.querySelector("#contribution");
  contributionContainer.classList.add("pre-animation");
  setTimeout(function () {
    contributionContainer.classList.remove("pre-animation");
    contributionContainer.innerHTML =
      "<h3>" +
      company_info.heading +
      "</h3>" +
      '<ul id="experiences">' +
      contributions +
      "</ul>";
  }, 500);
};
var shiftWindow = function () {
  scrollBy({
    top: -50, // negative value acceptable
    left: 0,
    behavior: "smooth",
  });
  showNav();
};

if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
