let courses = coursesDB;

function getProgress() {
  return JSON.parse(localStorage.getItem("coursesProgress")) || {};
}

function saveProgress(progress) {
  localStorage.setItem("coursesProgress", JSON.stringify(progress));
}

function getCourseById(id) {
  return coursesDB.find((course) => course.id === id);
}

function getQueryParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

function renderCourses(courses) {
  const container = document.getElementById("courses-container");
  const numOfCourses = document.getElementById("num-of-courses");

  if (!container) return;

  if (numOfCourses) {
    numOfCourses.textContent = courses.length;
  }

  container.innerHTML = courses
    .map(
      (course) => `
      <div class="bg-white border border-[#E5E7EB] rounded-[16px] shadow-sm p-6">
        <div class="flex items-center justify-between mb-4">
          <span class="bg-[#DBEAFE] text-[#1447E6] text-sm px-3 py-1 rounded-full">
            ${course.faculty}
          </span>
        </div>

        <h3 class="text-[20px] leading-[28px] text-[#101828] font-semibold mb-3">
          ${course.title}
        </h3>

        <p class="text-[#4A5565] text-[15px] leading-[24px] mb-4">
          ${course.description}
        </p>

        <div class="text-[#4A5565] text-sm mb-5">
          <p class="mb-1">${course.level}</p>
          <p>${course.semester}</p>
        </div>

        <a
          href="lessons.html?id=${course.id}"
          class="block text-center bg-gradient-to-b from-[#155DFC] to-[#4F39F6] text-white py-3 rounded-[14px]"
        >
          عرض الكورس
        </a>
      </div>
    `,
    )
    .join("");
}

function filterCourses() {
  const levelFilter = document.getElementById("level-filter");
  const semesterFilter = document.getElementById("semester-filter");

  let filteredCourses = [...coursesDB];

  if (levelFilter && levelFilter.value !== "جميع المستويات") {
    filteredCourses = filteredCourses.filter(
      (course) => course.level === levelFilter.value,
    );
  }

  if (semesterFilter && semesterFilter.value !== "جميع الفصول") {
    filteredCourses = filteredCourses.filter(
      (course) => course.semester === semesterFilter.value,
    );
  }

  renderCourses(filteredCourses);
}

function updateProgressUI(course) {
  const progress = getProgress();
  const completedLectures = progress[course.id] || [];
  const totalLectures = course.lectures.length;
  const completedCount = completedLectures.length;
  const percent =
    totalLectures === 0
      ? 0
      : Math.round((completedCount / totalLectures) * 100);

  const progressCounter = document.getElementById("progress-counter");
  const progressPercentage = document.getElementById("progress-percentage");
  const progressLine = document.getElementById("progress-line");

  if (progressCounter) {
    progressCounter.textContent = `${completedCount} / ${totalLectures} درس`;
  }

  if (progressPercentage) {
    progressPercentage.textContent = `${percent}% مكتمل`;
  }

  if (progressLine) {
    progressLine.style.width = `${percent}%`;
  }
}

function toggleLectureComplete(courseId, lectureId) {
  const progress = getProgress();

  if (!progress[courseId]) {
    progress[courseId] = [];
  }

  if (progress[courseId].includes(lectureId)) {
    progress[courseId] = progress[courseId].filter((id) => id !== lectureId);
  } else {
    progress[courseId].push(lectureId);
  }

  saveProgress(progress);

  const course = getCourseById(courseId);
  renderLectures(course);
  updateProgressUI(course);
}

function renderLectures(course) {
  const lecturesContainer = document.getElementById("lectures-container");
  if (!lecturesContainer) return;

  const progress = getProgress();
  const completedLectures = progress[course.id] || [];

  lecturesContainer.innerHTML = course.lectures
    .map((lecture, index) => {
      const isCompleted = completedLectures.includes(lecture.id);

      return `
        <div class="w-full rounded-[14px] bg-[#F9FAFB] border-2 ${
          isCompleted ? "border-[#155DFC]" : "border-[#E5E7EB]"
        } flex flex-row justify-between items-center p-5 mb-4">
          
          <div class="flex flex-row items-center">
            <div class="w-[36px] h-[36px] rounded-full ${
              isCompleted ? "bg-[#155DFC]" : "bg-[#D1D5DC]"
            } text-white flex items-center justify-center ml-4">
              ${index + 1}
            </div>

            <div>
              <p class="text-[#101828] text-[16px] font-medium">${lecture.title}</p>
              <p class="text-[#4A5565] text-[14px] mt-1">${lecture.description}</p>
            </div>
          </div>

          <div class="flex gap-3">
           
            <button  class="bg-gradient-to-b from-[#155DFC] to-[#4F39F6] text-white px-4 py-2 rounded-[12px]" onclick="playVideo('${lecture.videoURL}')">
  مشاهدة
</button>


            <button
              class="border px-4 py-2 rounded-[12px] ${
                isCompleted
                  ? "bg-[#155DFC] text-white border-[#155DFC]"
                  : "bg-white text-[#101828] border-[#D1D5DC]"
              }"
              onclick="toggleLectureComplete('${course.id}', '${lecture.id}')"
            >
              ${isCompleted ? "مكتمل" : "تحديد كمكتمل"}
            </button>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderCourseDetails() {
  const courseId = getQueryParam("id");
  const course = getCourseById(courseId);

  if (!course) return;

  const title = document.getElementById("dynamic-course-title");
  const desc = document.getElementById("dynamic-course-desc");
  const level = document.getElementById("dynamic-course-level");
  const semester = document.getElementById("dynamic-course-semester");
  const faculty = document.getElementById("dynamic-course-faculty");

  if (title) title.textContent = course.title;
  if (desc) desc.textContent = course.description;
  if (level) level.textContent = course.level;
  if (semester) semester.textContent = course.semester;
  if (faculty) faculty.textContent = course.faculty;

  renderLectures(course);
  updateProgressUI(course);
}

document.addEventListener("DOMContentLoaded", () => {
  const coursesContainer = document.getElementById("courses-container");
  const lecturesContainer = document.getElementById("lectures-container");

  if (coursesContainer) {
    renderCourses(coursesDB);

    const levelFilter = document.getElementById("level-filter");
    const semesterFilter = document.getElementById("semester-filter");

    if (levelFilter) levelFilter.addEventListener("change", filterCourses);
    if (semesterFilter)
      semesterFilter.addEventListener("change", filterCourses);
  }

  if (lecturesContainer) {
    renderCourseDetails();
  }
});


function getYouTubeID(url) {
  const regex =
    /(?:youtube\.com\/(?:.*v=|.*\/)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

function playVideo(url) {
  const videoContainer = document.getElementById("video-player");
  const videoId = getYouTubeID(url);

  if (!videoId) {
    alert("رابط غير صالح");
    return;
  }

  videoContainer.innerHTML = `
    <iframe
      width="100%"
      height="400"
      src="https://www.youtube.com/embed/${videoId}"
      frameborder="0"
      allowfullscreen
      class="rounded-2xl"
    ></iframe>
  `;
}

videoContainer.scrollIntoView({ behavior: "smooth" });

videoContainer.innerHTML = "";