opera.contextMenus.create({
  title: "Convert to",
  id: "mm-text-converter",
  contexts:["selection", "editable"]
});


opera.contextMenus.create({
    "title" : "Unicode",
    parentId: "mm-text-converter",
    "contexts": ["selection", "editable"],
    "onclick" : function(e, tab) {

        opera.tabs.sendMessage(tab.id, {text: e.selectionText, convertTo: 'unicode'});

    }
});


opera.contextMenus.create({
    "title" : "Zawgyi",
    parentId: "mm-text-converter",
    "contexts": ["selection", "editable"],
    "onclick" : function(e, tab) {

        opera.tabs.sendMessage(tab.id, {text: e.selectionText, convertTo: 'zawgyi'});

    }
});
