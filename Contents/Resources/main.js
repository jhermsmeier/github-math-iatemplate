;(function() {

  function $( selector, context ) {
    return ( context || document ).querySelector( selector )
  }

  function $$( selector, context ) {
    return ( context || document ).querySelectorAll( selector )
  }

  // Run highlight.js on load
  hljs.initHighlightingOnLoad()

  // Re-highlight code
  window.addEventListener( 'DOMContentLoaded', function() {

    function highlightCode() {
      var blocks = $$( 'pre > code' )
      for( var i = 0; i < blocks.length; i++ ) {
        hljs.highlightBlock( blocks[i] )
      }
    }

    document.body.addEventListener( 'ia-writer-change', highlightCode )

  })

  // Hook up math rendering
  window.addEventListener( 'DOMContentLoaded', function() {

    function parse( tex ) {
      try {
        return TeXZilla.parse( tex )
      } catch( error ) {
        return '<math><merror><mtext>' + error.message + '</mtext></merror></math>'
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

    document.body.addEventListener( 'ia-writer-change', processMath )

  })

})()
