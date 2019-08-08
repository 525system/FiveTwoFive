let name = document.getElementById ('title');
// let header = document.getElementById("header");
let image = document.getElementById ('image');
let contents = document.getElementById ('content');
let taggs = document.getElementById ('taggs');
let replyID;
let commentID;
let breadCrumb = document.querySelector ('#breadCrumb');
let blogImage = document.querySelector ('#blogImage');
let datePosted = document.querySelector ('#datePosted');
let blogTitle = document.querySelector ('#blogTitle');
let socialMedia = document.querySelector ('#social-media');
let url = window.location.href;
console.log (url);
let id = window.location.search.split ('?')[1];
db
  .collection ('posts')
  .doc (id)
  .get ()
  .then (doc => {
    // console.log (doc);
    let preview = doc.data ().preview;
    let title = doc.data ().title;
    let date = new Date (doc.data ().date).toDateString ();
    let content = doc.data ().content;
    let taggs = doc.data ().tag;
    let username = doc.data ().username;
    // console.log(tag);

    let tags = sessionStorage.setItem ('tags', taggs);
    blogImage.src = preview;
    datePosted.innerHTML = date;
    contents.innerHTML = content;
    socialMedia.innerHTML = `<li>Share</li>
										
										<li><a href="#" class="tran3s sharer" data-sharer="facebook" data-url="${url}"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#" class="tran3s sharer" data-sharer="twitter" data-url="${url}"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#" class="tran3s sharer" data-sharer="instagram" data-url="${url}"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>`;
    // const htmlTitle = `
    //      <li id="name"><a href="525system.com" class="text-medium-gray">Home</a></li>
    //                     <li><a href="blog.525system.com" class="text-medium-gray">Blog</a></li>
    //                     <li class="text-medium-gray">${doc.data ().title}</li>
    //   `;
    name.innerHTML = doc.data ().title;
    breadCrumb.innerHTML = doc.data ().title;
    blogTitle.innerHTML = doc.data ().title;
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

const reviews = document.querySelector ('#comment-blog');
const noOfComment = document.querySelector ('#noOfComment');
// const reviewNo = document.querySelector("#reviewNo")
const setupReviews = data => {
  if (data.length) {
    let html = ``;
    if (data.length > 1) {
      noOfComment.innerHTML = `${data.length} Comments`;
    } else {
      noOfComment.innerHTML = `${data.length} Comment`;
    }
    // commentID = data.id
    // reviewNo.innerHTML = `Reviews ( ${data.length} )`;
    data.forEach (item => {
      commentID = item.id;
      // console.log(commentID)
      const detail = item.data ();
      const d = detail.created.toDate ().toDateString ();
      // const date = new Date (d);
      console.log (d);
      const div = `<div class="single-comment clearfix" >
                    <div class="comment float-left">
                      <h6>${detail.author}</h6>
                      <span>${d}</span>
                      <p>${detail.comment}</p>
                    </div>
							    </div> 
                  `;
      html += div;
    });

    reviews.innerHTML = html;
  } else {
    reviews.innerHTML = `<h5 class="text-center"> No Comments. Be The First to comment</h5>`;
  }
};

db
  .collection ('reviews')
  .where ('id', '==', id)
  .orderBy ('created', 'desc')
  .onSnapshot (
    snapshot => {
      //console.log(snapshot.docs.id);
      let data = snapshot.docs;
      setupReviews (data);
    },
    err => {
      console.log (err.message);
    }
  );
