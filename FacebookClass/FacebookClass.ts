class Facebook{
	name:string;
	friends:number;
private email:string;
private phone:number;
    birthday:any;
    age:number;
    gender:string;
    languages:string;
    worksAt:string;
    studied:string;
    livesin:string;
    from:string;
    maritalStatus:string;

    constructor(_name:string,_friends:number,private _email:string,private _phone:number,_birthday:any, _age:number,_gender:string,_languages:string,_worksAt:string,_studied:string,_livesin:string,_from:string,_maritalStatus:string){
             
            
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
    getTimeLine = ()=> {

                      console.log('TimeLines: Listvew || Gridview');
    }
    getName = ()=> {
                   return this.name;
    }
    getFriends = ()=> {
                    return this.friends;
    }
    getEmail = ()=>{

                    return this.email;

    }
    getPhone = ()=> {

                    return this.phone;
    }
    getBirthday = ()=> {

                       return this.birthday;
    }
    getGender = ()=> {

                      return this.gender;
    }
    getLanguages = ()=> {

                         return this.languages;
    }
    getWorkDetail = ()=> {

                          return this.worksAt;
    }
    getStudiedAt = ()=> {

                       return this.studied;

    }
    getLivesin = ()=> {

                       return this.livesin;
    }
    getFrom = ()=> {

                     return this.from;
    }
    getMaritalStatus = ()=> {

                          return this.maritalStatus;
    }

}

let socialMedia = new Facebook('Amit Dubey',424,'amit@gmail.com',9540802130,'25 sep 1995',23,'male','Hindi,English,Marathi,Bengali','Rivigo','Mckv Institute Of Engineering','Kolkata','Allahabad','Single');

let timelines = socialMedia.getTimeLine();
timelines;
let names = socialMedia.getName();
console.log(names);
let friend = socialMedia.getFriends();
console.log('Friends: ',friend);
let email = socialMedia.getEmail();
console.log('Email: ',email);
let phone = socialMedia.getPhone();
console.log('Phone: ',phone);
let birthday = socialMedia.getBirthday();
console.log('Birthday: ',birthday);
let gender = socialMedia.getGender();
console.log('Gender: ',gender);
let languages = socialMedia.getLanguages();
console.log('Languages: ' +languages);
let worksAt = socialMedia.getWorkDetail();
console.log('WorkingAt: ',worksAt);
let studied = socialMedia.getStudiedAt();
console.log('Studied: ',studied);
let livesin = socialMedia.getLivesin();
console.log('Lives in: ',livesin);
let from = socialMedia.getFrom();
console.log('From: ',from);
let maritalstatus = socialMedia.getMaritalStatus();
console.log('Marital Status: ',maritalstatus);
