(function () {

  $('.match-height').matchHeight();

  $('#nav-mobile-toggle').click(function () {
    $('#header-nav').toggleClass('on');
  });

  $('ul#header-nav li.' + $('body').attr('id')).addClass('selected');

  $('nav#toc-nav ul li.' + $('div.documentation-container').attr('id')).addClass('selected');
  
  if (localStorage.getItem("darkmode") === 'night'){
    $('div.highlighter-rouge').addClass('highlighter-rouge-dark');
  }

  function addCopyButtons(clipboard) {
    document.querySelectorAll('pre > code').forEach(function (codeBlock) {
        var button = document.createElement('span');
        button.className = 'copy-code-button';
        button.type = 'button';
        button.innerHTML = '&#128203;';

        button.addEventListener('click', function () {
            clipboard.writeText(codeBlock.innerText).then(function () {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerHTML = '&#128077;';

                setTimeout(function () {
                    button.innerHTML = '&#128203;';
                }, 1000);
            }, function (error) {
                button.innerText = 'Error';
            });
        });

        var pre = codeBlock.parentNode;
        if (pre.parentNode.classList.contains('highlight')) {
            var highlight = pre.parentNode;
            highlight.parentNode.insertBefore(button, highlight);
        } else {
            pre.parentNode.insertBefore(button, pre);
        }
    });
  }

  if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
  } else {
      var script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
      script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
      script.crossOrigin = 'anonymous';
      script.onload = function() {
          addCopyButtons(clipboard);
      };

      document.body.appendChild(script);
  }


})();