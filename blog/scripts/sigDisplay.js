let name = document.getElementById ('name');
// let header = document.getElementById("header");
let image = document.getElementById ('image');
let contents = document.getElementById ('content');
let taggs = document.getElementById ('taggs');
let replyID;
let commentID
let id = window.location.search.split ('?')[1];
db
  .collection ('posts')
  .doc (id)
  .get ()
  .then (doc => {
    console.log (doc);
    preview = doc.data ().preview;
    title = doc.data ().title;
    date = doc.data ().date;
    content = doc.data ().content;
    taggs = doc.data ().tag;
    username = doc.data ().username;
    // console.log(tag);

    let tags = sessionStorage.setItem ('tags', taggs);

    const htmlTitle = `
         <li id="name"><a href="525system.com" class="text-medium-gray">Home</a></li>
                        <li><a href="blog.525system.com" class="text-medium-gray">Blog</a></li>
                        <li class="text-medium-gray">${doc.data ().title}</li>
      `;
    name.innerHTML = htmlTitle;

    // const htmlIntro = `

    //   `;
    // header.innerHTML = htmlIntro;

    const htmlDescription = `
      <section id="image" class="wow fadeIn cover-background background-position-top top-space"
            style="background-image:url('${doc.data ().preview}');">
            <div class="opacity-medium bg-extra-dark-gray ">
               
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 d-flex justify-content-center flex-column text-center page-title-large padding-30px-tb ">
                      <span id="header" class="text-white-2 opacity6 alt-font margin-10px-bottom d-block text-uppercase text-small">${new Date (doc.data ().date).toDateString ()}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by ${doc.data ().username}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${doc.data ().tag}</span>
                    
                    <h1 class="text-white-2 alt-font font-weight-600 margin-10px-bottom">${doc.data ().title}
                    </h1>


                    </div>
                </div>
            </div>
        </section>
      `;
    image.innerHTML = htmlDescription;
    const htmlTime = `
       <div class="col-12 col-lg-10 mx-auto text-center last-paragraph-no-margin" id="content">
                    <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">${doc.data ().title}</h5>
                   
                    <p>${doc.data ().content}</p>
                </div>
      `;
    contents.innerHTML = htmlTime;
    const htmlLevel = `
     <div class="col-12 col-lg-10 d-flex flex-wrap mx-auto p-0" id="taggs">
                    <div class="col-12 col-lg-8 col-md-6 text-center text-md-left sm-margin-10px-bottom" >
                        <div class="tag-cloud">
                            <a href="#">${doc.data ().tag}</a>
                        
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 col-md-6 text-center text-md-right">
                        <div class="social-icon-style-6">
                            <ul class="extra-small-icon">
                                
                                <li><a class="facebook" href="https://facebook.com/525System/" target="_blank"><i
                                            class="fab fa-facebook-f"></i></a></li>
                                <li><a class="twitter" href="https://twitter.com/525Team/" target="_blank"><i
                                            class="fab fa-twitter"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                    
      `;
    taggs.innerHTML = htmlLevel;
  })
  .catch (err => {
    console.error (err);
  });


                // **************************
                //   COMMENT SECTION POSTING
                // **************************    
let id2 = window.location.search.split ('?')[1];
let commentsForm = document.querySelector ('#comments');
commentsForm.addEventListener ('submit', e => {
  e.preventDefault ();
  const author = document.querySelector ('#author').value;
  const email = document.querySelector ('#email').value;
  const comment = document.querySelector ('#message').value;
  // const createdAt = new Date()
  console.log (author);
  console.log (email);
  console.log (id);
  console.log (comment);

  db
    .collection ('reviews')
    .doc ()
    .set ({
      id,
      author,
      email,
      comment,
      created: firebase.firestore.Timestamp.fromDate (new Date ()),
    })
    .then (() => {
      alert ('Your Reviews has been Added');
      document.querySelector ('#author').value = '';
      document.querySelector ('#email').value = '';
      document.querySelector ('#message').value = '';
      // commentsForm.reset();
    });
});


                // **************************
                //   COMMENT SECTION PREVIEW
                // **************************    

const reviews = document.querySelector ('.blog-comment');
// const reviewNo = document.querySelector("#reviewNo")
const setupReviews = data => {
  if (data.length) {
    let html = ``;
    // commentID = data.id
    // reviewNo.innerHTML = `Reviews ( ${data.length} )`;
    data.forEach(item => {
      commentID = item.id
      // console.log(commentID)
      const detail = item.data();
      const d = detail.created.toDate ().toDateString ();
      // const date = new Date (d);
      console.log (d);
      const div = ` <li>
                      <div class="d-block d-md-flex width-100 width-100">
                          <div class="width-100 padding-40px-left last-paragraph-no-margin sm-no-padding-left">
                              <a href="#"
                                
                                  class="text-extra-dark-gray text-uppercase alt-font font-weight-600 text-small">${detail.author}</a>
                              <a href="#comments?${item.id}"
                                  onclick="reply()"
                                  class="inner-link btn-reply text-uppercase alt-font text-extra-dark-gray">Reply</a>
                              <div class="text-small text-medium-gray text-uppercase margin-10px-bottom">${d}</div>
                              <p>${detail.comment}</p>
                          </div>
                      </div>
                    </li>
                  `;
      html += div;
    });

    reviews.innerHTML = html;
  } else {
    reviews.innerHTML = `<h5 class="text-center"> No Comments. Be The First to comment</h5>`;
  }
};
const reply = () => {
  replyID = window.location.search.split('?')[1];
  console.log(replyID)
};
db.collection ('reviews').where ('id', '==', id).onSnapshot (
  snapshot => {
    //console.log(snapshot.docs.id);
    let data = snapshot.docs;
    setupReviews (data);
  },
  err => {
    console.log (err.message);
  }
);
