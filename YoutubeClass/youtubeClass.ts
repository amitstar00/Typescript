class YoutubeVideos{
	videoTitle:string;
	views:number;
	protected likes:number;
	protected dislikes:number;
	
	descriptions:string;
	protected comments:number;
	protected subscribed:any;

	constructor(videoTitle:string,views:number,likes:number,dislikes:number,descriptions:string,comments:number=5,subscribed?:any){
                               

                               this.videoTitle= videoTitle;
                               this.views = views;
                               this.likes = likes;
                               this.dislikes = dislikes;
                               this.descriptions = descriptions;
                               this.comments = comments;
                               this.subscribed = subscribed;


	                        }
	                        getVideoTitle=()=>{
	                                                 return this.videoTitle;

	                        }
	                        getViews=()=>{
	                                                 return this.views;

	                        }
	                        getLikes=()=>{
	                                                 return this.likes;

	                        }
	                        getDislikes=()=>{
	                                                 return this.dislikes;

	                        }
	                        getShare=()=>{
	                                                 console.log('you have shared youre favourite videos!');

	                        }
	                        getDescriptions = ()=>{
	                                             return this.descriptions;
	                        }
	                        getNumberOfComments=()=>{
	                                                 return this.comments;

	                        }
	                        getNumberOfSubscribed =()=>{
	                                                  return this.subscribed;
	                        }
                            getRelatedVideos = ()=>{
                                                 console.log('see related videos below');
                            }
                            

	   }
	/* Inheretance has been used to because when you open youTube video on the right side you will find upNext videos of that playlist */
class upNext extends YoutubeVideos{
	
	constructor(public videoTitle:string,public views:number,public descriptions:string,public likes:number=3,public dislikes:number=2){
	            super(videoTitle,views,likes,dislikes,descriptions);
	}
           getupNextVideos = ()=>{
	                                 return (`videoTitle: ${this.videoTitle} 
	           ${this.descriptions} 
	           ${this.views}views`)
	}
	                        getAutoplay = ()=>{
	                           console.log('your autoplay is turned off');
	           }
	
}
       let videos = new YoutubeVideos("Monster Coding",20444,4000,200,"Code for good",120,"1Milions");
       let title = videos.getVideoTitle();
       console.log("VideoTitle: " , title);
       let views = videos.getViews();
       console.log(views+' views');
       let likes = videos.getLikes();
       console.log(likes +' likes');
       let dislikes = videos.getDislikes();
       console.log(dislikes +' dislikes');
       let share = videos.getShare();
        share;
       let discriptions = videos.getDescriptions();
       console.log(discriptions);
       let comments = videos.getNumberOfComments();
       console.log(comments+' comments');
       let subscribed = videos.getNumberOfSubscribed();
       console.log(subscribed+' subscriber');
       let relatedVideos = videos.getRelatedVideos();
       relatedVideos;
       let recommended = new upNext("Scary coding",48782 ,"Have some handson experience with Typescript");
       console.log('--------upNext video----------')
       console.log(recommended.getupNextVideos());
       let autoPlay = recommended.getAutoplay();
       autoPlay;

