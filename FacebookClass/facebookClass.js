var Facebook = /** @class */ (function () {
    function Facebook(_name, _friends, _email, _phone, _birthday, _age, _gender, _languages, _worksAt, _studied, _livesin, _from, _maritalStatus) {
        var _this = this;
        this._email = _email;
        this._phone = _phone;
        this.getTimeLine = function () {
            console.log('TimeLines: Listvew || Gridview');
        };
        this.getName = function () {
            return _this.name;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.getEmail = function () {
            return _this.email;
        };
        this.getPhone = function () {
            return _this.phone;
        };
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getLanguages = function () {
            return _this.languages;
        };
        this.getWorkDetail = function () {
            return _this.worksAt;
        };
        this.getStudiedAt = function () {
            return _this.studied;
        };
        this.getLivesin = function () {
            return _this.livesin;
        };
        this.getFrom = function () {
            return _this.from;
        };
        this.getMaritalStatus = function () {
            return _this.maritalStatus;
        };
        this.name = _name;
        this.friends = _friends;
        this.email = _email;
        this.phone = _phone;
        this.birthday = _birthday;
        this.age = _age;
        this.gender = _gender;
        this.languages = _languages;
        this.worksAt = _worksAt;
        this.studied = _studied;
        this.livesin = _livesin;
        this.from = _from;
        this.maritalStatus = _maritalStatus;
    }
    return Facebook;
}());
var socialMedia = new Facebook('Amit Dubey', 424, 'amit@gmail.com', 9540802130, '25 sep 1995', 23, 'male', 'Hindi,English,Marathi,Bengali', 'Rivigo', 'Mckv Institute Of Engineering', 'Kolkata', 'Allahabad', 'Single');
var timelines = socialMedia.getTimeLine();
timelines;
var names = socialMedia.getName();
console.log(names);
var friend = socialMedia.getFriends();
console.log('Friends: ', friend);
var email = socialMedia.getEmail();
console.log('Email: ', email);
var phone = socialMedia.getPhone();
console.log('Phone: ', phone);
var birthday = socialMedia.getBirthday();
console.log('Birthday: ', birthday);
var gender = socialMedia.getGender();
console.log('Gender: ', gender);
var languages = socialMedia.getLanguages();
console.log('Languages: ' + languages);
var worksAt = socialMedia.getWorkDetail();
console.log('WorkingAt: ', worksAt);
var studied = socialMedia.getStudiedAt();
console.log('Studied: ', studied);
var livesin = socialMedia.getLivesin();
console.log('Lives in: ', livesin);
var from = socialMedia.getFrom();
console.log('From: ', from);
var maritalstatus = socialMedia.getMaritalStatus();
console.log('Marital Status: ', maritalstatus);
