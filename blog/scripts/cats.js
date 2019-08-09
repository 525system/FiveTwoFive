const cats = document.querySelector('#cats');

const setupContentCats = data => {
  let html = '';
  data.forEach(data => {
    let id = data.id;
    let preview = data.data().preview;
    let title = data.data().title;
    let date = new Date(data.data().date).toDateString();
    // let cats = data.data().cats;
    let tag = data.data().tag;
    let username = data.data().username;
    // console.log(data);

    const div = `
     
							<li class="float-left"><a style="color: white;
                background: #484848; 
                href="#" class="tran3s whiteT" >${
      data.data().tag
      }</a></li>
							
					
    `;
    html += div;
  });
  cats.innerHTML = html;
};
// let level = sessionStorage.getItem("userLevel");
db
  .collection('posts')
  .orderBy('date', 'desc')
  // .where("courseLevel", "<=", level)
  .onSnapshot(
    doc => {
      let data = doc.docs;
      setupContentCats(data);
    },
    err => {
      console.log(err);
    }
  );
// setInterval(setupContentCats, 2000)
// setupContentCats();
