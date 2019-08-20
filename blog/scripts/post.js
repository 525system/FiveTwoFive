const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";

let username = sessionStorage.getItem("username");
let email = sessionStorage.getItem("email");
console.log(email)

// let imgPreview = document.getElementById("img-preview").src;
let fileUpload = document.getElementById("file-upload");


let date;

function savee() {

    let content = document.getElementById("result").innerHTML;
    let title = document.getElementById("title").value;
    let tag = document.getElementById("tag").value;
    // let content = contentOut.value;
    console.log("tag", tag);
    console.log("title", title);
    console.log("cont", content);
    // console.log(content.innerHTML);
    // console.log(content.value);
    // console.log(content.innerText);
}

// console.log(username);

fileUpload.addEventListener("change", event => {

    // let courseDescription = document.getElementById("courseDescription").value;
    // let imgPreview = document.getElementById("img-preview");

    let content = document.getElementById("result").innerHTML;
    let title = document.getElementById("title").value;
    let tagRaw = document.getElementById("tag").value;
    let tag = tagRaw.toLowerCase();
    // let content = contentOut.value;
    console.log("tag", tag);
    console.log("title", title);
    console.log("cont", content);
    // console.log(content.innerHTML);
    // console.log(content.value);
    // console.log(content.innerText);



    console.log(event.target.files[0]);
    let file = event.target.files[0];

    let formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    console.log(file);
    axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        data: formData
    })
        .then(res => {
            console.log(res.data.secure_url);
            let preview = res.data.secure_url;

            // let video = res.data.secure_url;
            date = res.data.created_at;
            duration = res.data.duration;
            // console.log(title);
            // console.log(courseDescription);
            console.log("cloudinary works")
            // console.log("preview", preview)
            // console.log("title", title)
            // console.log("date", date)
            // console.log("content", content)
            // console.log("tag", tag)
            // console.log("username", username)
            return db
                .collection("posts")
                .doc()
                .set({
                    preview,
                    title,
                    date,
                    content,
                    tag,
                    username,
                    email
                })
                .catch(err => {
                    console.error(err);
                    alert(error, "did not upload to database");
                });
        })
        .catch(err => {
            console.log(err);
            alert(error, "did not upload");
        });
});
    // console.log(title);
    // console.log(courseDescription);


