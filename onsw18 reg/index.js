var price = 1000;
var tshirtPrice = 1300;
var estafetaPrice = 2000;


// women & man tshirt
function changeTshirtToWomens(divRadioID, divTshirtID) {
  var tshirtURLs = document.getElementById(divTshirtID).getElementsByTagName("a");
  var tshirtPic = document.getElementById(divTshirtID).getElementsByTagName("img");
  tshirtPic[0].src = "https://static.wixstatic.com/media/bad037_e47594f0a5244a82948ab47912745097~mv2.png?dn=W_print_grey_small.png";
  tshirtURLs[0].href = "https://static.wixstatic.com/media/bad037_6b53949a7d364ed485ab85e5d97fab14~mv2.png?dn=W_print_grey.png";
  tshirtURLs[1].href = "https://static.wixstatic.com/media/bad037_d5ce9737fab74ecda0aa6d08569339ad~mv2.jpg?dn=sizeChartF.jpg"; //sizechart

  var radioM = document.getElementById(divRadioID).getElementsByTagName("label")[0];
  var radioF = document.getElementById(divRadioID).getElementsByTagName("label")[1];
  radioF.style = "color: #212529;";
  radioM.removeAttribute("style", "color: #212529;");
  radioM.style = "color: #6c757d;";
  
  
  var optionsList = document.getElementById(divTshirtID).getElementsByTagName("option");
  if (optionsList[1].value != "XS") {
    var opt = document.createElement("option");
    opt.value = "XS";
    opt.innerHTML = "XS";
     optionsList[1].parentNode.insertBefore(opt, optionsList[1]); 
  }
  if (optionsList[optionsList.length - 1].value == "XL") {
    optionsList[optionsList.length - 1].remove();
  }
  
  
  var textGSM = document.getElementById(divTshirtID).getElementsByTagName("span")[1];
  textGSM.innerHTML = "155";
}

function changeTshirtToMens(divRadioID, divTshirtID) {
  var tshirtURLs = document.getElementById(divTshirtID).getElementsByTagName("a");
  var tshirtPic = document.getElementById(divTshirtID).getElementsByTagName("img");
  tshirtPic[0].src =
"https://static.wixstatic.com/media/bad037_9a8c04db49f943b6a92000d0ef67e95e~mv2.png?dn=M_print_grey_small.png";
  tshirtURLs[0].href =
"https://static.wixstatic.com/media/bad037_3c5ff974fbcd4051aae17fad76e9f4d6~mv2.png?dn=M_print_grey.png";
  tshirtURLs[1].href = "https://static.wixstatic.com/media/bad037_291e071901474f82ae060dfd21e0e662~mv2.jpg?dn=sizeChartM.jpg"; //sizechart
  
  var radioM = document.getElementById(divRadioID).getElementsByTagName("label")[0];
  var radioF = document.getElementById(divRadioID).getElementsByTagName("label")[1];
  radioM.style = "color: #212529;";
  radioF.removeAttribute("style", "color: #212529;");
  radioF.style = "color: #6c757d;";
  
  var optionsList = document.getElementById(divTshirtID).getElementsByTagName("option");
  if (optionsList[1].value === "XS") {
    optionsList[1].remove();
  }
  if (optionsList[optionsList.length - 1].value != "XL") {
    var opt = document.createElement("option");
    opt.value = "XL";
    opt.innerHTML = "XL";
    optionsList[optionsList.length - 1].parentNode.insertBefore(opt, optionsList[optionsList.length - 1].nextSibling);
  }
  
  var textGSM = document.getElementById(divTshirtID).getElementsByTagName("span")[1];
  textGSM.innerHTML = "150";
}

// select color
function changeSelectColor(selectRowID) {
  var select = document.getElementById(selectRowID).getElementsByTagName("select")[0];
  if (select.value !== "") {
    select.style = "color: #212529!important"; //black
  } else {
    select.removeAttribute("style", "color: #212529!important;");
  }
}

// checkbox color
function changeCheckboxColor(checkboxrowID) {
  var checkbox = document.getElementById(checkboxrowID).getElementsByTagName("input")[0];
  var label = document.getElementById(checkboxrowID).getElementsByTagName("label")[0];
  if (checkbox.checked) {
    label.style = "color: #212529;";
  } else {
    label.removeAttribute("style", "color: #212529;");
  } 
}

