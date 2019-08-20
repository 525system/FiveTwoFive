
// firebase.database().ref().child('/posts/' + newPostKey)
//   .set({ title: "New title", body: "This is the new body" });

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/ogcodes/upload";
const CLOUDINARY_UPLOAD_PRESET = "i4hpnx9j";
const CLOUD_NAME = "ogcodes";
let usernameAuthor = sessionStorage.getItem("username");
let emailAuth = sessionStorage.getItem("email");
let fileUpload = document.getElementById("file-upload");
let date;

fileUpload.addEventListener("change", event => {
  event.preventDefault();

  let content = CKEDITOR.instances.editor1.getData();

  let title = document.getElementById("title").value;
  let tags = document.getElementById("tag").value;
  console.log("tags", tags);
  let tag = tags.split(",");
  console.log("tag array", tag)

  console.log(event);
  let file = event.target.files[0];
  // debugger;
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

      date = res.data.created_at;
      duration = res.data.duration;

      let id = window.location.search.split('?')[1];
      let editTitle = document.querySelector('#title');
      let editTags = document.querySelector('#tag');
      let editContent = document.querySelector('#output');

      db
        .collection('posts')
        .doc(id)
        .update({
          preview,
          title,
          date,
          content,
          tag: editTags.value,
        }).then(alert("BLOG POST UPDATE SUCCESSFUL"))
        .catch(err => {
          console.error(err);
          alert(err, "BLOG POST UPDATE UNSUCCESSFUL");
        });
    })
    .catch(err => {
      console.log(err);
      alert(err, "BLOG POST UPDATE UNSUCCESSFUL");
    });
});






function update(id, title, tag, content, preview, date, ) {

  firebase.database().ref('posts/' + id).update({
    preview,
    title: editTitle.value,
    date,
    content: editContent.innerHTML,
    tag: editTags.value,
  });
}



let id = window.location.search.split('?')[1];
let editTitle = document.querySelector('#title');
let editTags = document.querySelector('#tag');
let editContent = document.querySelector('#output');

db
  .collection('posts')
  .doc(id)
  .get()
  .then(doc => {
    // console.log (doc);
    let editTitle = document.querySelector('#title');
    let editTags = document.querySelector('#tag');
    let editContent = document.querySelector('#output');

    let preview = doc.data().preview;
    let title = doc.data().title;
    let date = new Date(doc.data().date).toDateString();
    let content = doc.data().content;
    let tags = doc.data().tag;
    let username = doc.data().username;

    editTitle.value = title;
    editTags.value = tags;
    editContent.innerHTML = content;
    // editContent2.value = content;
  })
  .catch(err => {
    console.error(err);
  });

