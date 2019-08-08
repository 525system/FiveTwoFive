const CLOUDINARY__URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY__UPLOAD__PRESET = "i4hpnx9j";
const CLOUD__NAME = "ogcodes";




let cloudUpload = document.getElementById("cloud-upload");
// let content = document.getElementById("editor1").value;

let imgLink = document.getElementById("img-link");


cloudUpload.addEventListener("change", event => {
  event.preventDefault();


  console.log("hi")

  let file = event.target.files[0];

  let formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", CLOUDINARY__UPLOAD__PRESET);
  console.log(file);
  axios({
    url: CLOUDINARY__URL,
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: formData
  })
    .then(res => {

      // let imgLink = document.getElementById("img-link");
      console.log(res.data.secure_url);
      let link = res.data.secure_url;

      imgLink.value = link;

      console.log("done")
    })
    .catch(err => {
      console.log(err);
    });

});