// fancybox options
$("[data-fancybox]").fancybox({
  toolbar: "auto",
  buttons: [
    // "zoom",
    //"share",
    //"slideShow",
    //"fullScreen",
    //"download",
    // "thumbs",
    "close"
  ],
  protect: true, // right-click mouse download doesnt work
  // transitionEffect: "rotate",
  image: {
    // Wait for images to load before displaying
    //   true  - wait for image to load and then display;
    //   false - display thumbnail and load the full-sized image over top,
    //   requires predefined image dimensions (`data-width` and `data-height` attributes)
    preload: true,
  },

  animationEffect: "zoom-in-out",
  // animationEffect: "fade",

  mobile: {
    animationEffect: "zoom-in-out",
    touch: false, // чтобы убрать закрывающий скроллинг на ios
    // clickContent: "close",
    dblclickContent: false, // remove zoom
    smallBtn: true, // small close button
  },
  clickContent: "close", // закрывает по клику
});

// show Tshirt div after clicked Tshirt Checkbox
function showTshirt(divTshirtRowID) {
  var sum = document.getElementById("sum");
  var tshirtRow = document.getElementById(divTshirtRowID);
  var sizeChoice = document.getElementById(divTshirtRowID).getElementsByTagName("select")[0];
  if (tshirtRow.classList.contains("d-none")) {
    tshirtRow.classList.remove("d-none");
    sizeChoice.setAttribute("required", true);
    sum.value = parseInt(sum.value) + tshirtPrice;
  } else {
    tshirtRow.classList.add("d-none");
    sizeChoice.removeAttribute("required");
    sum.value = parseInt(sum.value) - tshirtPrice;
  }
}


function removeRequiredAttr() {
  var list = $("#estafetaDiv input[required], #estafetaDiv select[required]");
  for (i = 0; i < list.length; i++) {
    list[i].removeAttribute("required");
    list[i].classList.add("required");
  }
}

function returnRequireAttr() {
  var list = $("#estafetaDiv .required");
  for (i = 0; i < list.length; i++) {
    list[i].setAttribute("required", true);
    list[i].classList.remove("required");
  }
}


function estafeta() {
  
  var estafetaDiv = document.getElementById("estafetaDiv");
  estafetaDiv.classList.remove("d-none");
  
  var labelsForChoice = document.getElementsByName("labelForChoice");
  labelsForChoice[0].classList.remove("active");
  labelsForChoice[1].classList.add("active");
  
  var span = document.getElementById("conditionsRow").getElementsByTagName("span")[0];
  span.innerText = "ы";
  
  var sum = document.getElementById("sum");
  sum.value = sum.value - price + estafetaPrice;
  returnRequireAttr();
  
  
}

function personal() {
  var estafetaDiv = document.getElementById("estafetaDiv");
  estafetaDiv.classList.add("d-none");
  
  var labelsForChoice = document.getElementsByName("labelForChoice");
  labelsForChoice[1].classList.remove("active");
  labelsForChoice[0].classList.add("active");
  
  var span = document.getElementById("conditionsRow").getElementsByTagName("span")[0];
  span.innerText = "";
  
  var sum = document.getElementById("sum");
  sum.value = sum.value - estafetaPrice + price;
  document.querySelectorAll("#estafetaDiv input[required], #estafetaDiv select[required]");
  removeRequiredAttr();
  
  var checkbox2ndTshirt = document.getElementById("tshirtCheckboxRow2").getElementsByTagName("input")[0];
  if (checkbox2ndTshirt.checked) {
      checkbox2ndTshirt.click();
  }
  
}


function createLabel(){
  var email = document.getElementById("email");
  var label = document.getElementById("labelId");
  label.value = "ONSW18_" + email.value;
  //console.log(label.value);
}


function addMeta() {
  var meta = document.createElement("meta");
  meta.id = "metaZoom";
  meta.name = "viewport";
  meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
  document.head.appendChild(meta);
}


function removeBodyOverflow() {
  var body = document.body;
  if (body.style.getPropertyValue("overflow") !== "") {
    body.style.removeProperty("overflow");  
  }
  var metaZoom = document.getElementById("metaZoom");
  if (metaZoom) {
    metaZoom.remove();  
  }
  $.fancybox.close();
}

function bodyOverflow(){
  var body = document.body;
  var x = document.getElementsByClassName("fancybox-spaceball")[0];
  if (x !== undefined) {
    addMeta();
    body.style.overflow = "hidden";  
    x.setAttribute("onclick", "removeBodyOverflow()");
    //console.log("hey");
  }
  
  
  
}





// <meta 
     // name='viewport' 
     // content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'/>

