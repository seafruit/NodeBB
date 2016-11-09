var url = "mongodb://localhost:27017/nodebb";
var db = connect(url);

db.objects.update({"pid": 32}, {
	$push: {
		"comments": {
			"com_id": 1,
			"com_content": "我是32号post的第一条回复"
		}
	}
});

db.objects.update({"pid": 33}, {
	$push: {
		"comments": {
			"com_id": 2,
			"com_content": "我是33号post的第一条回复！"
		}
	}
});

db.objects.update({"pid": 33}, {
	$push: {
		"comments": {
			"com_id": 3,
			"com_content": "我是33号post的第二条回复！"
		}

	}
});

// {
// 	"posts"
// :
// 	[{
// 		"pid": 32,
// 		"uid": 1,
// 		"tid": 14,
// 		"content": "<p>朝辞白帝彩云间，千里江陵一日还，两岸猿声啼不住，轻舟已过万重山。</p>\n",
// 		"timestamp": 1476931386071,
// 		"deleted": false,
// 		"comments": [[{"com_id": 1, "com_content": "我是32号post的第一条回复"}]],
// 		"upvotes": 0,
// 		"downvotes": 0,
// 		"votes": 0,
// 		"timestampISO": "2016-10-20T02:43:06.071Z",
// 		"editedISO": "",
// 		"index": 0,
// 		"user": {
// 			"username": "liyouyou",
// 			"userslug": "liyouyou",
// 			"lastonline": 1478163255331,
// 			"picture": "",
// 			"fullname": "",
// 			"signature": "",
// 			"reputation": 0,
// 			"postcount": 48,
// 			"banned": false,
// 			"status": "online",
// 			"uid": 1,
// 			"groupTitle": "administrators",
// 			"icon:text": "L",
// 			"icon:bgColor": "#e91e63",
// 			"lastonlineISO": "2016-11-03T08:54:15.331Z",
// 			"selectedGroup": {
// 				"name": "administrators",
// 				"slug": "administrators",
// 				"labelColor": "#000000",
// 				"userTitle": "administrators"
// 			},
// 			"custom_profile_info": []
// 		},
// 		"editor": null,
// 		"bookmarked": false,
// 		"upvoted": false,
// 		"downvoted": false,
// 		"selfPost": true,
// 		"display_edit_tools": true,
// 		"display_delete_tools": true,
// 		"display_moderator_tools": true,
// 		"display_move_tools": false,
// 		"display_post_menu": true
// 	}, {
// 		"pid": 33,
// 		"uid": 1,
// 		"tid": 14,
// 		"content": "<p>李白，据说他会武功，身体倍儿棒！</p>\n",
// 		"timestamp": 1476931610448,
// 		"deleted": false,
// 		"comments": [[{"com_id": 2, "com_content": "我是33号post的第一条回复！"}, {
// 			"com_id": 3,
// 			"com_content": "我是33号post的第二条回复！"
// 		}]],
// 		"upvotes": 0,
// 		"downvotes": 0,
// 		"votes": 0,
// 		"timestampISO": "2016-10-20T02:46:50.448Z",
// 		"editedISO": "",
// 		"index": 1,
// 		"user": {
// 			"username": "liyouyou",
// 			"userslug": "liyouyou",
// 			"lastonline": 1478163255331,
// 			"picture": "",
// 			"fullname": "",
// 			"signature": "",
// 			"reputation": 0,
// 			"postcount": 48,
// 			"banned": false,
// 			"status": "online",
// 			"uid": 1,
// 			"groupTitle": "administrators",
// 			"icon:text": "L",
// 			"icon:bgColor": "#e91e63",
// 			"lastonlineISO": "2016-11-03T08:54:15.331Z",
// 			"selectedGroup": {
// 				"name": "administrators",
// 				"slug": "administrators",
// 				"labelColor": "#000000",
// 				"userTitle": "administrators"
// 			},
// 			"custom_profile_info": []
// 		},
// 		"editor": null,
// 		"bookmarked": false,
// 		"upvoted": false,
// 		"downvoted": false,
// 		"selfPost": true,
// 		"display_edit_tools": true,
// 		"display_delete_tools": true,
// 		"display_moderator_tools": true,
// 		"display_move_tools": true,
// 		"display_post_menu": true
// 	}], "uid"
// :
// 	1
// }