// ### js for dropdown navigation
var dropdown = document.getElementsByClassName('drpd-btn')
var i

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function () {
    // toggle class active
    this.classList.toggle('active')

    var dropdownContent = this.nextElementSibling

    // toggle dropdown content
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none'
    } else {
      dropdownContent.style.display = 'block'
    }
  })
}
// end of dropdown nav

// ### JS for toggle notifications
var pesan = document.getElementsByClassName('tblpesan')
var ttpPesan = document.getElementById('ttpNt')

pesan[0].addEventListener('click', function () {
  var notif = document.getElementsByClassName('notifications')

  notif[0].style.display = 'block'
})

ttpPesan.addEventListener('click', function () {
  var notif = document.getElementsByClassName('notifications')

  notif[0].style.display = 'none'
})
// end of toggle notif


var href = $(location).attr("href");
var ref = href.split("/")
var url = ref[3]
$("nav").find("a").each (function () {
  // Get the href attribute of the current link and push it to the array
  if($ (this).attr ("href") == url){
    $ (this).css({
        "color" : "#ff4242",
        "border-right" : "4px solid #ff4242"
    })
    $ (this).find('i').css("color","#ff4242")
  };
});


// js for remove datatables text
let label = document.getElementsByClassName("dataTables_length")[0].childNodes[0].lastChild.remove()