// не забыть удалить
// var elems = document.querySelectorAll("input");
// elems.forEach(function deleteAttrib(item, index) {
//                 item.removeAttribute("required");
//               });


$(document).ready(function() {
  //jQuery
  // $(".birthday").inputmask();
  $(".birthday").inputmask({ showMaskOnHover: false });
  $("[name='phone']").inputmask({ showMaskOnHover: false });
  
  removeRequiredAttr(); // from estafetaDiv
  
  
  // document.querySelectorAll("#estafetaDiv input[required], #estafetaDiv select[required]");
  
  // $("#estafetaDiv input[required], #estafetaDiv select[required]").removeAttribute("required");
  // $(".border-dark").removeClass("border-dark");
  // $("input")[1].removeAttribute("required");
  // $("input")[2].removeAttribute("required");
  // $("input")[3].removeAttribute("required");
  // $(".col1").addClass("col-sm-auto");
  // $(".col2").addClass("col-sm-auto");
  // $(".col3").addClass("col-sm-auto");
  // $(".col1").addClass("col-sm");
  // $(".col").addClass("col-sm");
  // $(".col3").addClass("col-sm");
  // $(".col1").addClass("col");
  // $(".col2").addClass("col");
  // $(".col3").addClass("col");
  // $(".col1").addClass("col-sm-3");
  // $(".col2").addClass("col-sm-7");
  // $(".col3").addClass("col-sm-2");

  // $(".row").addClass("border");
  // $(".col1").addClass("border");
  // $(".col").addClass("border");
  // $("#sizeDiv").addClass("border");
  // $("#sizeChoice").addClass("border");
  // $(".col21").addClass("border");
  // $(".col22").addClass("border");
  // $(".col23").addClass("border");
  // $(".container").addClass("border");

  // $(".form-row").addClass("border");

  // $("h4").addClass("border");
  // $("label").addClass("border");

  // $("label").addClass("mr-0");
  // $(".col21").addClass("d-flex justify-content-end");
  // $(".col1").addClass("pr-0");
  // $(".col1").addClass("mr-0");
  // $(".col2").addClass("pr-0");
  // $(".col1").addClass("pr-2");
  // $(".col2").addClass("px-2");
  // $(".col3").addClass("px-2");
  // $(".row").addClass("justify-content-start");
  // $(".row").addClass("d-flex");

  // full country list
  // https://gist.github.com/kalinchernev/486393efcca01623b18d
  var country = document.getElementsByClassName("country");
  var countriesJSON = {
    AF: "Afghanistan",
    AX: "\u00c5land Islands",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua & Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AC: "Ascension Island",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia",
    BA: "Bosnia & Herzegovina",
    BW: "Botswana",
    BR: "Brazil",
    IO: "British Indian Ocean Territory",
    VG: "British Virgin Islands",
    BN: "Brunei",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    IC: "Canary Islands",
    CV: "Cape Verde",
    BQ: "Caribbean Netherlands",
    KY: "Cayman Islands",
    CF: "Central African Republic",
    EA: "Ceuta & Melilla",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "Comoros",
    CG: "Congo - Brazzaville",
    CD: "Congo - Kinshasa",
    CK: "Cook Islands",
    CR: "Costa Rica",
    CI: "C\u00f4te d\u2019Ivoire",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Cura\u00e7ao",
    CY: "Cyprus",
    CZ: "Czechia",
    DK: "Denmark",
    DG: "Diego Garcia",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    ET: "Ethiopia",
    EZ: "Eurozone",
    FK: "Falkland Islands",
    FO: "Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories",
    GA: "Gabon",
    GM: "Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HN: "Honduras",
    HK: "Hong Kong SAR China",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    XK: "Kosovo",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Laos",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macau SAR China",
    MK: "Macedonia",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia",
    MD: "Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar (Burma)",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    KP: "North Korea",
    MP: "Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestinian Territories",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines",
    PN: "Pitcairn Islands",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    RE: "R\u00e9union",
    RO: "Romania",
    RW: "Rwanda",
    WS: "Samoa",
    SM: "San Marino",
    ST: "S\u00e3o Tom\u00e9 & Pr\u00edncipe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia & South Sandwich Islands",
    KR: "South Korea",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    BL: "St. Barth\u00e9lemy",
    SH: "St. Helena",
    KN: "St. Kitts & Nevis",
    LC: "St. Lucia",
    MF: "St. Martin",
    PM: "St. Pierre & Miquelon",
    VC: "St. Vincent & Grenadines",
    SD: "Sudan",
    SR: "Suriname",
    SJ: "Svalbard & Jan Mayen",
    SZ: "Swaziland",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syria",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad & Tobago",
    TA: "Tristan da Cunha",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks & Caicos Islands",
    TV: "Tuvalu",
    UM: "U.S. Outlying Islands",
    VI: "U.S. Virgin Islands",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates",
    GB: "United Kingdom",
    UN: "United Nations",
    US: "United States",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VA: "Vatican City",
    VE: "Venezuela",
    VN: "Vietnam",
    WF: "Wallis & Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe"
  };
 
  for (var el in countriesJSON) {
    
    var opt = document.createElement("option");
    opt.value = countriesJSON[el];
    opt.innerHTML = countriesJSON[el];
    var opt2 = opt.cloneNode(true);
    // country[0].add(opt);
    country[0].appendChild(opt);
    // country[1].add(opt2);
    country[1].appendChild(opt2);
  }
  
});


