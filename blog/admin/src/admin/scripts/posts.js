let editor;

ClassicEditor
  .create(document.getElementById('result'))
  .then(newEditor => {
    editor = newEditor;

  })
  .catch(error => {
    console.error(error);
  });

// Assuming there is a <button id="submit">Submit</button> in your application.

let form = document.getElementById('submit');
form.addEventListener('click', event => {
  event.preventDefault();
  const editorData = editor.getData();
  console.log(editor);
  console.log(editorData);
  // ...
});