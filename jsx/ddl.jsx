﻿
$._Ext_IDSN = {

escapeHtml : function(unsafe) {
                 return unsafe
                     .replace(/&/g, "&amp")
                     .replace(/</g, "&lt")
                     .replace(/>/g, "&gt")
                     .replace(/"/g, "&quot")
                     .replace(/'/g, "&#039");
             },

generateHTML : function() {
                   var html = '<!doctype html>\
                              <html>\
                              <head>\
                              <meta charset="utf-8">\
                              <script src="./lib/jquery-1.9.1.js">\</script>\
                              <script src="./lib/CSInterface.6.js">\</script>\
                              <script src="./lib/select2-4.0.3/dist/js/select2.full.js">\</script>\
                              <script src="./js/select2.keydown.js">\</script>\
                              <link rel="stylesheet" href="lib/select2-4.0.3/dist/css/select2.css"/>\
                              <link rel="stylesheet" href="css/styles.css"/>\
                              </head>\
                              <body onload="onLoad()">\
                              <div>\
                              <span id="menuListSpan">\
                              <select id="menuList"  autofocus>\n';

                   var menuActions = app.menuActions;
                   for (var i = 0; i < menuActions.length; i++) {
                       var showStr = menuActions[i].name;
                       if (menuActions[i].area != null && menuActions[i].area.length > 0) {
                           showStr = menuActions[i].area + ">" + menuActions[i].name;
                       }
                       html += "				<option value=\"" + menuActions[i].id + "\">" 
                           + $._Ext_IDSN.escapeHtml(showStr) + "</option>\n";
                   }

                   html += '		</select>\
                           </span>\
                           </div>\
                           </body>\
                           <script src="./js/main.js">\</script>\
                           </html>\n';

                   return html;
               },

getMenuOptions : function() {
                     var allOptions = "";

                     var menuActions = app.menuActions;
                     for (var i = 0; i < menuActions.length; i++) {
                         var showStr = menuActions[i].name;
                         if (menuActions[i].area != null && menuActions[i].area.length > 0) {
                             showStr = menuActions[i].area + ">" + menuActions[i].name;
                         }
                         allOptions += "\n<option value=\"" + menuActions[i].id + "\">" 
                             + $._Ext_IDSN.escapeHtml(showStr) + "</option>\\";
                     }

                     return allOptions;
                 },

selectWithOptions : function() {
                        var select = 'document.write(\ \'<select id="menuList"  autofocus>\\' 
                                + $._Ext_IDSN.getMenuOptions()
                                + '\n</select> \');';
                        return select;
                    },

doesFileExist : function(filePath) {
                    return new File(filePath).exists ? "Yes" : "No";
                },

}

