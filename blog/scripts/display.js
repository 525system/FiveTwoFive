const content = document.querySelector('#content');

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
    // console.log(data);

    const div = `
       <div class="col-xs-6">
                <div class="single-news ">
                
                <img src="${preview}" alt="image not found">
                
                <div class="post clip">
                 
                  <h4 style="margin: 0px;"><a href="blog-details.html?${id}" class="tran3s">${title}</a></h4>
                   <span>${date}</span>
                  <p class="">${content}...</p>
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
  .orderBy('date', 'desc')
  .limit(8)
  // .where("courseLevel", "<=", level)
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
