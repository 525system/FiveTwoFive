const content = document.querySelector('#content');
let emailID = sessionStorage.getItem("email");
let myUsername = sessionStorage.getItem("username");
const setupContent = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    let content = data.data().content;
    let tag = data.data().tag;
    let username = data.data().username;
    let email = data.data().emailAuth;
    // console.log(data);

    const div = `
       <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="32" height="32""
                src="${preview}"    
              />
              <div class="card-body">
                  <p class="card-text">${title}</p>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                      <a class="btn btn-primary" href="https://blog.525system.com/blog-details.html?${id}" role="button">View</a>
                          
                      <a class="btn btn-secondary" href="edit.html?${id}" role="button">Edit</a>
                      <button  class="btn btn-danger" onclick="del()" value="${id}"  id="bttn">Delete</button>
                      </div>
                      <small class="text-muted">${date}</small>
                  </div>
              </div>
          </div>
      </div>
    `;
    html += div;
  });
  content.innerHTML = html;

};
// let level = sessionStorage.getItem("userLevel");
let first = db
  .collection('posts')
  .where("emailAuth", "==", emailID)
  .orderBy('date', 'desc')
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContent(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(setupContent, 2000)
// setupContent();

// var first = db.collection("posts")
//   .orderBy('date', 'desc')
//   .limit(8);

// return first.get().then(function (documentSnapshots) {
//   // Get the last visible document
//   var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
//   console.log("last", lastVisible);
//   // });

//   // Construct a new query starting at this document,
//   // get the next 8 posts.
//   var next = db.collection("posts")
//     .orderBy('date', 'desc')
//     .startAfter(lastVisible)
//     .limit(8);
// });
