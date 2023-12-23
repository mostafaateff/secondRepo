var bookmarkName = document.getElementById('bookMarkName')
var websiteURl = document.getElementById('webSiteUrl')
function editStyle() {
    const urlRegex = /^www\.[a-zA-Z0-9-]+\.(com|net)$/;
    const checkRegex = urlRegex.test(websiteURl.value)
    if (bookmarkName.value.length < 3) {
        document.getElementById('bookMarkName').style.border = '2px red solid'
    } else {
        document.getElementById('bookMarkName').style.border = '2px green solid'

    }
    if (!checkRegex) {
        document.getElementById('webSiteUrl').style.border = '2px red solid'
    } else {
        document.getElementById('webSiteUrl').style.border = '2px green solid'

    }

}

var bookMarks = []
var btn = document.getElementById('btn')
const dataFromLocalStorage = localStorage.getItem('webSites')
const parsedData = JSON.parse(dataFromLocalStorage)
if (parsedData) {
    bookMarks = parsedData
    display(bookMarks);
}


function addBookmark() {
    const urlRegex = /^www\.[a-zA-Z0-9-]+\.(com|net)$/;
    const checkRegex = urlRegex.test(websiteURl.value)

    if (!checkRegex || websiteURl.value.length < 3) {

        const errorModalBody = document.getElementById("errorModalBody");
        document.getElementById("errorModal").style.display = "block";
        document.body.classList.add("modal-open");

        const closeButton = document.querySelector("#errorModal .close");
        closeButton.addEventListener("click", function () {
            document.getElementById("errorModal").style.display = "none";
            document.body.classList.remove("modal-open");
        });

        return;
    }
    if (!checkRegex) return alert("invalid url")
    var bookMarkBox = {
        name: bookmarkName.value,
        url: websiteURl.value,
    }
    bookMarks.push(bookMarkBox);
    localStorage.setItem("webSites", JSON.stringify(bookMarks))
    display(bookMarks);

}


function display(bookMarks) {

    var box = ``

    for (var i = 0; i < bookMarks.length; i++) {

        box += `
        <tr>
     <td>${i + 1}</td>
     <td>${bookMarks[i].name}</td>
     <td><a class="btn btn-info" href="https://${bookMarks[i].url}" target="_blank">visit</a></td>
     <td><button class="btn btn-danger " onclick="deleteProduct(${i})" >delete</button></td>
    
 </tr> 
        `
    }
    document.getElementById('tablerow').innerHTML = box
}


function deleteProduct(index) {
    bookMarks.splice(index, 1)
    localStorage.setItem("webSites", JSON.stringify(bookMarks))
    display(bookMarks)
}
























