"use strict";

(function () {
	$(window).on('action:script.load', function (ev, data) {
		var comment_a = '<a class="flip"><i class="comAreadisplay">收起</i><i class="comAreaHide" style="display:none;">展开</i></a>';
		$('.post-tools').append(comment_a);

		$(".flip").click(function () {
			$(".panel").slideToggle("slow");
			$(".comAreadisplay").toggle();
			$(".comAreaHide").toggle();
		$('.commentInputArea').css('display', 'none');
		});

		var writer_div = '<button class="writeCom" >我要说一句</button>' +
			'<div class="commentInputArea"><input /><button>发表</button></div>';

		//-------------------------------------------------------------------------------------------

		$.ajax({
			type: "POST",
			url: '/post/getComments',
			data: {tid: 33},
			dataType: 'json',
			success: function (res) {
				var src =  $.parseJSON(res);
				getPagePosts(src.posts);
				$(".panel").after(writer_div);
				$(".writeCom").click(function () {
					console.log("ceshi");
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

		function getPagePosts(postData) {
			// var data_pids = postData.map(function(post) {
			// 	return post && post.pid;
			// });
			// console.log('data_pids');
			// console.log(data_pids);
			var data_pids = [32, 33];
			console.log('11111111111');
			for (var i = 0; i < data_pids.length; i++) {
				for (var j = 0; j < postData.length; j++) {
					if (data_pids[i] === postData[j].pid) {
						$('[data-pid=' + data_pids[i] + ']').find('.post-footer').after(addComments(postData[j].comments[0]));
					}
				}
			}
		}

		function addComments(comments_data) {
			var comment_area = '<div class="panel"><ul class="comments_ul">';
			console.log('----------' + comments_data.length);
			for (var k = 0; k < comments_data.length; k++) {
				comment_area += '<li >' + comments_data[k].com_content + '</li>';
			}
			comment_area += '</ul></div>';
			return comment_area;
		}
	});
}());