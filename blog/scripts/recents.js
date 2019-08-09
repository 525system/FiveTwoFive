const views = document.querySelector("#related");

const setupContent = data => {
  let html = "";
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = data.data().date;
    let views = data.data().content;
    let tag = data.data().tag
    let username = data.data().username;
    // console.log(data);

    const div = `
      	<li class="clearfix">
          <img src="${data.data().preview}" alt="image not found" class="float-left">
          <div class="post float-left">
            <h6><a href="blog-details.html?${id}" class="tran3s">${data.data().title}</a></h6>
            
            <span>${new Date(data.data().date).toDateString()} </span>
           
          </div > 
        </li >


  `;
    html += div;
  });
  views.innerHTML = html;
};
// let tags = sessionStorage.getItem("tags");
// let tags = "firebase";
db.collection("posts")
  .orderBy("date", "desc").limit(4)
  // .where("tag", "==", tags)
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
