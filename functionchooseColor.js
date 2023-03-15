<script>
 
function chooseColor () {
// Get all elements with the "product-views-option-color-picker" tag
var colorPickers = document.getElementsByClassName("product-views-option-color-picker-label").length;

// Check if there is only one color picker option in the array
if (colorPickers === 1) {
  // Get the radio button element for the only option, and click that item
  document.getElementsByClassName("product-views-option-color-picker-label")[0].click();
}
}

</script>
