let portfolioData = [
  {
    image: "taxi97-ads.png",
    text: "TAXI 23 Socialmedia Compaign",
  },
  { image: "offert.png", text: "Product Catalog" },
  { image: "fotografi.png", text: "Product Photography" },
  { image: "meny.png", text: "Restaurant menu" },
  { image: "hemsida.png", text: "Websites" },
  { image: "logo.png", text: "Logo" },
];

let portfolioGrid = document.querySelector(".portfolio-grid");

let portfoliotemplate = (data) => {
  let { image, text } = data;
  return `
  <a href="#" class="portfolio-item">
    <div class="portfolio_section_box-1">
      <p class="box-content-1">${text}</p>
      <img style="width:100%; height:auto" src="/img/${image}" alt="">
    </div>
  </a>
`;
};

portfolioGrid.innerHTML = portfolioData.map((item) => {
  return portfoliotemplate(item);
});
