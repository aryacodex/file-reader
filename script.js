Filevalidation = () => {
    const fi = document.getElementById('file');
    // Check if any file is selected.
    if (fi.files.length > 0) {
        for (const i = 0; i <= fi.files.length - 1; i++) {

            const fsize = fi.files.item(i).size;
            const file = Math.round((fsize / 1024));
            // The size of the file.
            if (file >= 4096) {
                alert(
                  "File size greater than 0 bytes and smaller than 1kb");
            } else if (file < 2048) {
                alert(
                  "File size greater than or equal to 1kb and smaller than 1 mb");
                  alert(
                  "file size is egreater than or equal to 1 MB and smaller than 1 GB");
                  alert(
                  "File size greater than or equal to 1 GB and smaller than 1 TB ");
            } else {
                document.getElementById('size').innerHTML = '<b>'
                + file + '</b> KB';
            }
        }
    }
}
function readFileA () {
    // (A) GET SELECTED FILE
    let selected = document.getElementById("demoPickA").files[0];
   
    // (B) READ SELECTED FILE
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
      document.getElementById("demoShowA").innerHTML = reader.result;
    });
    reader.readAsText(selected);
  }