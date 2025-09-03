const bc = [
    { name: "Hvidevarer", link: "/hvidevarer" },
    { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
    { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", klik);

function klik() {
    let str = "";
    //$nbsp; (et mellemrum der ikke kan forsvinde)

    console.log(str);


    bc.forEach((elm, taeller, arr) => {
        console.log("elm", elm.name, taeller);
        //str += "&nbsp/&nbsp";

        //console.log(str);
        if (taeller === arr.length - 1) {
            str += `<li>${elm.name}</li>`;

            bc.shift();
            console.log("tæller", taeller);

        }
        else {
            //str += elm.name;
            str += `<li><a href="">${elm.name}<a/> &nbsp/&nbsp <li/>`;
        }
    });
    document.querySelector("ul").innerHTML = str;
}