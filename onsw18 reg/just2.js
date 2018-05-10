 var price = 1000;
    var tshirtPrice = 1300;
    var estafetaPrice = 2000;

    function changeTshirtToWomens(divTshirtID) {
      var tshirtURLs = $("#" + divTshirtID + " a");
      var tshirtPic = $("#" + divTshirtID + " img");
      tshirtPic[0].src = "https://static.wixstatic.com/media/bad037_e47594f0a5244a82948ab47912745097~mv2.png?dn=W_print_grey_small.png";
      tshirtURLs[0].href = "https://static.wixstatic.com/media/bad037_6b53949a7d364ed485ab85e5d97fab14~mv2.png?dn=W_print_grey.png";
      tshirtURLs[1].href = "https://static.wixstatic.com/media/bad037_d5ce9737fab74ecda0aa6d08569339ad~mv2.jpg?dn=sizeChartF.jpg";
      var optionsList = $("#" + divTshirtID + " option");
      if (optionsList[1].value != "XS") {
        $("<option value='XS'>XS</option>").insertAfter(optionsList[0]);
      }
      if (optionsList.last()[0].value == "XL") {
        $(optionsList).last().remove();
      }
    }

    function changeTshirtToMens(divTshirtID) {
      var tshirtURLs = $("#" + divTshirtID + " a");
      var tshirtPic = $("#" + divTshirtID + " img");
      tshirtPic[0].src =
        "https://static.wixstatic.com/media/bad037_9a8c04db49f943b6a92000d0ef67e95e~mv2.png?dn=M_print_grey_small.png";
      tshirtURLs[0].href =
        "https://static.wixstatic.com/media/bad037_3c5ff974fbcd4051aae17fad76e9f4d6~mv2.png?dn=M_print_grey.png";
      tshirtURLs[1].href = "https://static.wixstatic.com/media/bad037_291e071901474f82ae060dfd21e0e662~mv2.jpg?dn=sizeChartM.jpg";
      var optionsList = $("#" + divTshirtID + " option");
      if (optionsList[1].value === "XS") {
        $(optionsList[1]).remove();
      }
      if (optionsList.last()[0].value != "XL") {
        $("<option value='XL'>XL</option>").insertAfter(optionsList.last());
      }
    }

    function changeSelectColor(select) {
      if (select.value !== "") {
        $(select).attr("style", "color:#212529 !important;");
      } else {
        $(select).attr("style", "color:none !important;");
      }
    }

    $("[data-fancybox]").fancybox({
      toolbar: "auto",
      buttons: [
        "close"
      ],
      protect: true,
      image: {
        preload: true,
      },
      animationEffect: "zoom-in-out",
      mobile: {
        animationEffect: "zoom-in-out",
        touch: false,
        dblclickContent: false,
        smallBtn: true,
      },
      clickContent: "close",
    });
    
    function showTshirt($input) {
      var thsirtDiv = $($input).parents(".row").next(".row");
      if ($input.checked) {
        $(thsirtDiv).removeClass("d-none");
        thsirtDiv.find("select").attr("required", true);
        $("#sum")[0].value = parseInt($("#sum")[0].value) + tshirtPrice;
      } else {
        $(thsirtDiv).addClass("d-none");
        thsirtDiv.find("select").attr("required", false);
        $("#sum")[0].value = parseInt($("#sum")[0].value) - tshirtPrice;
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
      var labelsForChoice = document.getElementsByName("labelForChoice");
      if (labelsForChoice[1].classList.contains("active") === false) {
        labelsForChoice[0].classList.remove("active");
        labelsForChoice[1].classList.add("active");
        var estafetaDiv = document.getElementById("estafetaDiv");
        estafetaDiv.classList.remove("d-none");
        var span = document.getElementById("conditionsRow").getElementsByTagName("span")[0];
        span.innerText = "ы";
        var sum = document.getElementById("sum");
        sum.value = sum.value - price + estafetaPrice;
        returnRequireAttr();
        $("#finishTimeRow").addClass("d-none");
      }
    }

    function personal() {

      var labelsForChoice = document.getElementsByName("labelForChoice");
      if (labelsForChoice[0].classList.contains("active") === false) {
        var estafetaDiv = document.getElementById("estafetaDiv");
        estafetaDiv.classList.add("d-none");
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
        $("#finishTimeRow").removeClass("d-none");
      }
    }

    function createLabel() {
      var email = document.getElementById("email");
      var label = document.getElementById("labelId");
      label.value = "ONSW18_" + email.value;
    }

    function removeRequiredAttr() {
      var list = $("#estafetaDiv input[required], #estafetaDiv select[required]");
      for (i = 0; i < list.length; i++) {
        list[i].removeAttribute("required");
        list[i].classList.add("required");
      }
    }
    
    // $(document).ready(function() {
      
    // }); 
    
    $(document).ready(function() {
      $(".birthday").inputmask({
        showMaskOnHover: false
      });
      $("[name='phone']").inputmask({
        showMaskOnHover: false
      });

      removeRequiredAttr();

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
        country[0].appendChild(opt);
        country[1].appendChild(opt2);
      }
    });

    

    (function() {
      "use strict";
      window.addEventListener(
        "load",
        function() {
          var forms = document.getElementsByClassName("needs-validation");
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
