chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const newUrl = "https://yourdomain.com/custom-curriculum.html"; // Change this to your custom page
    return { redirectUrl: newUrl };
  },
  {
    urls: [
      "https://fenix.tecnico.ulisboa.pt/student/viewStudentCurriculum.do*"
    ],
    types: ["main_frame"]
  },
  ["blocking"]
);
