﻿$._Ext_IDSN = {	escapeHtml : function(unsafe) {		return unsafe		.replace(/&/g, "&amp")		.replace(/</g, "&lt")		.replace(/>/g, "&gt")		.replace(/"/g, "&quot")		.replace(/'/g, "&#039");	},	allOptionsHTML : function() {		var menuActions = app.menuActions;		var allOptions = "\n<option value=\"0\" id=\"placeholder\" class=\"placeholder\" disabled selected hidden>Search...</option>\\";		for (var i = 0; i < menuActions.length; i++) {			var showStr = menuActions[i].name;			if (menuActions[i].area != null && menuActions[i].area.length > 0) {				showStr = menuActions[i].area + ">" + menuActions[i].name;			}			allOptions += "\n<option value=\"" + menuActions[i].id + "\">" + $._Ext_IDSN.escapeHtml(showStr) + "</option>\\";		}		return allOptions;	},	selectWithOptions : function() {		var options = $._Ext_IDSN.allOptionsHTML();		var select = 'document.write(\'<select id="myselect"  class="myselectstyle"   autofocus=true>\\' 		+ options 		+ '\n</select> \');';		return select;	},	doesFileExist : function(filePath) {		return new File(filePath).exists ? "Yes" : "No";	},}