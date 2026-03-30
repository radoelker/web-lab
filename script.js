console.log("JS is connected! 🚀");
// Source - https://stackoverflow.com/a/76961890
// // Posted by mplungjan
// // Retrieved 2026-03-30, License - CC BY-SA 4.0
//
$(function() {
   $("#toggle_checkbox").on("click", () => {
       $('body').toggleClass("dark",this.checked)
         });
   });
