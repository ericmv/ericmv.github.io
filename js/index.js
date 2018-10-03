
let sections = document.getElementsByClassName("section")
let projects = document.getElementsByClassName("project")
function inView (el) {
  var sb = section.getBoundingClientRect();
  var eb = el.getBoundingClientRect();
  return !((eb.top + eb.height < 0) || (eb.top > sb.height));
}
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    console.log(bounding.top, bounding.left, bounding.right, bounding.bottom)
    return (
        bounding.top + window.scrollY>= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function getScreenSize() {
  alert(window.innerWidth)
}

function isVisible (ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = (window.innerHeight || document.documentElement.clientHeight);

  return (
    (top > 0 || bottom > 0) &&
    top < vHeight
  );
}
function updateInView() {

  for (let i = 0; i < sections.length; i++) {
    if (isVisible(sections[i])) sections[i].classList.add('inview')
  }
for (let i = 0; i < projects.length; i++) {
    if (isVisible(projects[i])) projects[i].classList.add('inview')
  }
}


updateInView();
