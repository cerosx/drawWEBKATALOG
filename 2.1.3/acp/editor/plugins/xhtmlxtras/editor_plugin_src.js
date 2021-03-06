/**
 * $Id: editor_plugin_src.js 201 2007-02-12 15:56:56Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright � 2004-2007, Moxiecode Systems AB, All rights reserved.
 */

(function() {
	tinymce.create('tinymce.plugins.XHTMLXtrasPlugin', {
		XHTMLXtrasPlugin : function(ed, url) {
			// Register commands
			ed.addCommand('mceCite', function() {
				ed.windowManager.open({
					file : url + '/cite.htm',
					width : 350,
					height : 250,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceAcronym', function() {
				ed.windowManager.open({
					file : url + '/acronym.htm',
					width : 350,
					height : 250,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceAbbr', function() {
				ed.windowManager.open({
					file : url + '/abbr.htm',
					width : 350,
					height : 250,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceDel', function() {
				ed.windowManager.open({
					file : url + '/del.htm',
					width : 350,
					height : 310,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceIns', function() {
				ed.windowManager.open({
					file : url + '/ins.htm',
					width : 350,
					height : 310,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			ed.addCommand('mceAttributes', function() {
				ed.windowManager.open({
					file : url + '/attributes.htm',
					width : 380,
					height : 370,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('cite', 'xhtmlxtras.cite_desc', 'mceCite');
			ed.addButton('acronym', 'xhtmlxtras.acronym_desc', 'mceAcronym');
			ed.addButton('abbr', 'xhtmlxtras.abbr_desc', 'mceAbbr');
			ed.addButton('del', 'xhtmlxtras.del_desc', 'mceDel');
			ed.addButton('ins', 'xhtmlxtras.ins_desc', 'mceIns');
			ed.addButton('attribs', 'xhtmlxtras.attribs_desc', 'mceAttributes');

			if (tinymce.isIE) {
				ed.onPostProcess.add(function(o) {
					if (o.set) {
						o.content = o.content.replace(/<abbr([^>]+)>/gi, '<html:ABBR $1>');
						o.content = o.content.replace(/<\/abbr>/gi, '</html:ABBR>');
					}
				});
			}

			ed.onNodeChange.add(function(cm, n, co) {
				n = ed.dom.getParent(n, 'CITE,ACRONYM,ABBR,DEL,INS');

				cm.setDisabled('cite', co);
				cm.setDisabled('acronym', co);
				cm.setDisabled('abbr', co);
				cm.setDisabled('del', co);
				cm.setDisabled('ins', co);
				cm.setDisabled('attribs', n && n.nodeName == 'BODY');

				if (n) {
					cm.setDisabled(n.nodeName.toLowerCase(), 0);
					cm.setActive(n.nodeName.toLowerCase(), 1);
				} else {
					cm.setActive('cite', 0);
					cm.setActive('acronym', 0);
					cm.setActive('abbr', 0);
					cm.setActive('del', 0);
					cm.setActive('ins', 0);
				}
			});
		},

		getInfo : function() {
			return {
				longname : 'XHTML Xtras Plugin',
				author : 'Moxiecode Systems AB',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/xhtmlxtras',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('xhtmlxtras', tinymce.plugins.XHTMLXtrasPlugin);
})();