Vue.component('task-list', {

  template: '#tasks-template',

  data() {
    return {
      list: [],
      completedList: [],
      taskString: ''
    };
  },

  computed: {

    remaining() {
      return this.list.filter(this.inProgress).length;
    }

  },

  methods: {

    toggleComplete(task) {
      return task.completed = ! task.completed;
    },

    isCompleted(task) {
      return task.completed;
    },

    inProgress(task) {
      return ! task.completed;
    },

    addTask(taskString) {
      let task = new Object();
      task.body = taskString;
      task.completed = false;
      this.taskString = '';
      this.list.push(task);
    },

    deleteTask(task) {
      task.completed = true;
      this.completedList.push(task);
      this.list.$remove(task);
    },

    clearCompleted() {
      this.completedList = [];
    },

    unComplete(task) {
      task.completed = false;
      this.completedList.$remove(task);
      this.list.push(task);
    }
  }
});

new Vue({

  el: '#app',

  data: {
    list: [
      { body: 'hello', completed: false }
    ]
  }

});
