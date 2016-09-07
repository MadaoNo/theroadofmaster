/**
 * Created by Wj on 2016/6/21.
 */
window.onload=function () {
    var location = document.getElementById("location");
    location.ontouchend=function () {
        location.style.backgroundColor="#000";
    };
    var search=document.getElementById("search");
    search.onfocus=function () {
        window.location="searching.html";
    }
};
