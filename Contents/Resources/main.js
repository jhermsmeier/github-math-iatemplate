window.addEventListener( 'DOMContentLoaded', function() {

  function $( selector, context ) {
    return ( context || document ).querySelector( selector )
  }

  function $$( selector, context ) {
    return ( context || document ).querySelectorAll( selector )
  }

  function parse( tex ) {
    try {
      return TeXZilla.parse( tex )
    } catch( error ) {
      return '<math><merror><mtext>' +
          error.message +
        '</mtext></merror></math>'
    }
  }

  function render( element ) {
    element.outerHTML = parse( element.textContent )
  }

  function processMath() {
    var elements = $$( '.math' )
    for( var i = 0; i < elements.length; i++ ) {
      render( elements[i] )
    }
  }

  document.body.addEventListener( 'ia-writer-change', function() {
    processMath()
  })

})
