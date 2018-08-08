var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var YoutubeVideos = /** @class */ (function () {
    function YoutubeVideos(videoTitle, views, likes, dislikes, descriptions, comments, subscribed) {
        if (comments === void 0) { comments = 5; }
        var _this = this;
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getShare = function () {
            console.log('you have shared youre favourite videos!');
        };
        this.getDescriptions = function () {
            return _this.descriptions;
        };
        this.getNumberOfComments = function () {
            return _this.comments;
        };
        this.getNumberOfSubscribed = function () {
            return _this.subscribed;
        };
        this.getRelatedVideos = function () {
            console.log('see related videos below');
        };
        this.videoTitle = videoTitle;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.descriptions = descriptions;
        this.comments = comments;
        this.subscribed = subscribed;
    }
    return YoutubeVideos;
}());
/* Inheretance has been used to because when you open youTube video on the right side you will find upNext videos of that playlist */
var upNext = /** @class */ (function (_super) {
    __extends(upNext, _super);
    function upNext(videoTitle, views, descriptions, likes, dislikes) {
        if (likes === void 0) { likes = 3; }
        if (dislikes === void 0) { dislikes = 2; }
        var _this = _super.call(this, videoTitle, views, likes, dislikes, descriptions) || this;
        _this.videoTitle = videoTitle;
        _this.views = views;
        _this.descriptions = descriptions;
        _this.likes = likes;
        _this.dislikes = dislikes;
        _this.getupNextVideos = function () {
            return ("videoTitle: " + _this.videoTitle + " \n\t           " + _this.descriptions + " \n\t           " + _this.views + "views");
        };
        _this.getAutoplay = function () {
            console.log('your autoplay is turned off');
        };
        return _this;
    }
    return upNext;
}(YoutubeVideos));
var videos = new YoutubeVideos("Monster Coding", 20444, 4000, 200, "Code for good", 120, "1Milions");
var title = videos.getVideoTitle();
console.log("VideoTitle: ", title);
var views = videos.getViews();
console.log(views + ' views');
var likes = videos.getLikes();
console.log(likes + ' likes');
var dislikes = videos.getDislikes();
console.log(dislikes + ' dislikes');
var share = videos.getShare();
share;
var discriptions = videos.getDescriptions();
console.log(discriptions);
var comments = videos.getNumberOfComments();
console.log(comments + ' comments');
var subscribed = videos.getNumberOfSubscribed();
console.log(subscribed + ' subscriber');
var relatedVideos = videos.getRelatedVideos();
relatedVideos;
var recommended = new upNext("Scary coding", 48782, "Have some handson experience with Typescript");
console.log('--------upNext video----------');
console.log(recommended.getupNextVideos());
var autoPlay = recommended.getAutoplay();
autoPlay;
