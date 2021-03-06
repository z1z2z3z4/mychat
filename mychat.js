// ==UserScript==
// @name         mychat
// @version      1.12
// @description  ignore chat
// @author       z1z2z3z4
// @match        http://mycast.xyz/home/chat/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js#sha256=FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=
// @@updateURL   https://raw.githubusercontent.com/z1z2z3z4/mychat/master/mychat.js
// @downloadURL  https://raw.githubusercontent.com/z1z2z3z4/mychat/master/mychat.js
// ==/UserScript==

/*
 * arrive.js
 * v2.4.1
 * https://github.com/uzairfarooq/arrive
 * MIT licensed
 *
 * Copyright (c) 2014-2017 Uzair Farooq
 */
var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave")}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n)},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n)},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t)})}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a)}c.call(this,e,t,r)},f},u=function(){function e(){var e={childList:!0,subtree:!0};return e}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t)})}function r(e,t){return l.matchesSelector(e,t.selector)}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r)},d},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);var a=".chat-list-item";var b=".user-entry-view > ";var e=".nickname";var i=new Array();
var a_a = ".chat-view";
var lol_player = -1;
var lol_nick=[];
var userNum;
var userList=[];
var photoList=[];
var chk;

var keyboardEvent = new KeyboardEvent('keydown', {
    code: 'Enter',
    key: 'Enter',
    charKode: 13,
    keyCode: 13,
    view: window
});




function now() {
	var date = new Date();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var i = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d>9?d:'0'+d)+' '+(h>9?h:'0'+h)+':'+(i>9?i:'0'+i) /*+':'+(s>9?s:'0'+s)*/;
}

function updateUserList() {
    var cn = $(document).find(".user-list-menu .header span").text().substring(9);
    userNum = Number(cn.substring(0, cn.search("명")));
    userList = [];
    cn = $(document).find(".user-entry-view").first();
    for (var i=0; i<userNum; i+=1) {
        var nicc = cn.find(".nickname").attr("title").replace('smartphone','');
        userList.push(nicc);

        cn = cn.next();
    }
}

function updatePhotoList()
{
    var xmlhttp = new XMLHttpRequest();
    photoList = [];
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            photoList = JSON.parse(this.responseText);
        }
    };
    xmlhttp.open("GET", "http://mycast.xyz/home/photo/photolist/", true);
    xmlhttp.send();
}

$(document).ready(function(){
    updateUserList();
    updatePhotoList();
});

