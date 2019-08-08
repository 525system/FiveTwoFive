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
<<<<<<< HEAD
       <div
            class="col-12 col-lg-3 col-md-6 margin-50px-bottom wow fadeInUp last-paragraph-no-margin sm-margin-30px-bottom text-center text-md-left">
            <div class="blog-post blog-post-style1">
                <div class="blog-post-images overflow-hidden margin-25px-bottom md-margin-20px-bottom">
                    <a class="tags" href="./blog-post.html?${id}">
                        <img src="${
      data.data().preview
      }"> 
                    </a>
                </div>
                <div class="post-details">
                <a href="./blog-post.html?${id}"
                        class="post-title text-medium text-extra-dark-gray d-block width-90 md-width-100 align">${
      data.data().title
      }</a>
       <div
                        class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb">
                    </div>
                    <span
                        class="post-author text-extra-small text-medium-gray text-uppercase d-block margin-10px-bottom sm-margin-5px-bottom align">
                        ${new Date(
        data.data().date).toDateString()} | by ${
      data.data().username
      } | ${
      data.data().tag
      }
                            </a></span>
                    
                    <div
                        class="separator-line-horrizontal-full bg-medium-light-gray margin-20px-tb md-margin-15px-tb">
                    </div>
                    <p class="width-90 sm-width-100 clip">${
      data.data().content
      }</p>.....
                </div>
            </div>
        </div>

=======
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
>>>>>>> 900f2dce38002ae54aa5b8de1d039f0a225a78bd
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
