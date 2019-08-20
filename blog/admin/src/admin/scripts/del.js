
function del() {

  let hold = document.getElementById("bttn").value;
  db.collection("posts").doc(hold).delete().then(function () {
    alert("Document successfully deleted!");
  }).catch(function (error) {
    alert("Error removing document: ", error);
  });

  db
    .collection('posts')
    .onSnapshot(
      doc => {
        let data = doc.docs;
        delete (data);
      },
      err => {
        console.log(err);
      }
    );

}