// <!-- скрипт для ajax отправки формы в 2 места -->
// name у каждого инпута должно быть разное
function validateHuman(honeypot) {
  if (honeypot) {
    //if hidden form filled up
    console.log("Robot Detected!");
    return true;
  } else {
    console.log("Welcome Human!");
  }
}

// get all data in form and return object
function getFormData() {
  var form = document.getElementById("gform");
  var elements = form.elements; // all form elements
  var fields = Object.keys(elements)
    .map(function(k) {
      if (elements[k].name !== undefined) {
        return elements[k].name;
        // special case for Edge's html collection
      } else if (elements[k].length > 0) {
        return elements[k].item(0).name;
      }
    })
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });
  var data = {};
  fields.forEach(function(k) {
    data[k] = elements[k].value;
    var str = ""; // declare empty string outside of loop to allow
    // it to be appended to for each item in the loop
    if (elements[k].type === "checkbox") {
      // special case for Edge's html collection
      str = str + elements[k].checked + ", "; // take the string and append
      // the current checked value to
      // the end of it, along with
      // a comma and a space
      data[k] = str.slice(0, -2); // remove the last comma and space
      // from the  string to make the output
      // prettier in the spreadsheet
    } else if (elements[k].length) {
      for (var i = 0; i < elements[k].length; i++) {
        if (elements[k].item(i).checked) {
          str = str + elements[k].item(i).value + ", "; // same as above
          data[k] = str.slice(0, -2);
        }
      }
    }
  });

  // add form-specific values into the data
  data.formDataNameOrder = JSON.stringify(fields);
  data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
  data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

  console.log(data);
  return data;
}

function handleFormSubmit(event) {
  // handles form submit withtout any jquery
  event.preventDefault(); // we are submitting via xhr below
  var data = getFormData(); // get the values submitted in the form

  /* OPTION: Remove this comment to enable SPAM prevention, see README.md
      if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
        return false;
      }
      */
  if (!document.getElementById("gform").checkValidity()) {
    // if all form is not valid
    return false;
  } else {
    // email to labelID
    // var newLabel = document.getElementById("email").value;
    // document.getElementById("labelId").value = "ONSW18_" + newLabel;
    // $("input[type='hidden'][name=labelId]").val("ONSW18_" + newLabel);

    document.getElementById("gform").submit();
    var url =
      "https://script.google.com/macros/s/AKfycbz4hjJyR_LH0pu4NUHEc_lAnUgPcYXMHY8daAZBY5HQuZt11S0L/exec"; //
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      console.log(xhr.status, xhr.statusText);
      console.log(xhr.responseText);
      document.getElementById("gform").style.display = "none"; // hide form
      document.getElementById("thankyou_message").style.display = "block";
      if (this.readyState == 4) {
        // Point 5
        if (this.status == 200) {
          var response = this.responseText;
          // Point 6
          //document.getElementById('gform').submit();
        }
      }

      return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(data)
      .map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
    xhr.send(encoded);
  }
}

function loaded() {
  console.log("contact form submission handler loaded successfully");
  // bind to the submit event of our form
  var form = document.getElementById("gform");
  form.addEventListener("submit", handleFormSubmit, false);
}
document.addEventListener("DOMContentLoaded", loaded, false);

// <!-- скрипт для валидации формы -->
// Example starter JavaScript for disabling form submissions if there are invalid fields
// from Bootstrap
(function() {
  "use strict";
  window.addEventListener(
    "load",
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          "submit",
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();