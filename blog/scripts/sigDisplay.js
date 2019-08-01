


let name = document.getElementById("name");
// let header = document.getElementById("header");
let image = document.getElementById("image");
let contents = document.getElementById("content");
let taggs = document.getElementById("taggs");

let id = window.location.search.split("?")[1];
db.collection("posts")
  .doc(id)
  .get()
  .then(doc => {
    console.log(doc);
    preview = doc.data().preview;
    title = doc.data().title;
    date = doc.data().date;
    content = doc.data().content;
    taggs = doc.data().tag
    username = doc.data().username;
    // console.log(tag);

    let tags = sessionStorage.setItem(
      "tags",
      taggs
    );


    const htmlTitle = `
         <li id="name"><a href="525system.com" class="text-medium-gray">Home</a></li>
                        <li><a href="blog.525system.com" class="text-medium-gray">Blog</a></li>
                        <li class="text-medium-gray">${
      doc.data().title
      }</li>
      `;
    name.innerHTML = htmlTitle;

    // const htmlIntro = `

    //   `;
    // header.innerHTML = htmlIntro;

    const htmlDescription = `
      <section id="image" class="wow fadeIn cover-background background-position-top top-space"
            style="background-image:url('${
      doc.data().preview
      }');">
            <div class="opacity-medium bg-extra-dark-gray ">
               
            </div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-12 d-flex justify-content-center flex-column text-center page-title-large padding-30px-tb ">
                      <span id="header" class="text-white-2 opacity6 alt-font margin-10px-bottom d-block text-uppercase text-small">${new Date(
        doc.data().date).toDateString()}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;by ${
      doc.data().username
      }&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${
      doc.data().tag
      }</span>
                    
                    <h1 class="text-white-2 alt-font font-weight-600 margin-10px-bottom">${
      doc.data().title
      }
                    </h1>


                    </div>
                </div>
            </div>
        </section>
      `;
    image.innerHTML = htmlDescription;
    const htmlTime = `
       <div class="col-12 col-lg-10 mx-auto text-center last-paragraph-no-margin" id="content">
                    <h5 class="alt-font text-extra-dark-gray font-weight-600 mb-0">${
      doc.data().title
      }</h5>
                   
                    <p>${
      doc.data().content
      }</p>
                </div>
      `;
    contents.innerHTML = htmlTime;
    const htmlLevel = `
     <div class="col-12 col-lg-10 d-flex flex-wrap mx-auto p-0" id="taggs">
                    <div class="col-12 col-lg-8 col-md-6 text-center text-md-left sm-margin-10px-bottom" >
                        <div class="tag-cloud">
                            <a href="#">${
      doc.data().tag
      }</a>
                        
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
  .catch(err => {
    console.error(err);
  });
