+function(t) {
"use strict";
function e(e, i) {
return this.each(function() {
var n = t(this), s = n.data("timer"), r = t.extend({}, o.prototype.DEFAULTS, n.data(), "object" == typeof e && e);
s || n.data("timer", s = new o(this, r)), "string" == typeof e && s[e](i);
});
}
var o = function(e, o) {
this.$element = t(e), this.options = o, this.timeout = null, this.start();
};
o.prototype.DEFAULTS = {
timerFormat: "{D} {H} {M} {S}",
digitFormat: "<span class='number'>{number}</span> <span class='word'>{word}</span>",
language: {
d: {
0: "Day",
1: "Days",
2: "Days"
},
h: {
0: "Hour",
1: "Hours",
2: "Hours"
},
m: {
0: "Minute",
1: "Minutes",
2: "Minutes"
},
s: {
0: "Second",
1: "Seconds",
2: "Seconds"
}
},
tickInterval: 1e3
}, o.prototype.start = function() {
var e = this.options.to, o = this.options.now;
return !e || !o || o >= e ? !1 : void (this.timeout = setInterval(t.proxy(this.tick, this), this.options.tickInterval));
}, o.prototype.stop = function() {
clearInterval(this.timeout);
}, o.prototype.tick = function() {
var e = this.options.to, o = this.options.now, i = e - o, n = 0, s = 0, r = 0, a = 0;
return this.$element.data("now", this.options.now = o + this.options.tickInterval / 1e3), 
o >= e ? (this.stop(), void this.$element.trigger(t.Event("timer.finished"))) : (i > 86400 && (n = Math.floor(i / 86400), 
i -= 86400 * n), i > 3600 && (s = Math.floor(i / 3600), i -= 3600 * s), i > 60 && (r = Math.floor(i / 60), 
i -= 60 * r), a = Math.floor(i), void this.setTime(n, s, r, a));
}, o.prototype.setTime = function(t, e, o, i) {
var n = this.options.timerFormat.replace("{D}", this.options.digitFormat.replace("{number}", t).replace("{word}", this.numForm(t, this.options.language.d))).replace("{H}", this.options.digitFormat.replace("{number}", e).replace("{word}", this.numForm(e, this.options.language.h))).replace("{M}", this.options.digitFormat.replace("{number}", o).replace("{word}", this.numForm(o, this.options.language.m))).replace("{S}", this.options.digitFormat.replace("{number}", i).replace("{word}", this.numForm(i, this.options.language.s)));
this.$element.html(n);
}, o.prototype.numForm = function(t, e) {
return t % 10 == 1 && t % 100 != 11 ? e[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? e[1] : e[2];
}, t.fn.timer = e, t.fn.timer.Constructor = o;
}(jQuery), +function(t) {
"use strict";
var e = '<div class="modal" id="remoteModal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-loader"></div></div></div></div>';
t(document).off("click.bs.modal.data-api"), t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(o) {
var i = t(this), n = i.attr("href"), s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")), r = s.data("bs.modal") ? "toggle" : t.extend({
remote: !/#/.test(n) && n
}, s.data(), i.data());
i.is("a") && o.preventDefault(), r.remote && !s.length && (s = t(e).appendTo(document.body), 
r.addClass && s.addClass(r.addClass), r.width && s.find(".modal-dialog").width(r.width), 
s.one("hidden.bs.modal", function() {
s.remove();
})), s.one("show.bs.modal", function(t) {
t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
i.is(":visible") && i.trigger("focus");
});
}), t.fn.modal.call(s, r, this);
});
}(jQuery), $(function() {
var t = $("#footer-back-to-top");
t.length && (t.click(function() {
$(window).scrollTop(0);
}), $(window).scroll(function() {
$(window).scrollTop() > 100 ? t.removeClass("offscreen") : t.addClass("offscreen");
}));
});