$(document).arrive(a_a,function(){//var c=$(this);var d=c.find(e).children().text();if (i.some(function (g){return d.search(g) !== -1;})) c.remove();
    var c = $(this);
    var z =c.children().first().text();
    var t = c.children().last().text();
    var tmp = c.parent().parent();
    var d = tmp.find(e).children().text().replace('smartphone','');
    var img = tmp.prev().find("img").attr('src');

    /*                               var z=c.find(".chat-view").children().text();
                                var img = c.find(".icon").children().attr("src");
                                var level = c.find(".level").text();
                                */
    //                                if( (d == "앵?" && img == "https://i.imgur.com/tweZ6rgm.png?1" && level.search("35") !== -1)|| d == "헌터 시구르나" || true) {
    if(true) {
        var p=z.search("::");
        var nn = now();
        var end=t.search(nn);
        if ( end !== -1 ) {
//            console.log("/"+d+"/"+p+"/"+z.length+"/");
            if( p == 2 && z.length > 4) {
                var flag = z.substring(p-2, p)
                var q = z.substring(p+2);
                console.log("/"+d+"-"+flag+":"+q+"/");
                switch(flag)
                {
                    case '캐릭':
                        $('.input-box').focus();
                        $('.input-box').val("http://character.onnada.com/search.php?q="+q);
                        break;
                    case '성우':
                        $('.input-box').focus();
                        $('.input-box').val("http://staff.onnada.com/cv_search.php?q="+q);
                        break;
                    case '검색':
                        $('.input-box').focus();
                        $('.input-box').val("https://www.google.co.kr/search?q="+q);
                        break;
                    case '대충':
                        $('.input-box').focus();
                        var arr = photoList.filter(function(elm) {
                            if (elm.tag.search(q) !== -1) return true;
                            else return false;
                        });

                        if (arr.length > 0) {
                            $('.input-box').val("사진::"+arr[Math.floor(Math.random()*arr.length)].url);
                        }
                        else  $('.input-box').val("검색된 이미지가 없어요!");
                        break;
                    case '꺼라':
                        $('.input-box').focus();
                        $('.input-box').val("http://namu.wiki/go/"+q);
                        break;
                    case '도움':
                        if(q=="명령어") {
                            $('.input-box').focus();
                            $('.input-box').val("캐릭 / 성우 / 검색 / 대충 / 꺼라 / 도움::태풍 / 도움::롤자모집 / 도움::롤할래 / 갱신::포토 ");
                        }
                        else if(q=="태풍") {
                            $('.input-box').focus();
                            $('.input-box').val("https://earth.nullschool.net/ko/#current/wind/surface/level/orthographic=-229.85,28.12,1089");
                        }
                        else if(q=="롤자모집") {

                            if(d !== "헌터 시구르나" && img !== "https://i.imgur.com/tweZ6rgm.png?1") {
                                if ( lol_player == -1) {
                                    lol_player = 1;
                                    lol_nick.push(d);
                                    $('.input-box').focus();
                                    $('.input-box').val("롤 하실 분!!! "+lol_player+"/5");
                                }
                                else {
                                    $('.input-box').focus();
                                    $('.input-box').val("이미 모집중!! "+lol_player+"/5");
                                }
                            }
                            else {
                                lol_nick = [];
                                lol_nick.push(d);
                                updateUserList();
                                while (lol_nick.length < 7) {
                                    chk=false;
                                    var rnd = Math.floor(Math.random()*userNum);
                                    lol_nick.forEach(function(nic){
                                        if(nic == userList[rnd]) chk=true;
                                    });
                                    if (!chk) lol_nick.push(userList[rnd]);
                                }

                                $('.input-box').val("궁서::"+lol_nick.shift() + " 님의 소집명령!!");
                                document.querySelector('.input-box').dispatchEvent(keyboardEvent);

                                var str = ""+userList.shift();
                                for (var idx=0; idx < 3; idx+=1) {
                                    str = str + ", " + userList[idx];
                                }

                                $('.input-box').val("궁서::"+str);
                                document.querySelector('.input-box').dispatchEvent(keyboardEvent);

                                str = "예비 : " + userList[3] + ", " + userList[4];
                                $('.input-box').val("궁서::"+str);
                                document.querySelector('.input-box').dispatchEvent(keyboardEvent);

                                $('.input-box').val("궁서::롤에 안보이면....");

                            }

                        }
                        else if(q=="롤할래" && lol_player !== -1) {
                            chk = false;
                            lol_nick.forEach(function(nic){
                                if(nic == d) chk = true;
                            });
                            if (!chk) {
                                lol_player += 1;
                                lol_nick.push(d);
                                $('.input-box').focus();
                                if (lol_player == 5) {
                                    $('.input-box').val( lol_nick[0] + ", " + lol_nick[1] + ", " + lol_nick[2] + ", " + lol_nick[3] + ", " + lol_nick[4] + "  롤접속 ㄱㄱㄱㄱㄱ");
                                    lol_player = -1;
                                    lol_nick = [];
                                }
                                else $('.input-box').val("롤 하실 분!!! "+lol_player+"/5");
                            }
                            else {
                                 $('.input-box').val(d+" 님은 이미 손을 들었습니다! "+lol_player+"/5");
                            }

                        }
                        break;
                    case "갱신":
                        if (q=="포토") {
                            updatePhotoList();
                            $('.input-box').val("마캐포토 갱신 완료!");
                        }
/*                        else if(q=="유저") {
                            updateUserList();
                            $('.input-box').val("유저 목록 갱신 완료!");
                        }*/
                    default:
                }
                document.querySelector('.input-box').dispatchEvent(keyboardEvent);
            }
        }
    }
});
$(document).on('click',b+e, function () {i.push($(this).children().text());console.log(i[i.length-1])});
