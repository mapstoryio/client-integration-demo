var wpop_horizontal_indent = 60;
var wpop_vertical_indent = 60;
var wpop_active_element = "";
var wpop_displayed = false;
var wpop_subscribing = false;

function wpop_init() {
	jQuery(window).resize(function() {
		if (wpop_active_element == "tab") wpop_tab_position();
		else if (wpop_active_element == "panel") wpop_panel_position();
	});
	var wpop_state = wpop_read_cookie("wpop-state");
	if (wpop_remember_state == "on" && wpop_state == "tab") wpop_show_tab();
	else if (wpop_remember_state == "on" && wpop_state == "panel") wpop_show_panel();
	else {
		var wpop_subscribed = wpop_read_cookie("wpop-subscribed");
		if (wpop_subscribed == wpop_cookie_value) wpop_show_tab();
		else {
			if (wpop_onload_enable == "on") {
				if (wpop_onload_delay == 0) wpop_show_panel();
				else {
					wpop_show_tab();
					setTimeout(function() {
						if (!wpop_displayed) wpop_show_panel();
					}, wpop_onload_delay);
				}
			} else wpop_show_tab();
		}
	}
}

function wpop_show_tab() {
	if (wpop_active_element == "panel") {
		var viewport = {
			width: Math.max(240, jQuery(window).width()),
			height: Math.max(240, jQuery(window).height())
		};
		var panel = jQuery(".wpop-panel");
		var panel_width = parseInt(jQuery(panel).width(), 10);
		var panel_height = parseInt(jQuery(panel).height(), 10);
		var panel_property;
		
		if (jQuery(panel).hasClass("wpop-panel-bottom-left") || jQuery(panel).hasClass("wpop-panel-bottom-center") || jQuery(panel).hasClass("wpop-panel-bottom-right")) {
			panel_property = {"bottom" : "-"+panel_height+"px"};
		} else if (jQuery(panel).hasClass("wpop-panel-top-left") || jQuery(panel).hasClass("wpop-panel-top-center") || jQuery(panel).hasClass("wpop-panel-top-right")) {
			panel_property = {"top" : "-"+panel_height+"px"};
		} else if (jQuery(panel).hasClass("wpop-panel-left-top") || jQuery(panel).hasClass("wpop-panel-left-middle") || jQuery(panel).hasClass("wpop-panel-left-bottom")) {
			panel_property = {"left" : "-"+panel_width+"px"};
		} else if (jQuery(panel).hasClass("wpop-panel-right-top") || jQuery(panel).hasClass("wpop-panel-right-middle") || jQuery(panel).hasClass("wpop-panel-right-bottom")) {
			panel_property = {"right" : "-"+panel_width+"px"};
		}
		jQuery(panel).animate(panel_property, 300, function() {
			var intro_encoded = jQuery(".wpop-content-prefix").attr("data-base64");
			var outro_encoded = jQuery(".wpop-content-suffix").attr("data-base64");
			if (intro_encoded) {
				jQuery(".wpop-content-prefix").html(wpop_encode64(jQuery(".wpop-content-prefix").html()));
			}
			if (outro_encoded) {
				jQuery(".wpop-content-suffix").html(wpop_encode64(jQuery(".wpop-content-suffix").html()));
			}
			_wpop_show_tab();
		});
	} else if (wpop_active_element != "tab") {
		_wpop_show_tab();
	}
}
function _wpop_show_tab() {
	if (wpop_remember_state == "on") wpop_write_cookie("wpop-state", "tab", 180);
	jQuery(".wpop-panel").hide();
	var tab = jQuery(".wpop-tab");
	wpop_tab_position();
	var tab_width = parseInt(jQuery(tab).width(), 10);
	var tab_height = parseInt(jQuery(tab).height(), 10);
	jQuery(tab).show();
	wpop_active_element = "tab";
	if (jQuery(tab).hasClass("wpop-tab-bottom-left") || jQuery(tab).hasClass("wpop-tab-bottom-center") || jQuery(tab).hasClass("wpop-tab-bottom-right") || jQuery(tab).hasClass("wpop-tab-image-bottom-left") || jQuery(tab).hasClass("wpop-tab-image-bottom-center") || jQuery(tab).hasClass("wpop-tab-image-bottom-right")) {
		jQuery(tab).css({"bottom" : "-"+tab_height+"px"});
		jQuery(tab).animate({"bottom" : "0px"}, 100);
	} else if (jQuery(tab).hasClass("wpop-tab-top-left") || jQuery(tab).hasClass("wpop-tab-top-center") || jQuery(tab).hasClass("wpop-tab-top-right") || jQuery(tab).hasClass("wpop-tab-image-top-left") || jQuery(tab).hasClass("wpop-tab-image-top-center") || jQuery(tab).hasClass("wpop-tab-image-top-right")) {
		jQuery(tab).css({"top" : "-"+tab_height+"px"});
		jQuery(tab).animate({"top" : "0px"}, 100);
	} else if (jQuery(tab).hasClass("wpop-tab-left-top") || jQuery(tab).hasClass("wpop-tab-left-middle") || jQuery(tab).hasClass("wpop-tab-left-bottom")) {
		jQuery(tab).css({"left" : "-"+tab_height+"px"});
		jQuery(tab).animate({"left" : "0px"}, 100);
	} else if (jQuery(tab).hasClass("wpop-tab-right-top") || jQuery(tab).hasClass("wpop-tab-right-middle") || jQuery(tab).hasClass("wpop-tab-right-bottom")) {
		jQuery(tab).css({"right" : "-"+tab_height+"px"});
		jQuery(tab).animate({"right" : "0px"}, 100);
	} else if (jQuery(tab).hasClass("wpop-tab-image-left-top") || jQuery(tab).hasClass("wpop-tab-image-left-middle") || jQuery(tab).hasClass("wpop-tab-image-left-bottom")) {
		jQuery(tab).css({"left" : "-"+tab_width+"px"});
		jQuery(tab).animate({"left" : "0px"}, 100);
	} else if (jQuery(tab).hasClass("wpop-tab-image-right-top") || jQuery(tab).hasClass("wpop-tab-image-right-middle") || jQuery(tab).hasClass("wpop-tab-image-right-bottom")) {
		jQuery(tab).css({"right" : "-"+tab_width+"px"});
		jQuery(tab).animate({"right" : "0px"}, 100);
	}
}
function wpop_tab_position() {
	var viewport = {
		width: Math.max(240, jQuery(window).width()),
		height: Math.max(240, jQuery(window).height())
	};
	var tab = jQuery(".wpop-tab");
	var tab_width = parseInt(jQuery(tab).width(), 10);
	var tab_height = parseInt(jQuery(tab).height(), 10);
	if (jQuery(tab).hasClass("wpop-tab-bottom-left") || jQuery(tab).hasClass("wpop-tab-top-left") || jQuery(tab).hasClass("wpop-tab-image-bottom-left") || jQuery(tab).hasClass("wpop-tab-image-top-left")) {
		if (tab_width + wpop_horizontal_indent >= viewport.width - wpop_horizontal_indent) jQuery(tab).css({"left" : "0px"});
		else jQuery(tab).css({"left" : wpop_horizontal_indent+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-bottom-center") || jQuery(tab).hasClass("wpop-tab-top-center") || jQuery(tab).hasClass("wpop-tab-image-bottom-center") || jQuery(tab).hasClass("wpop-tab-image-top-center")) {
		if (tab_width >= viewport.width) jQuery(tab).css({"left" : "0px"});
		else jQuery(tab).css({"left" : parseInt((viewport.width-tab_width)/2, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-bottom-right") || jQuery(tab).hasClass("wpop-tab-top-right") || jQuery(tab).hasClass("wpop-tab-image-bottom-right") || jQuery(tab).hasClass("wpop-tab-image-top-right")) {
		if (tab_width + wpop_horizontal_indent >= viewport.width - wpop_horizontal_indent) jQuery(tab).css({"left" : parseInt((viewport.width - tab_width), 10)+"px"});
		else jQuery(tab).css({"left" : parseInt((viewport.width - tab_width - wpop_horizontal_indent), 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-right-top")) {
		if (tab_width + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : "-"+tab_height+"px"});
		else jQuery(tab).css({"top" : parseInt(wpop_vertical_indent - tab_height, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-right-middle")) {
		if (tab_width >= viewport.height) jQuery(tab).css({"top" : "-"+tab_height+"px"});
		else jQuery(tab).css({"top" : parseInt((viewport.height-tab_width)/2 - tab_height, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-right-bottom")) {
		if (tab_width + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : parseInt(viewport.height - tab_width - tab_height, 10)+"px"});
		else jQuery(tab).css({"top" : parseInt(viewport.height - tab_width - wpop_vertical_indent, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-left-top")) {
		if (tab_width + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : tab_width+"px"});
		else jQuery(tab).css({"top" : parseInt(wpop_vertical_indent + tab_width, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-left-middle")) {
		if (tab_width >= viewport.height) jQuery(tab).css({"top" : "0px"});
		else jQuery(tab).css({"top" : parseInt((viewport.height-tab_width)/2 + tab_width, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-left-bottom")) {
		if (tab_width + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : viewport.height+"px"});
		else jQuery(tab).css({"top" : parseInt(viewport.height - wpop_vertical_indent, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-image-left-top") || jQuery(tab).hasClass("wpop-tab-image-right-top")) {
		if (tab_height + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : "0px"});
		else jQuery(tab).css({"top" : wpop_vertical_indent+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-image-left-middle") || jQuery(tab).hasClass("wpop-tab-image-right-middle")) {
		if (tab_height >= viewport.height) jQuery(tab).css({"top" : "0px"});
		else jQuery(tab).css({"top" : parseInt((viewport.height-tab_height)/2, 10)+"px"});
	} else if (jQuery(tab).hasClass("wpop-tab-image-left-bottom") || jQuery(tab).hasClass("wpop-tab-image-right-bottom")) {
		if (tab_height + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(tab).css({"top" : parseInt(viewport.height - tab_height, 10)+"px"});
		else jQuery(tab).css({"top" : parseInt(viewport.height - tab_height - wpop_vertical_indent, 10)+"px"});
	}
}

function wpop_show_panel() {
	wpop_displayed = true;
	if (wpop_remember_state == "on") wpop_write_cookie("wpop-state", "panel", 180);
	
	if (wpop_active_element == "tab") {
		var viewport = {
			width: Math.max(240, jQuery(window).width()),
			height: Math.max(240, jQuery(window).height())
		};
		var tab = jQuery(".wpop-tab");
		var tab_width = parseInt(jQuery(tab).width(), 10);
		var tab_height = parseInt(jQuery(tab).height(), 10);
		var tab_property;
		
		if (jQuery(tab).hasClass("wpop-tab-bottom-left") || jQuery(tab).hasClass("wpop-tab-bottom-center") || jQuery(tab).hasClass("wpop-tab-bottom-right") || jQuery(tab).hasClass("wpop-tab-image-bottom-left") || jQuery(tab).hasClass("wpop-tab-image-bottom-center") || jQuery(tab).hasClass("wpop-tab-image-bottom-right")) {
			tab_property = {"bottom" : "-"+tab_height+"px"};
		} else if (jQuery(tab).hasClass("wpop-tab-top-left") || jQuery(tab).hasClass("wpop-tab-top-center") || jQuery(tab).hasClass("wpop-tab-top-right") || jQuery(tab).hasClass("wpop-tab-image-top-left") || jQuery(tab).hasClass("wpop-tab-image-top-center") || jQuery(tab).hasClass("wpop-tab-image-top-right")) {
			tab_property = {"top" : "-"+tab_height+"px"};
		} else if (jQuery(tab).hasClass("wpop-tab-left-top") || jQuery(tab).hasClass("wpop-tab-left-middle") || jQuery(tab).hasClass("wpop-tab-left-bottom")) {
			tab_property = {"left" : "-"+tab_height+"px"};
		} else if (jQuery(tab).hasClass("wpop-tab-right-top") || jQuery(tab).hasClass("wpop-tab-right-middle") || jQuery(tab).hasClass("wpop-tab-right-bottom")) {
			tab_property = {"right" : "-"+tab_height+"px"};
		} else if (jQuery(tab).hasClass("wpop-tab-image-left-top") || jQuery(tab).hasClass("wpop-tab-image-left-middle") || jQuery(tab).hasClass("wpop-tab-image-left-bottom")) {
			tab_property = {"left" : "-"+tab_width+"px"};
		} else if (jQuery(tab).hasClass("wpop-tab-image-right-top") || jQuery(tab).hasClass("wpop-tab-image-right-middle") || jQuery(tab).hasClass("wpop-tab-image-right-bottom")) {
			tab_property = {"right" : "-"+tab_width+"px"};
		}
		jQuery(tab).animate(tab_property, 100, function() {
			_wpop_show_panel();
		});
	} else {
		_wpop_show_panel();
	}
}
function _wpop_show_panel() {
	jQuery(".wpop-tab").hide();
	var panel = jQuery(".wpop-panel");
	var intro_encoded = jQuery(".wpop-content-prefix").attr("data-base64");
	var outro_encoded = jQuery(".wpop-content-suffix").attr("data-base64");
	if (intro_encoded) {
		jQuery(".wpop-content-prefix").html(wpop_decode64(jQuery(".wpop-content-prefix").html()));
	}
	if (outro_encoded) {
		jQuery(".wpop-content-suffix").html(wpop_decode64(jQuery(".wpop-content-suffix").html()));
	}
	wpop_panel_position();
	var panel_width = parseInt(jQuery(panel).width(), 10);
	var panel_height = parseInt(jQuery(panel).height(), 10);
	jQuery(panel).show();
	wpop_active_element = "panel";
	if (jQuery(panel).hasClass("wpop-panel-bottom-left") || jQuery(panel).hasClass("wpop-panel-bottom-center") || jQuery(panel).hasClass("wpop-panel-bottom-right")) {
		jQuery(panel).css({"bottom" : "-"+panel_height+"px"});
		jQuery(panel).animate({"bottom" : "0px"}, 300);
	} else if (jQuery(panel).hasClass("wpop-panel-top-left") || jQuery(panel).hasClass("wpop-panel-top-center") || jQuery(panel).hasClass("wpop-panel-top-right")) {
		jQuery(panel).css({"top" : "-"+panel_height+"px"});
		jQuery(panel).animate({"top" : "0px"}, 300);
	} else if (jQuery(panel).hasClass("wpop-panel-left-top") || jQuery(panel).hasClass("wpop-panel-left-middle") || jQuery(panel).hasClass("wpop-panel-left-bottom")) {
		jQuery(panel).css({"left" : "-"+panel_width+"px"});
		jQuery(panel).animate({"left" : "0px"}, 300);
	} else if (jQuery(panel).hasClass("wpop-panel-right-top") || jQuery(panel).hasClass("wpop-panel-right-middle") || jQuery(panel).hasClass("wpop-panel-right-bottom")) {
		jQuery(panel).css({"right" : "-"+panel_width+"px"});
		jQuery(panel).animate({"right" : "0px"}, 300);
	}
}
function wpop_panel_position() {
	var viewport = {
		width: Math.max(240, jQuery(window).width()),
		height: Math.max(240, jQuery(window).height())
	};
	var panel = jQuery(".wpop-panel");
	
	var panel_width = parseInt(jQuery(panel).attr("data-width"), 10);
	if (panel_width > viewport.width) {
		panel_width = viewport.width;
		jQuery(panel).width(panel_width);
	}
	jQuery(panel).css({"height" : "auto", "width" : panel_width+"px"});
	jQuery(".wpop-panel-content").css({"height" : "auto"});
	var panel_height = parseInt(jQuery(panel).height(), 10);
	if (panel_height > viewport.height) {
		panel_height = viewport.height;
		jQuery(panel).height(panel_height);
		jQuery(".wpop-panel-content").height(panel_height-30);
		if (jQuery.fn.perfectScrollbar) jQuery(".wpop-panel-content").perfectScrollbar({suppressScrollX: true});
	} else {
		if (jQuery.fn.perfectScrollbar) jQuery(".wpop-panel-content").perfectScrollbar("destroy");
	}
	
	if (jQuery(panel).hasClass("wpop-panel-bottom-left") || jQuery(panel).hasClass("wpop-panel-top-left")) {
		if (panel_width + wpop_horizontal_indent >= viewport.width - wpop_horizontal_indent) jQuery(panel).css({"left" : "0px"});
		else jQuery(panel).css({"left" : wpop_horizontal_indent+"px"});
	} else if (jQuery(panel).hasClass("wpop-panel-bottom-center") || jQuery(panel).hasClass("wpop-panel-top-center")) {
		if (panel_width >= viewport.width) jQuery(panel).css({"left" : "0px"});
		else jQuery(panel).css({"left" : parseInt((viewport.width-panel_width)/2, 10)+"px"});
	} else if (jQuery(panel).hasClass("wpop-panel-bottom-right") || jQuery(panel).hasClass("wpop-panel-top-right")) {
		if (panel_width + wpop_horizontal_indent >= viewport.width - wpop_horizontal_indent) jQuery(panel).css({"left" : parseInt((viewport.width - panel_width), 10)+"px"});
		else jQuery(panel).css({"left" : parseInt((viewport.width - panel_width - wpop_horizontal_indent), 10)+"px"});
	} else if (jQuery(panel).hasClass("wpop-panel-left-top") || jQuery(panel).hasClass("wpop-panel-right-top")) {
		if (panel_height + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(panel).css({"top" : "0px"});
		else jQuery(panel).css({"top" : wpop_vertical_indent+"px"});
	} else if (jQuery(panel).hasClass("wpop-panel-left-middle") || jQuery(panel).hasClass("wpop-panel-right-middle")) {
		if (panel_height >= viewport.height) jQuery(panel).css({"top" : "0px"});
		else jQuery(panel).css({"top" : parseInt((viewport.height-panel_height)/2, 10)+"px"});
	} else if (jQuery(panel).hasClass("wpop-panel-left-bottom") || jQuery(panel).hasClass("wpop-panel-right-bottom")) {
		if (panel_height + wpop_vertical_indent >= viewport.height - wpop_vertical_indent) jQuery(panel).css({"top" : parseInt(viewport.height - panel_height, 10)+"px"});
		else jQuery(panel).css({"top" : parseInt(viewport.height - panel_height - wpop_vertical_indent, 10)+"px"});
	}
}

function wpop_subscribe() {
	if (wpop_subscribing) return false;
	wpop_subscribing = true;
	jQuery(".wpop-input-error").removeClass("wpop-input-error");
	var button_label_loading = "<i class='fa fa-spinner fa-spin'></i>&nbsp; "+jQuery("#wpop-submit").attr("data-loading");
	var button_icon = "<i class='fa "+jQuery("#wpop-submit").attr("data-fa-icon")+"'></i>&nbsp; ";
	var button_label = button_icon+jQuery("#wpop-submit").attr("data-label");
	jQuery('#wpop-submit').html(button_label_loading);
	var gdpr = 'off';
	if (jQuery("#wpop-gdpr").is(":checked")) gdpr = 'on';
	
	jQuery.post(wpop_ajax_url, {
		"wpop-name" 	: jQuery("#wpop-name").val(),
		"wpop-email" 	: jQuery("#wpop-email").val(),
		"wpop-gdpr"		: gdpr,
		"action" 		: "wpop_subscribe"
		}, function(return_data) {
			//alert(return_data);
			var data;
			jQuery("#wpop-submit").html(button_label);
			try {
				var data = jQuery.parseJSON(return_data);
				var status = data.status;
				if (status == "OK") {
					wpop_write_cookie("wpop-subscribed", wpop_cookie_value, 180);
					var button_label_subscribed = button_icon+jQuery("#wpop-submit").attr("data-subscribed");
					jQuery('#wpop-submit').html(button_label_subscribed);
					if (wpop_success_close_enable == "on") {
						setTimeout(function() {
							wpop_show_tab();
							jQuery("#wpop-name").val("");
							jQuery("#wpop-email").val("");
							jQuery("#wpop-gdpr").prop("checked", false);
							jQuery("#wpop-submit").html(button_label);
							wpop_subscribing = false;
						}, wpop_success_close_delay);
					} else {
						setTimeout(function() {
							jQuery("#wpop-name").val("");
							jQuery("#wpop-email").val("");
							jQuery("#wpop-gdpr").prop("checked", false);
							jQuery("#wpop-submit").html(button_label);
							wpop_subscribing = false;
						}, 3000);
					}
				} else if (status == "ERROR") {
					wpop_subscribing = false;
					if (data.name == 'ERROR') jQuery("#wpop-name").addClass("wpop-input-error");
					if (data.email == 'ERROR') jQuery("#wpop-email").addClass("wpop-input-error");
					if (data.gdpr == 'ERROR') jQuery("#wpop-gdpr").parent().addClass("wpop-input-error");
				} else {
					wpop_subscribing = false;
					jQuery("#wpop-submit").html("Error!");
				}
			} catch(error) {
				wpop_subscribing = false;
				jQuery("#wpop-submit").html("Error!");
			}
		}
	);
	return false;
}

function wpop_encode64 (data) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	ac = 0,
	enc = "",
	tmp_arr = [];
	if (!data) return data;
	do {
		o1 = data.charCodeAt(i++);
		o2 = data.charCodeAt(i++);
		o3 = data.charCodeAt(i++);

		bits = o1 << 16 | o2 << 8 | o3;

		h1 = bits >> 18 & 0x3f;
		h2 = bits >> 12 & 0x3f;
		h3 = bits >> 6 & 0x3f;
		h4 = bits & 0x3f;

		tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
	} while (i < data.length);
	enc = tmp_arr.join('');
	var r = data.length % 3;
	return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
}
function wpop_decode64(input) {
	var output = "";
	var chr1, chr2, chr3 = "";
	var enc1, enc2, enc3, enc4 = "";
	var i = 0;
	var keyStr = "ABCDEFGHIJKLMNOP" +
		"QRSTUVWXYZabcdef" +
		"ghijklmnopqrstuv" +
		"wxyz0123456789+/" +
		"=";
	var base64test = /[^A-Za-z0-9\+\/\=]/g;
	if (base64test.exec(input)) return "";
	input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

	do {
		enc1 = keyStr.indexOf(input.charAt(i++));
		enc2 = keyStr.indexOf(input.charAt(i++));
		enc3 = keyStr.indexOf(input.charAt(i++));
		enc4 = keyStr.indexOf(input.charAt(i++));

		chr1 = (enc1 << 2) | (enc2 >> 4);
		chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		chr3 = ((enc3 & 3) << 6) | enc4;

		output = output + String.fromCharCode(chr1);

		if (enc3 != 64) {
			output = output + String.fromCharCode(chr2);
		}
		if (enc4 != 64) {
			output = output + String.fromCharCode(chr3);
		}

		chr1 = chr2 = chr3 = "";
		enc1 = enc2 = enc3 = enc4 = "";

	} while (i < input.length);
	return unescape(output);
}
function wpop_read_cookie(key) {
	var pairs = document.cookie.split("; ");
	for (var i = 0, pair; pair = pairs[i] && pairs[i].split("="); i++) {
		if (pair[0] === key) return pair[1] || "";
	}
	return null;
}
function wpop_write_cookie(key, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else var expires = "";
	document.cookie = key+"="+value+expires+"; path=/";
}