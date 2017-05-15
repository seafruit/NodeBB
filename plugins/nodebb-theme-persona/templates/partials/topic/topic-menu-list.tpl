<!-- IF privileges.editable -->
<li><a component="topic/mark-unread-for-all" href="#"><i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]</a></li>
<!-- ENDIF privileges.editable -->

<!-- IF privileges.deletable -->
<li><a component="topic/delete" href="#" class="<!-- IF deleted -->hidden<!-- ENDIF deleted -->"><i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]</a></li>
<li><a component="topic/restore" href="#" class="<!-- IF !deleted -->hidden<!-- ENDIF !deleted -->"><i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]</a></li>
<li><a component="topic/purge" href="#" class="<!-- IF !deleted -->hidden<!-- ENDIF !deleted -->"><i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]</a></li>
<!-- IF privileges.isAdminOrMod -->
<!-- ENDIF privileges.isAdminOrMod -->

<!-- BEGIN thread_tools -->
<li><a href="#" class="{thread_tools.class}"><i class="fa fa-fw {thread_tools.icon}"></i> {thread_tools.title}</a></li>
<!-- END thread_tools -->
<!-- ENDIF privileges.deletable -->