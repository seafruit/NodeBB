<div class="clearfix post-header">
	<div class="icon pull-left">
		<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->">
			<!-- IF posts.user.picture -->
			<img component="user/picture" data-uid="{posts.user.uid}" src="{posts.user.picture}" align="left" itemprop="image" />
			<!-- ELSE -->
			<div component="user/picture" data-uid="{posts.user.uid}" class="user-icon" style="background-color: {posts.user.icon:bgColor};">{posts.user.icon:text}</div>
			<!-- ENDIF posts.user.picture -->
			<i component="user/status" class="fa fa-circle status {posts.user.status}" title="[[global:{posts.user.status}]]"></i>

		</a>
	</div>

	<small class="pull-left">
		<strong>
			<a href="<!-- IF posts.user.userslug -->{config.relative_path}/user/{posts.user.userslug}<!-- ELSE -->#<!-- ENDIF posts.user.userslug -->" itemprop="author" data-username="{posts.user.username}" data-uid="{posts.user.uid}">{posts.user.username}</a>
		</strong>

		<!-- IMPORT partials/topic/badge.tpl -->

		<!-- IF posts.user.banned -->
		<span class="label label-danger">[[user:banned]]</span>
		<!-- ENDIF posts.user.banned -->

		<div class="visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block">
			<a class="permalink" href="{config.relative_path}/post/{posts.pid}"><span class="timeago" title="{posts.timestampISO}"></span></a>

			<i class="fa fa-pencil-square pointer edit-icon <!-- IF !posts.editor.username -->hidden<!-- ENDIF !posts.editor.username -->"></i>

			<small data-editor="{posts.editor.userslug}" component="post/editor" class="hidden">[[global:last_edited_by, {posts.editor.username}]] <span class="timeago" title="{posts.editedISO}"></span></small>

			<!-- IF posts.toPid -->
			<a component="post/parent" class="btn btn-xs btn-default hidden-xs" data-topid="{posts.toPid}" href="/post/{posts.toPid}"><i class="fa fa-reply"></i> @<!-- IF posts.parent.username -->{posts.parent.username}<!-- ELSE -->[[global:guest]]<!-- ENDIF posts.parent.username --></a>
			<!-- ENDIF posts.toPid -->

			<span>
				<!-- IF posts.user.custom_profile_info.length -->
				&#124;
				<!-- BEGIN custom_profile_info -->
				{posts.user.custom_profile_info.content}
				<!-- END custom_profile_info -->
				<!-- ENDIF posts.user.custom_profile_info.length -->
			</span>
		</div>
		<span class="bookmarked"><i class="fa fa-bookmark-o"></i></span>

	</small>
</div>

<br />

<div class="content" component="post/content" itemprop="text">
	{posts.content}
</div>

<div class="clearfix post-footer">
	<!-- IF posts.user.signature -->
	<div component="post/signature" data-uid="{posts.user.uid}" class="post-signature">{posts.user.signature}</div>
	<!-- ENDIF posts.user.signature -->

	<small class="pull-right">
		<span class="post-tools">
			<a component="post/reply" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:reply]]</a>
			<a component="post/quote" href="#" class="no-select <!-- IF !privileges.topics:reply -->hidden<!-- ENDIF !privileges.topics:reply -->">[[topic:quote]]</a>
		</span>

		<!-- IF !reputation:disabled -->
		<!-- ENDIF !reputation:disabled -->

		<!-- IMPORT partials/topic/post-menu.tpl -->
	</small>
</div>

<hr />
