"use strict";

(function () {

	var writer_div = '<div><button class="writeCom" >我要说一句</button></div>' +
		'<div class="commentInputArea"><input /><button>发表</button></div>';

	//-------------------------------------------------------------------------------------------

	$(window).on('action:topic.loading', function (ev, data) {
		var comment_a = '<a class="flip"><i class="comAreadisplay">收起</i><i class="comAreaHide" style="display:none;">展开</i></a>';
		$('.post-tools').append(comment_a);
		$(".flip").click(function () {
			var current_panel = $(this).closest('div').next();
			current_panel.slideToggle("slow");
			$(this).children('i').toggle();
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

				$(".writeCom").click(function () {
					var next = $(this).parent().next();
					if (next.css("display") === 'block') {
						next.css('display', 'none');
					} else {
						next.css('display', 'block');
					}
				});
			},
			error: function (err) {
				console.log('error');
			}
		});
	};

	function getPagePosts(postData) {
		for(var i=0;i<postData.length;i++){
			if(postData[i].hasOwnProperty("comments")){
				var data_pid = postData[i].pid;
				var comments = postData[i].comments;
				var comment_area = '<div class="panel"><ul class="comments_ul">'+addComments(comments)+'</ul>'+writer_div+'</div>';

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



