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
    console.log(data);

    const div = `
       <li><a href="#" class="tran3s">${
      data.data().tag
      }<span>${
      data.data().tag.length
      }</span></a></li>
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
