function onOpen() {
  var ui = DocumentApp.getUi();
  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('My Functions')
      .addItem('Lists to Plain Text', 'replaceListsWithPlainTextg')
      .addToUi();
}

function replaceListsWithPlainTextg() {
  var doc = DocumentApp.getActiveDocument(); // Gets the active document
  var body = doc.getBody(); // Gets the body of the document
  var numElements = body.getNumChildren(); // Gets the number of elements in the document
  var listCounter = 1;


  // Iterate through all elements in the document
  for (var i = 0; i < numElements; i++) {
    var element = body.getChild(i);
    // Check if the element is a list item
    if (element.getType() === DocumentApp.ElementType.LIST_ITEM) {
      var listItem = element.asListItem();

      var listType = listItem.getGlyphType();
      var text = listItem.getText();

      if (listType == DocumentApp.GlyphType.NUMBER) {
        var paragraph = body.insertParagraph(i, (listCounter + ". " + text.slice(0, -1))); // Insert a new paragraph with the list item's text before the list item + 
        listCounter++;

        //insert a blanck paragraph before a numbered item
        //body.insertParagraph(i, "");
        //numElements++
        //i++
        //------------------------------------------------
      } else {
        var paragraph = body.insertParagraph(i, ("- " + text).slice(0, -1)); // Insert a new paragraph with the list item's text before the list item;
      }

      body.getChild(i+1).removeFromParent();

    }
  }
}
