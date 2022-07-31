function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

// let fetchData = async () => {
//   return await fetch()
//     .then((res) => res.json())
//     .then((res) => {
//       let brandName = document.getElementById("brand-name");
//       // brandName.innerHTML
//     })
//     .catch((err) => console.log(err));
// };
