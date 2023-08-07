function showContent(idName) {
    let numberOfSection;
    let elementArray = document.querySelectorAll(".main-2");
    console.log(elementArray);
    for (let i = 1; i <= elementArray.length; i++) {
      document.getElementById(`opt-${i}`).classList?.remove("showContent");
      document
        .getElementsByClassName(`sectionOpt-${i}`)[0]
        .classList?.remove("changeSectionStyle");
      document.getElementById(`pair-${i}`).removeAttribute("checked");
      if (idName.includes(i)) {
        numberOfSection = i;
      }
    }
    document.getElementById(idName).classList.add("showContent");
    document
      .getElementsByClassName(`sectionOpt-${numberOfSection}`)[0]
      .classList.add("changeSectionStyle");
    document.getElementById(`pair-${numberOfSection}`).checked = true;
  }
  