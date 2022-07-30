let experience = [
  {
    title: `Graphic & Front-End Web Designer`,
    employment: `Starmedia, Malmö, Sweden`,
    year: "2019 - Current",
    detail: `Delivering impactful results by providing innovative website development services and print and digital media content, including logos, menus, flyers, social media materials, while partnering with clients to define project requirements, scopes, and project milestones.

    Enhancing online service quality by overseeing site development, implementing SEO tactics, and handling maintenance to ensure consistency and usability across client branding.

    Improving digital media offerings by utilizing industry software, including Adobe Photoshop, Aftereffects, and Illustrator, to produce engaging new imagery.`,
  },
  {
    title: `Graphic Designer`,
    employment: `Ambrosia Group ApS, Denmark`,
    year: "2018 - 2019",
    detail: `Exceeded branding goals and KPIs by developing display, marketing, and packaging materials and designing a wide range of concepts, graphics, and layouts for product illustrations, brand packages, campaigns, and websites, while ensuring brand consistency in all materials.

    Collaborated with management to further develop the company’s brand identity and ensure all graphics and layouts are aesthetically appealing and adhere to quality standards.

    Strengthened clients’ brand presence and market positioning by designing promotional material and creating digital content, monthly campaigns, landing page layouts, and website banners.
      `,
  },
  {
    title: `Graphic & Front-End Web Designer`,
    employment: `Al Kazaz Media AB, Malmö, Sweden`,
    year: "2018 - 2019",
    detail: `Maximized client satisfaction and retention by utilizing exceptional communication and interpersonal skills to work closely with clients and understand project requirements and overseeing print material design and timely project completion and delivery.

    Enhanced company growth and capabilities by identifying industry trends, researching new and innovative designing processes, and recommending new field developments for projects.
      `,
  },
];

let additionalExperience = [
  {
    title: `Graphic & Front-end web designer`,
    year: "Atiaza AB | 2014 – 2015",
  },
  {
    title: `Graphic Designer`,
    year: "Städlingen AB | 2010 – 2012",
  },
  {
    title: `Designer & Developer`,
    year: "Punjab Food Industry Sweden AB Malmö, Sweden | 2009 – 2010",
  },
  {
    title: `Content Designer`,
    year: "Institution of Engineer Pakistan (IEP), Pakistan | 2008 – 2010",
  },
];

let aboutSection = document.querySelector(".experience");
let extra = document.querySelector(".additionalExp");

let experienceData = (data) => {
  let { title, employment, year, detail } = data;
  return `
  <div class="detail-section">
  <h1>${title}</h1>
  <h5>${employment}</h5>
  <h6>${year}</h6><br />
  <p>${detail}
  </div>`;
};

aboutSection.innerHTML = experience
  .map((item) => {
    return experienceData(item);
  })
  .join("");

let addExperienceData = (data) => {
  let { title, year } = data;
  return `
    <ul>
      <li>
        <h3>${title}</h3>
        <h6>${year}</h6>
      </li>
      </ul>
    `;
};

extra.innerHTML = additionalExperience
  .map((item) => {
    return addExperienceData(item);
  })
  .join("");
