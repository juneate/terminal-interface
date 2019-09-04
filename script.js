var $input = document.getElementById('input');
var $prompt = document.getElementById('prompt');
var $commands = document.getElementById('commands');

addEventListener('keydown', function(event) {
  switch (event.key) {
    case "Backspace":
      $input.style.width = 'calc(' + ($input.value.length - 1) + 'ch + 1px)';
      break;
    case "Enter":
      var $line = document.createElement('li');
      //$line.innerText = DOMPurify.sanitize($input.value);
      $line.innerText = $input.value;
      $line.className = "line";
      $input.value = "";
      $input.style.width = '0';
      $prompt.insertAdjacentElement('beforebegin',$line);
      break;
    case "ArrowLeft":
    case "ArrowRight":
    case "ArrowUp":
    case "ArrowDown":
    case "Escape":
    case "Tab":
    case "Meta":
    case "Control":
    case "Shift":
    case "Alt":
    case "Home":
    case "End":
    case "Insert":
    case "Delete":
    case "PageUp":
    case "PageDown":
        break;
    default:
      $input.style.width = 'calc(' + ($input.value.length + 1) + 'ch + 1px)';
  }
});
addEventListener('keyup', function(event) {
  var len = $input.value.length;
  $input.style.width = 'calc(' + (len) + 'ch + 1px)';
  $input.setSelectionRange(len, len);
});
function focusInput (event) {
  $input.focus();
}
$commands.addEventListener('click', focusInput);
window.addEventListener('load', focusInput);
window.addEventListener('resize', focusInput);
window.addEventListener('focus', focusInput);