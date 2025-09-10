// Extension blocker - prevents Chrome extension interference
(function() {
  'use strict';
  
  // Block extension script injection
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName, options) {
    const element = originalCreateElement.call(this, tagName, options);
    
    if (tagName.toLowerCase() === 'script' && element.src) {
      // Block chrome extension scripts
      if (element.src.includes('chrome-extension://') || 
          element.src.includes('moz-extension://') ||
          element.src.includes('webkit-extension://')) {
        console.warn('Blocked extension script:', element.src);
        return document.createComment('Extension script blocked');
      }
    }
    
    return element;
  };
  
  // Monitor and block extension DOM modifications
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            
            // Remove extension-injected elements
            if (element.tagName === 'SCRIPT' && 
                element.getAttribute('src')?.includes('chrome-extension://')) {
              console.warn('Removing extension script:', element.getAttribute('src'));
              element.remove();
            }
          }
        });
      }
    });
  });
  
  // Start observing
  if (document.body) {
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
  
  // Override console.error to suppress extension errors
  const originalError = console.error;
  console.error = function(...args) {
    const message = args.join(' ');
    if (message.includes('chrome-extension://') || 
        message.includes('Extension context invalidated') ||
        message.includes('AdUnit')) {
      return; // Suppress extension-related errors
    }
    originalError.apply(console, args);
  };
  
})();