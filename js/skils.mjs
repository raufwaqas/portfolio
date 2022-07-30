let education = [
  {
    program: `Bachelor's In Multimedia`,
    institute: "Areena Multimedia",
  },
  {
    program: `Intermediate Degree in Computer Science`,
    institute: "Punjab college of information Technology",
  },
  {
    program: `Redovisning Kurs (BAS)`,
    institute: "Folkuniversitetet Malmö",
  },
];

// softwareSkill
let softwareSkills = [
  {
    title: `Adobe Photoshop`,
    level: "100",
    levelTo: "100",
  },
  {
    title: `Adobe Illustrator`,
    level: "100",
    levelTo: "100",
  },
  {
    title: `Adobe Indesign`,
    level: "100",
    levelTo: "95",
  },
  {
    title: `Adobe XD`,
    level: "100",
    levelTo: "75",
  },
  {
    title: `CorelDraw`,
    level: "100",
    levelTo: "100",
  },
  {
    title: `Adobe Premiere`,
    level: "100",
    levelTo: "60",
  },
  {
    title: `Affinity Designer & Publisher`,
    level: "100",
    levelTo: "70",
  },
];

// developer Skills
let developerSkills = [
  {
    title: `HTML`,
    level: "100",
    levelTo: "80",
  },
  {
    title: `CSS`,
    level: "100",
    levelTo: "75",
  },
  {
    title: `JS`,
    level: "100",
    levelTo: "30",
  },
  {
    title: `Wordpress`,
    level: "100",
    levelTo: "80",
  },
  {
    title: `Prestashop`,
    level: "100",
    levelTo: "60",
  },
];

let acdamicBackground = document.querySelector(".education");

// Education background
let edu = (data) => {
  let { program, institute } = data;
  return `
  <ul>
  <h3>${program}</h3>
  <li>
  <h6>${institute}</h6>
  </li></ul>
  `;
};

acdamicBackground.innerHTML = education
  .map((item) => {
    return edu(item);
  })
  .join("");

// Software Skills
let softskill = document.querySelector(".softwareSkills");
let progr = (data) => {
  let { title, level, levelTo } = data;
  return `
    <ul>
    <ul>
    <li>
      <h3>${title}</h3>
      <progress max="${level}" value="${levelTo}"></progress>
    </li>
    </li></ul>
    `;
};
softskill.innerHTML = softwareSkills
  .map((item) => {
    return progr(item);
  })
  .join("");

// Developer Skills

let devskill = document.querySelector(".developerSkills");
let dev = (data) => {
  let { title, level, levelTo } = data;
  return `
    <ul>
    <ul>
    <li>
      <h3>${title}</h3>
      <progress max="${level}" value="${levelTo}"></progress>
    </li>
    </li></ul>
    `;
};
devskill.innerHTML = developerSkills
  .map((item) => {
    return dev(item);
  })
  .join("");
