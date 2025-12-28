let prevScrollpos = window.pageYOffset;
let loader = document.getElementById("loader");

// window.addEventListener("load", function() {
//     loader.style.display = "none";
// })

function hideLoader() {
    loader.style.display = "none";
}

setTimeout(hideLoader, 4000);

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navBar").style.top = "0";
    } else {
        document.getElementById("navBar").style.top = "-100%";
    }
    prevScrollpos = currentScrollPos;
}

function openExperience(idToOpen, idFirstToClose, idTwoToClose) {
    document.getElementById(idToOpen).style.cssText = 'display: block';

    document.getElementById(idFirstToClose).style.cssText = 'display: none';

    document.getElementById(idTwoToClose).style.cssText = 'display: none';
};

function closeMenu() {
    document.getElementById("menuToggle").checked = false;
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>{observer.observe(el)});

function updateExperienceDuration(containerId) {
    const monthMap = {
        jan: 0, january: 0,
        feb: 1, february: 1,
        mar: 2, march: 2,
        apr: 3, april: 3,
        may: 4,
        jun: 5, june: 5,
        jul: 6, july: 6,
        aug: 7, august: 7,
        sep: 8, september: 8,
        oct: 9, october: 9,
        nov: 10, november: 10,
        dec: 11, december: 11
    };

    function parseDate(value) {
        if (value.toLowerCase() === "present") {
            return new Date();
        }
        const [month, year] = value.split(" ");
        return new Date(year, monthMap[month.toLowerCase()], 1);
    }

    function monthsToYears(months) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;

        if (years > 0 && remainingMonths > 0) {
            return `${years} yr ${remainingMonths} mos`;
        }
        if (years > 0) {
            return `${years} yr`;
        }
        return `${remainingMonths} mos`;
    }

    const container = document.getElementById(containerId);
    const pTag = container.querySelector("p");

    const match = pTag.innerText.match(
        /([A-Za-z]+ \d{4}) - (Present|[A-Za-z]+ \d{4})/
    );

    if (!match) return;

    const startDate = parseDate(match[1]);
    const endDate = parseDate(match[2]);

    let totalMonths =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth()) + 1;

    const formattedDuration = monthsToYears(totalMonths);

    pTag.innerText = `${match[1]} - ${match[2]} · ${formattedDuration}`;
}

updateExperienceDuration("techHutExperience");
updateExperienceDuration("raftLabsExperience");
updateExperienceDuration("iprogrammerExperience");