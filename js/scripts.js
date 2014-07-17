$(document).ready (function () {

    var currentList;

    $("form#new-list").submit (function (event) {
        var inputListName = $("input#new-list-name").val();
        var newList = {listName: inputListName, taskList: [] };
        currentList = newList;

        $("ul#lists").append("<li><span class='list'>" + newList.listName + "</span></li>");
        $("input#new-list-name").val("");


       $(".list").last().click(function () {
            $("#show-list").show();
            $("#show-list h2").text(newList.listName);
            $("#show-list ul").text("");
            newList.taskList.forEach (function (eachTask) {
                $("ul#tasks").append("<li><span class='task'>" + eachTask.taskName + "</span></li>");
             });
            currentList = newList;
        });

       event.preventDefault();

    });

    $("form#new-task").submit (function (event) {
        var taskItem = {taskName: ""};
        var inputTaskName = $("input#new-task-name").val();
        taskItem.taskName = inputTaskName;
        currentList.taskList.push(taskItem);
        $("ul#tasks").append("<li><span class='task'>" + currentList.taskList[currentList.taskList.length-1].taskName + "</span></li>");
        $("input#new-task-name").val("");

        event.preventDefault();

    });

});
