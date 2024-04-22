// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

let main = () => {

  // Get the value of the "barcode" parameter
  var barcodeValue = getUrlParameter('barcode');

  // Check if the barcode parameter exists
  if(!barcodeValue) {
    $('#output').hide()
    
  } else {
    $('#input').hide()

    document.title = barcodeValue + ' - ' + document.title

    // $('#output .frame .barcode').JsBarcode(barcodeValue)
    $('#output .frame .text').text(barcodeValue)

    JsBarcode(".barcode", barcodeValue, {
      format: "CODE39",
      // lineColor: "#0aa",
      width:1,
      height:30,
      displayValue: false
    });

    let frame = $('#output .frame')

    for (let i = 0; i < 35; i++) {
      let clone = frame.clone()
      if (i > 1) {
        clone.addClass('move-upper')
      }
      if (i % 3 == 0) {
        clone.addClass('move-left')
      }
      else if ( i % 3 == 1) {
        clone.addClass('move-left-2')
      }
      $('#output').append(clone)
    }

    window.print();
  }
}

setTimeout(() => {
  main()
}, 500)