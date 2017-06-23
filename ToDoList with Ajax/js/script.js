var App = (function(){

    function _bindEvent(){
        console.log('bond event');
        $('#btn-addTask').on('click', _handleAddTask);
        $('#taskContainer').on('click', '.taskItem .btn-delTask', _handleDelTask);
    }

    function _handleAddTask(){
        // console.log('button click');
        var taskName = $('#input-taskName').val();
        var taskDesc = $('#input-taskDesc').val();
        // console.log(taskName, taskDesc);
        $.ajax({
            url: 'http://10.105.22.207:3000/todos',
            type: 'post',
            dataType: 'json',
            data:{
                title: taskName,
                content: taskDesc
            },
            success: function(data){
                console.log(data);
                _renderTODOs();
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });

        $('#input-taskName').val('');
        $('#input-taskDesc').val('');
    }

    function _handleDelTask(){
        // console.log('del btn clicked');
        var id = $(this).parents('.taskItem').attr('data-id');
        console.log(id);
        $.ajax({
            url: `http://10.105.22.207:3000/todos/${id}`,
            type: 'DELETE',
            dataType: 'json',
            success: function(data){
                console.log(data);
                _renderTODOs();
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

    function _renderTODOs(){
        $.ajax({
            url: 'http://10.105.22.207:3000/todos',
            type: 'get',
            dataType: 'json',
            success: function(data){
                console.log(data);
                $('#taskContainer').html('');
                for(let todo of data){
                    $('#taskContainer').append(`
                     <div class="col-sm-4 taskItem" data-id="${todo.id}">
						<div class="card">
							<div class="card-block">
								<button type="button" class="close btn-delTask" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h3 class="card-title">${todo.title}</h3>
								<p class="card-text">${todo.content}</p>
							</div>
						</div>
					</div>
                    `);
                }
            },
            error: function(jqXHR){
                console.log(jqXHR);
            }
        });
    }

    function init(){
        console.log('init');
        _bindEvent();
        _renderTODOs();
    }

    return {
        init
    };
})();