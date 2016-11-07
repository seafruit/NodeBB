"use strict";

(function () {


	var writer_div = '<button class="writeCom" >我要说一句</button>' +
		'<div class="commentInputArea"><input /><button>发表</button></div>';

	//-------------------------------------------------------------------------------------------

	$(window).on('action:topic.loading', function (ev, data) {
		var comment_a = '<a class="flip"><i class="comAreadisplay">收起</i><i class="comAreaHide" style="display:none;">展开</i></a>';
		$('.post-tools').append(comment_a);
		$(".flip").click(function () {
			$(".panel").slideToggle("slow");
			$(".comAreadisplay").toggle();
			$(".comAreaHide").toggle();
			$('.commentInputArea').css('display', 'none');
		});
		getComments();
	});

	function getComments() {
		$.ajax({
			type: "POST",
			url: '/posts',
			data: {tid: 33},
			dataType: 'json',
			success: function (result) {
				var src =  $.parseJSON(result);
				getPagePosts(src.posts);

				$(".panel").after(writer_div);
				$(".writeCom").click(function () {
					if ($('.commentInputArea').css("display") === 'block') {
						$('.commentInputArea').css('display', 'none');
					} else {
						$('.commentInputArea').css('display', 'block');
					}
				});
			},
			error: function (err) {
				console.log('error');
			}
		});
	};

	function getPagePosts(postData) {
		console.log(postData.length);
		for(var i=0;i<postData.length;i++){

			var isExit = postData[i].hasOwnProperty("comments");
			var data_pid = postData[i].pid;
			if(isExit){
				var comments = postData[i].comments;
				var comment_area = '<div class="panel"><ul class="comments_ul">'+addComments(comments)+'</ul></div>';

				console.log(comment_area);
				$('[data-pid=' + data_pid + ']').find('.post-footer').after(comment_area);
			}
		}
	};

	function addComments(comments_data) {
		var comment_li='';
		for (var k = 0; k < comments_data.length; k++) {
			comment_li += '<li >' + comments_data[k].com_content + '</li>';
		}
		return comment_li;
	}
}());