var Auth = {
popup: function(t, e) {
e = e ? "&" + e : "", window.open("/signin/service?api=" + t + e, "oauth_popup", "width=620,height=350,resizable=yes,location=yes,left=100,top=100").focus();
}
}, Battle = {
selected: 1,
init: function(t) {
$.extend(this, t), this.$modal = $("#modal-vote"), "new" == this.okVersion && this.initNewOk();
},
initNewOk: function() {
function t() {
var t = e.url + "?from=ok&stamp=" + e.timeStamp + "&sel=", o = "{width:45,height:50,st:'rounded',sz:45,nt:1,nc:1}", i = "{width:125,height:50,st:'rounded',sz:45,ck:1,nc:1}", n = "{width:100,height:100,st:'rounded',sz:100,nt:1,nc:1}";
e.okReferrer ? (OK.CONNECT.insertShareWidget("okvoteopt1", t + "1", i), OK.CONNECT.insertShareWidget("okvoteopt2", t + "2", i), 
e.opts > 2 && OK.CONNECT.insertShareWidget("okvoteopt3", t + "3", i), e.opts > 3 && OK.CONNECT.insertShareWidget("okvoteopt4", t + "4", i), 
e.opts > 4 && OK.CONNECT.insertShareWidget("okvoteopt5", t + "5", i)) : e.$modal.on("shown.bs.modal", function() {
var o = document.getElementById("okvotesel" + e.selected);
if (o) {
for (;o.firstChild; ) o.removeChild(o.firstChild);
OK.CONNECT.insertShareWidget("okvotesel" + e.selected, t + e.selected, n);
}
}), OK.CONNECT.insertShareWidget("okvoted", t + "1", o);
}
var e = this;
this.onOkConnectShare = function(t) {
var o = "string" == typeof t.data ? t.data.split("$") : [];
"ok_shared" == o[0] && (e.selected = $("#" + o[1]).parent().data("vote"), e.sendVote(), 
ga("send", "event", "Battle", "Vote", "OK", e.selected));
}, window.addEventListener ? window.addEventListener("message", this.onOkConnectShare, !1) : window.attachEvent("onmessage", this.onOkConnectShare), 
!function(e) {
var o = e.createElement("script");
o.src = "https://connect.ok.ru/connect.js", o.onload = o.onreadystatechange = function() {
this.readyState && "loaded" != this.readyState && "complete" != this.readyState || this.executed || (this.executed = !0, 
setTimeout(function() {
t();
}, 0));
}, e.documentElement.appendChild(o);
}(document);
},
sendVote: function() {
var t = $("#vote-num-" + this.selected);
return $.get("/vote/" + this.idVote + "/" + this.selected), this.$modal && this.$modal.modal("hide"), 
t.text(parseInt(t.text()) + 1), $(".option-vote-btn").hide(), $("#battle-voted").show(), 
this.onOkConnectShare && (window.removeEventListener ? window.removeEventListener("message", this.onOkConnectShare, !1) : window.detachEvent("onmessage", this.onOkConnectShare)), 
!1;
},
initPopup: function(t) {
return this.selected = t, "new" == this.okVersion && (this.$modal.find("div.ok").hide(), 
$("#okvotesel" + this.selected).show()), this.$modal.modal("show"), ga("send", "event", "Battle", "Show Modal", {
nonInteraction: !0
}), !1;
},
okVote: function(t) {
return this.selected = t, this.votePopup("ok"), !1;
},
votePopup: function(t, e) {
var o, i, n;
return i = this["pic" + this.selected], o = this["share" + this.selected], "fb" === t ? (n = "https://www.facebook.com/dialog/share?app_id=304218482961143&display=popup", 
n += "&href=" + encodeURIComponent(this.url)) : "vk" === t ? (n = "http://vkontakte.ru/share.php?", 
n += "url=" + encodeURIComponent(this.url + "?from=vk"), n += "&title=" + encodeURIComponent(this.text + " " + o), 
n += "&image=" + encodeURIComponent(this.promo), n += "&noparse=true") : "ok" === t && (n = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1", 
n += "&st.comments=" + encodeURIComponent(o), n += "&st._surl=" + encodeURIComponent(this.url + "?from=ok")), 
window.open(n, "", "toolbar=0,status=0,width=626,height=436"), e || ga("send", "event", "Battle", "Vote", t.toUpperCase(), this.selected), 
e ? !1 : this.sendVote();
},
voteResetConfirm: function(t, e) {
var o = $(t).parent().children(), i = $(t).parents(".modal");
return o.prop("disabled", !0), $.getJSON("/vote/reset/" + e, {
confirmed: !0
}, function(t) {
t.success ? (o.prop("disabled", !1), o.last().hide(), i.find(".alert-success").show(), 
i.find(".alert-info").hide(), i.one("hidden.bs.modal", function() {
window.location.reload();
})) : toastr.error("common.error");
}), !1;
}
}, Comments = function(t) {
return {
init: function(e, o) {
var i = this;
this.$wrap = t("#comments"), this.$form = t("#comment-add-form"), this.$formWrap = t("#comment-add-wrap"), 
this.$total = t("#comments-count"), this.$text = this.$form.find("textarea"), this.$parent = this.$form.find('[name="parent_id"]'), 
this.loggedIn = e, this.loading = !1, this.loggedIn || this.$form.find("textarea").on("focus", function() {
t("#comments-login").modal();
}), this.$wrap.on("click", ".reply-link", function(t) {
i.showReplyForm(t, this);
}).on("click", ".reply-cancel", function(t) {
i.resetReplyForm(t);
}).on("click", ".like, .dislike", function(t) {
i.vote(t, this);
}), this.$form.on("submit", function(t) {
i.formSubmit(t);
}), this.load(o);
},
load: function(t) {
this.$wrap.find(".comments-items").load("/comments/show/index/" + t);
},
showReplyForm: function(e, o) {
e.preventDefault();
var i = t(o).closest(".comment-item"), n = i.children(".comment-body");
return this.loading ? !1 : (this.resetForm(), this.resetReplyLinks(), n.children(".reply-link").hide(), 
n.children(".reply-form").append(this.$form), this.$formWrap.hide(), this.$text.focus(), 
this.$parent.val(i.data("cid")), !1);
},
resetReplyForm: function(t) {
return t && t.preventDefault(), this.resetForm(), this.resetReplyLinks(), this.$formWrap.append(this.$form).show(), 
this.$parent.val("0"), !1;
},
resetForm: function() {
this.$form.find("textarea").val("");
},
resetReplyLinks: function() {
return 0 == this.$parent.val() ? !1 : void t("#comment" + this.$parent.val()).children(".comment-body").children(".reply-link").show();
},
formSubmit: function(e) {
return e.preventDefault(), !this.loggedIn || this.loading ? !1 : this.$text.val() ? (this.showLoader(), 
t.ajax({
url: this.$form.attr("action"),
data: this.$form.serialize(),
type: "POST",
cache: !1,
dataType: "json",
success: function(e) {
this.hideLoader(), e.error ? "not-logged" == e.error ? this.showLoginModal() : this.triggerError(e.error) : (t("#comments-empty").hide(), 
this.$total.html(parseInt(this.$total.html()) + 1), 0 == this.$parent.val() ? this.$wrap.find(".comments-items").append(e.html) : t("#commentReplies" + this.$parent.val()).prepend(e.html), 
this.resetReplyForm());
}.bind(this)
}), !1) : (this.$text.focus(), !1);
},
triggerError: function(t) {
toastr.error(this.lang(t));
},
lang: function(t) {
return this.strings || (this.strings = JSON.parse(document.getElementById("comments-lang").innerHTML)), 
this.strings[t];
},
showLoader: function() {
this.loading = !0, this.$form.find(".btn-cancel").hide(), this.$form.find(".btn-primary").prop("disabled", !0);
},
hideLoader: function() {
this.loading = !1, this.$form.find(".btn-cancel").removeAttr("style"), this.$form.find(".btn-primary").prop("disabled", !1);
},
vote: function(e, o) {
if (e.preventDefault(), !this.loggedIn) return this.showLoginModal();
var i = t(o), n = i.closest(".comment-vote"), s = n.find(".like"), r = n.find(".dislike");
return s.hasClass("liked") || r.hasClass("disliked") ? !1 : (i.hasClass("like") ? (s.addClass("liked"), 
r.removeClass("disliked")) : (s.removeClass("liked"), r.addClass("disliked")), t.getJSON("/comments/vote/" + (i.hasClass("like") ? "up" : "down") + "/" + n.closest(".comment-item").data("cid"), function(t) {
t.error ? ("flood" == t.error ? this.triggerError("flood-vote") : this.showLoginModal(), 
i.removeClass("liked disliked")) : n.find(".score").text(t.score).removeClass("zero plus minus").addClass(t.score > 0 ? "plus" : t.score < 0 ? "minus" : "zero");
}.bind(this)), !1);
},
remove: function(e) {
if (!confirm(this.lang("delete-confirm"))) return !1;
var o = t("#comment" + e);
return o.hide(), t.getJSON("/comments/delete/" + e, function(t) {
t.error ? (o.show(), this.showLoginModal()) : o.remove();
}.bind(this)), !1;
},
scrollTo: function(e) {
return t.scrollTo("#comment" + e, 300, {
offset: {
top: -10
}
}), !1;
},
showLoginModal: function() {
t("#comments-login").modal();
},
noticeShowParent: function(e, o, i) {
return t("#c" + e + "_r" + o).slideDown(), t(i).fadeOut(200), !1;
}
};
}(jQuery), Extend = {
send: function(t, e) {
var o = $(t).parent().children(), i = $(t).parents(".modal");
return o.prop("disabled", !0), $.getJSON("/battle/extend/" + e, {
confirmed: !0
}, function(t) {
t.success ? (o.prop("disabled", !1), o.last().hide(), i.find(".extend-success").show(), 
i.find(".extend-info").hide(), i.one("hidden.bs.modal", function() {
window.location.reload();
})) : toastr.error("common.error");
}), !1;
}
}, Profile;

