"use strict";

(function() {
	$(window).on('action:script.load', function(ev, data) {
		// console.log(data);
		// var comment_a = '<a hred="#">收起</a>';
		// $('.post-tools').append(comment_a);
		// var tempDmata = [{
		// 	"_key" : "post:3",
		// 	"pid" : 32,
		// 	"uid" : 2,
		// 	"tid" : 2,
		// 	"content" : "hello nodebb，你的名字是haahah你懂得",
		// 	"timestamp" : 1476105357988,
		// 	"deleted" : 0,
		// 	"comments":[{
		// 		"_key": "comment:1",
		// 		"com_id": 1,
		// 		"pid": 32,
		// 		"uid": 2,
		// 		"com_content":'一闪一闪亮晶晶！满天都是小星星',
		// 		"timestamp":1476105357945,
		// 		"deleted":0
		// 	},{
		// 		"_key": "comment:2",
		// 		"com_id": 2,
		// 		"pid": 32,
		// 		"uid": 2,
		// 		"com_content":'挂在天上放光明，离离原上草',
		// 		"timestamp":1476987357945,
		// 		"deleted":0
		// 	}]
		// }];
        //
        //
		// var data_pids = [32,33];
		// for(var i=0;i<data_pids.length;i++){
		// 	for(var j=0;j<tempDmata.length;j++){
		// 		if(data_pids[i]===tempDmata[j].pid){
		// 			$('[data-pid='+data_pids[i]+']').find('.post-footer').after(addComments(tempDmata[j].comments));
		// 			// var comment_area = '<div><ul class="comments_ul">';
		// 			// 	for(var k=0;k<comments_data.length;k++){
		// 			// 		comment_area += '<li >'+ comments_data[k].com_content+'</li>';
		// 			// 	}
		// 			// 	comment_area += '</ul><button onclick="whetherShowComInputArea(this)">我要说一句</button><div class="commentInputArea"  ><input /> <button>发表</button></div></div>';
		// 			// 	$('[data-pid='+data_pids[i]+']').find('.post-footer').after(comment_area);
		// 		}
		// 	}
		// }
        //
		// function addComments(comments_data){
		// 	console.log('pppppppppp');
		// 	var comment_area = '<div><ul class="comments_ul">';
		// 	for(var k=0;k<comments_data.length;k++){
		// 		comment_area += '<li >'+ comments_data[k].com_content+'</li>';
		// 	}
		// 	comment_area += '</ul>' +
		// 		'<span><a href="#">我要说一句</a></span>' +
		// 		'</div>';
		// 	return comment_area;
		// }
        //
		// function whetherShowComInputArea() {
		// 	console.log('0000000000000');
		// 	// var ComInArea=$('.commentInputArea');
		// 	// if(ComInArea.style.display==='inline-block'){
		// 	// 	$('.commentInputArea').css('display','none');
		// 	// }
		// 	// if(ComInArea.style.display==='none'){
		// 	// 	$('.commentInputArea').css('display','inline-block');
		// 	// }
		// }

	});
}());