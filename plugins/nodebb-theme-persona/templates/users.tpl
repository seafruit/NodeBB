<div class="users">

	<!-- IMPORT partials/breadcrumbs.tpl -->

	<div class="row">
		<div class="col-lg-6">
		<!-- IMPORT partials/users_list_menu.tpl -->
		</div>
		<div class="col-xs-3 text-right">
			<!-- IF inviteOnly -->
			<!-- IF loggedIn -->
			<button component="user/invite" class="btn btn-success"><i class="fa fa-users"></i> [[users:invite]]</button>
			<!-- ENDIF loggedIn -->
			<!-- ENDIF inviteOnly -->
		</div>
		<!-- IF function.displayUserSearch, {config.allowGuestUserSearching} -->
		<div class="col-lg-3 col-xs-9">

		</div>
		<!-- ENDIF function.displayUserSearch -->
	</div>

	<ul id="users-container" class="users-container">
		<!-- IMPORT partials/users_list.tpl -->
		<!-- IF anonymousUserCount -->
		<li class="users-box anon-user">
			<div class="user-icon">G</div>
			<br/>
			<div class="user-info">
				<span id="online_anon_count">{anonymousUserCount}</span>
				<span>[[global:guests]]</span>
			</div>
		</li>
		<!-- ENDIF anonymousUserCount -->
	</ul>

	<!-- IMPORT partials/paginator.tpl -->
</div>