+function(t) {
Profile = {
Avatar: {
errors: {},
init: function() {
this.$container = t("#user-avatar"), this.$change = this.$container.find(".userpic--change"), 
this.$input = this.$container.find("input").first();
},
onFileSelect: function(e) {
if (0 != e.files.length) {
var o = e.files[0];
if (o.size > 10485760) return void this.onFileError(this.errors.size);
var i = [ "image/jpeg", "image/jpg", "image/png", "image/gif" ];
if (-1 == i.indexOf(o.type)) return void this.onFileError(this.errors.type);
var n = new FormData();
n.append(e.name, o), this._showProgressBar(), t.ajax({
url: "/settings/avatar_upload",
data: n,
type: "POST",
cache: !1,
dataType: "json",
processData: !1,
contentType: !1,
success: function(t) {
return this._hideProgressBar(), t.error ? void this.onFileError(this.errors[t.error]) : void this._setImage(t.img);
}.bind(this)
});
}
},
onFileError: function(t) {
toastr.error(t);
},
_showProgressBar: function() {
this.$change.detach();
var e = '<div class="userpic--loading">  <div class="progress progress-striped active">    <div class="bar bar-primary" style="width:100%;"></div>  </div></div>';
this.$progress = t(e), this.$progress.appendTo(this.$container);
},
_hideProgressBar: function() {
this.$progress.remove(), this.$change.appendTo(this.$container);
},
_setImage: function(e) {
e = e + "?_=" + Math.random();
var o = this.$container.find("img");
o.length || (o = t('<img alt="">'), this.$container.find(".userpic--in").append(o)), 
o.attr("src", e);
}
},
battleRemove: function(e, o) {
confirm(e) && (t("#remove" + o + ", .tooltip").remove(), t("#battle" + o).css("background-color", "#eee"), 
t.get("/battle/remove/" + o, function() {
t("#battle" + o).remove();
}));
}
};
}(jQuery);

var Report = {
send: function(t) {
var e = $(t), o = e.find("textarea"), i = e.find("button");
e.parents(".modal");
return 0 == o.val().trim().length ? (o.focus(), !1) : (i.prop("disabled", !0), $.post(e.attr("action"), e.serialize(), function(t) {
t.success && (i.prop("disabled", !1), i.last().hide(), e.find(".alert-success").show(), 
e.find(".report-controls").hide());
}, "json"), !1);
}
};

$(function() {
$('[data-toggle="tooltip"]').tooltip({
container: "body"
});
});
//# sourceMappingURL=app.js.map
