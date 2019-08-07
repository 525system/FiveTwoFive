const content = document.querySelector('#content');

const setupContent = data => {
  let html = '';
  data.forEach (data => {
    let id = data.id;
    let preview = data.data ().preview;
    let title = data.data ().title;
    let date = new Date (data.data ().date).toDateString ();
    let content = data.data ().content;
    let tag = data.data ().tag;
    let username = data.data ().username;
    console.log (data);

    const div = `
       <div class="col-xs-6">
								<div class="single-news">
									<img src="${preview}" alt="">
									<div class="post">
										<span>${date} | 3 Comment</span>
										<h4><a href="blog-details.html?${id}" class="tran3s">${title}</a></h4>
										<p class="clip">${content}</p>
									</div>
								</div> 
							</div> 
    `;
    html += div;
  });
  content.innerHTML = html;
};
// let level = sessionStorage.getItem("userLevel");
db
  .collection ('posts')
  .orderBy ('date', 'desc')
  // .where("courseLevel", "<=", level)
  .onSnapshot (
    doc => {
      let data = doc.docs;
      setupContent (data);
    },
    err => {
      console.log (err);
    }
  );
// setInterval(setupContent, 2000)
// setupContent();
